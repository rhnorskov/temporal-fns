# temporal-fns

A utility library for working with [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) dates and times, providing helper functions for common date and time manipulations.

## Installation

```bash
npm install temporal-fns
```

## Requirements

`temporal-fns` v2+ uses the **native `Temporal` global** and ships **ESM only**.

- Node.js **26 or later** (Temporal is enabled by default).
- Browsers / runtimes that expose the `Temporal` global natively.

If you need to run on an older runtime, install and load a polyfill (for example [`temporal-polyfill`](https://www.npmjs.com/package/temporal-polyfill)) before importing this package. Pre-v2 releases bundled a polyfill — v2 leaves that choice to you.

## Quick example

```ts
import { startOfMonth, addBusinessDays, eachDayOfInterval } from "temporal-fns";

const today = Temporal.Now.plainDateISO();

startOfMonth(today);
addBusinessDays(today, 5);
eachDayOfInterval({ start: today, end: today.add({ days: 6 }) });
```

## API

### Period boundaries

- `startOfDay` / `endOfDay`
- `startOfHour` / `endOfHour`
- `startOfMinute` / `endOfMinute`
- `startOfSecond` / `endOfSecond`
- `startOfWeek` / `endOfWeek` — accepts `{ weekStartsOn?, preserveTime? }`. Default is Monday-start (ISO).
  `endOfWeek` snaps to end-of-day for time-bearing inputs unless `preserveTime: true`.
- `startOfMonth` / `endOfMonth` — accepts `{ preserveTime }`
- `startOfQuarter` / `endOfQuarter` — accepts `{ preserveTime }`
- `startOfYear` / `endOfYear` — accepts `{ preserveTime }`

```ts
startOfMonth(Temporal.PlainDateTime.from("2024-02-24T14:24:24"));
// => 2024-02-01T00:00:00

startOfMonth(Temporal.PlainDateTime.from("2024-02-24T14:24:24"), {
  preserveTime: true,
});
// => 2024-02-01T14:24:24

endOfQuarter(Temporal.PlainDate.from("2024-02-15"));
// => 2024-03-31

endOfWeek(Temporal.PlainDate.from("2024-02-21"), { weekStartsOn: 7 });
// => 2024-02-24 (Saturday, when the week starts on Sunday)
```

### Day-of-week navigation

- `nextDayOfWeek(temporal, dayOfWeek)` / `previousDayOfWeek(temporal, dayOfWeek)`
- `firstDayOfWeekOfMonth(temporal, dayOfWeek)` / `lastDayOfWeekOfMonth(temporal, dayOfWeek)`

The `dayOfWeek` argument uses ISO numbering (1 = Monday, 7 = Sunday).

```ts
nextDayOfWeek(Temporal.PlainDate.from("2024-02-21"), 5);
// => 2024-02-23 (Friday)

previousDayOfWeek(Temporal.PlainDate.from("2024-02-21"), 1);
// => 2024-02-19
```

### Predicates

- `isWeekend`, `isBusinessDay`
- `isFirstDayOfMonth`, `isLastDayOfMonth`
- `isToday`, `isYesterday`, `isTomorrow`
- `isPast`, `isFuture`

```ts
isWeekend(Temporal.PlainDate.from("2024-02-24")); // true (Saturday)
isToday(Temporal.Now.plainDateISO()); // true
```

For day-of-week or leap-year checks against a single field, use the built-in getters directly: `t.dayOfWeek === 1`, `t.inLeapYear`.

### Same-period predicates

- `isSameDay`, `isSameWeek`, `isSameMonth`, `isSameQuarter`, `isSameYear`
- `isSameHour`, `isSameMinute`, `isSameSecond`

Both arguments must be the same `Temporal` type. `isSameWeek` accepts `{ weekStartsOn? }` (default Monday).

```ts
isSameMonth(
  Temporal.PlainDate.from("2024-02-01"),
  Temporal.PlainDate.from("2024-02-29"),
);
// => true
```

### Comparison & selection

- `compare(a, b)` — returns `-1 | 0 | 1`, picking the right `Temporal.<Type>.compare` for the inputs.
- `min(values)`, `max(values)` — both throw `RangeError` on empty arrays.
- `clamp(value, interval)` — same `Interval<T>` shape as elsewhere
- `closestTo(target, candidates)` — returns `null` for empty arrays.
- `closestIndexTo(target, candidates)` — returns `-1` for empty arrays.

```ts
min([
  Temporal.PlainDate.from("2024-02-21"),
  Temporal.PlainDate.from("2024-02-19"),
  Temporal.PlainDate.from("2024-02-25"),
]);
// => 2024-02-19

clamp(Temporal.PlainDate.from("2024-02-25"), {
  start: Temporal.PlainDate.from("2024-02-10"),
  end: Temporal.PlainDate.from("2024-02-20"),
});
// => 2024-02-20
```

### Intervals

An `Interval<T>` is `{ start: T; end: T }` where `T` is any comparable `Temporal` type.

- `eachDayOfInterval` / `eachMonthOfInterval` / `eachQuarterOfInterval` / `eachYearOfInterval`. For time-bearing inputs, all of these snap to start-of-period (e.g. `eachDayOfInterval` returns midnight for the first element).
- `eachWeekOfInterval` — accepts `{ weekStartsOn? }`.
- `eachHourOfInterval` / `eachMinuteOfInterval` (PlainDateTime / ZonedDateTime)
- `isWithinInterval(value, interval)` — inclusive on both ends.
- `areIntervalsOverlapping(a, b, { inclusive? })` — exclusive by default; back-to-back intervals count as overlapping only when `inclusive: true`.
- `intervalToDuration(interval, options?)` — returns a `Temporal.Duration`. `options` accepts the same shape as Temporal's `.until()` (`largestUnit`, `smallestUnit`, `roundingIncrement`, `roundingMode`).

```ts
eachDayOfInterval({
  start: Temporal.PlainDate.from("2024-02-19"),
  end: Temporal.PlainDate.from("2024-02-22"),
});
// => [2024-02-19, 2024-02-20, 2024-02-21, 2024-02-22]

intervalToDuration({
  start: Temporal.PlainDateTime.from("2024-01-01T00:00:00"),
  end: Temporal.PlainDateTime.from("2025-02-15T13:30:45"),
});
// => Duration P1Y1M14DT13H30M45S

intervalToDuration(
  {
    start: Temporal.PlainDate.from("2024-01-01"),
    end: Temporal.PlainDate.from("2024-03-15"),
  },
  { largestUnit: "day" },
);
// => Duration P74D
```

### Business days

Saturday + Sunday are weekend by default. Pass `{ weekendDays }` (ISO day numbers, 1 = Mon, 7 = Sun) to override — useful for Fri/Sat weekends and similar. No holiday calendar is built in.

- `isBusinessDay(temporal, { weekendDays? })`
- `addBusinessDays(temporal, amount, { weekendDays? })` / `subBusinessDays(temporal, amount, { weekendDays? })`
- `differenceInBusinessDays(later, earlier, { weekendDays? })`

```ts
addBusinessDays(Temporal.PlainDate.from("2024-02-23"), 1);
// => 2024-02-26 (Friday + 1 business day = Monday)

addBusinessDays(Temporal.PlainDate.from("2024-02-22"), 1, {
  weekendDays: [5, 6],
});
// => 2024-02-25 (Thu + 1 with Fri/Sat as weekend = Sun)

differenceInBusinessDays(
  Temporal.PlainDate.from("2024-02-26"),
  Temporal.PlainDate.from("2024-02-19"),
);
// => 5
```

### Misc

- `getQuarter(temporal)` — `1 | 2 | 3 | 4`.
- `fromDate(date)` — converts a JS `Date` to `Temporal.Instant`. Pass a `timeZone` (`fromDate(date, "Europe/Copenhagen")`) to get a `Temporal.ZonedDateTime`. For `PlainDate` or `PlainDateTime`, chain `.toPlainDate()` / `.toPlainDateTime()` on the zoned result so the zone choice is explicit.
- `toDate(temporal)` — converts an `Instant`, `PlainDate`, `PlainDateTime`, or `ZonedDateTime` back to a JS `Date`. `Instant` and `ZonedDateTime` preserve the absolute instant; `PlainDate` / `PlainDateTime` are built as local-zone `Date`s using their wall-clock fields.

### Shared type helpers

A handful of union types are re-exported so you can build your own helpers on the same primitives:

- `TemporalWithDate` — `PlainDate | PlainDateTime | ZonedDateTime`
- `TemporalWithTime` — `PlainTime | PlainDateTime | ZonedDateTime`
- `TemporalWithDateTime` — `PlainDateTime | ZonedDateTime`
- `TemporalWithYearMonth` — `PlainDate | PlainDateTime | PlainYearMonth | ZonedDateTime`
- `ComparableTemporal` — every `Temporal` type with a static `compare` (everything except `PlainMonthDay`)
- `Interval<T extends ComparableTemporal>` — `{ start: T; end: T }`

## License

MIT
