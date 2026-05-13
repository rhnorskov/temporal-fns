---
"temporal-fns": major
---

v2: drop `temporal-polyfill` dependency and target native Temporal.

**Breaking changes**

- `temporal-polyfill` is no longer a runtime dependency. The package now uses the global `Temporal` namespace shipped natively (Node 26+, browsers with native support). If you target an older runtime, install and load a polyfill yourself before importing this package.
- Minimum Node version is now `>=26.0.0`.
- The package is now ESM-only; the CommonJS build has been removed. Use `import` or dynamic `import()`.
- `endOfWeek` now snaps to end-of-day (`23:59:59.999999999`) for time-bearing inputs to match `endOfMonth` / `endOfQuarter` / `endOfYear`. Pass `{ preserveTime: true }` to keep the original wall-clock time.
- `eachDayOfInterval` now snaps the first element to start-of-day for `PlainDateTime` / `ZonedDateTime` inputs, matching `date-fns` and the rest of the `each-*` family.
- `toDate` on `ZonedDateTime` now uses `epochMilliseconds` directly so the resulting `Date` represents the same absolute instant, regardless of the runtime's local time zone. Previously, the result depended on the host time zone.

**New utilities ported from `date-fns`**

- Start/end-of: `startOfYear`/`endOfYear`, `startOfQuarter`/`endOfQuarter`, `startOfHour`/`endOfHour`, `startOfMinute`/`endOfMinute`, `startOfSecond`/`endOfSecond`.
- Same-period predicates: `isSameDay`, `isSameWeek`, `isSameMonth`, `isSameQuarter`, `isSameYear`, `isSameHour`, `isSameMinute`, `isSameSecond`.
- Day-of-week predicates: `isWeekend`, `isBusinessDay`.
- Boundary predicates: `isFirstDayOfMonth`, `isLastDayOfMonth`.
- Today/relative predicates: `isToday`, `isYesterday`, `isTomorrow`, `isPast`, `isFuture`.
- Comparison: `compare`, `min`, `max`, `clamp`, `closestTo`, `closestIndexTo`.
- Interval helpers: `Interval` type, `eachDayOfInterval`, `eachWeekOfInterval`, `eachMonthOfInterval`, `eachQuarterOfInterval`, `eachYearOfInterval`, `eachHourOfInterval`, `eachMinuteOfInterval`, `isWithinInterval`, `areIntervalsOverlapping`, `intervalToDuration`.
- Business days: `isBusinessDay`, `addBusinessDays`, `subBusinessDays`, `differenceInBusinessDays`.
- Quarter: `getQuarter`.

**New options**

- `weekStartsOn?: DayOfWeek` on `startOfWeek`, `endOfWeek`, `eachWeekOfInterval`, and `isSameWeek` — default `1` (Monday, ISO). Pass `7` for a Sunday-start week.
- `preserveTime?: boolean` on `endOfWeek`, `startOfMonth`/`endOfMonth`, `startOfQuarter`/`endOfQuarter`, `startOfYear`/`endOfYear`.
- `weekendDays?: readonly DayOfWeek[]` on `isBusinessDay`, `addBusinessDays`, `subBusinessDays`, `differenceInBusinessDays` — default `[6, 7]` (Sat, Sun).
- `largestUnit` / `smallestUnit` / `roundingIncrement` / `roundingMode` on `intervalToDuration`, reusing Temporal's `RoundingOptionsWithLargestUnit` shape.
- `fromDate(date, timeZone)` returns a `Temporal.ZonedDateTime` (overload of `fromDate(date) => Instant`).
