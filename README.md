# temporal-fns

A utility library for working with [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal) dates and times, providing helper functions for common date and time manipulations.

**[Documentation](https://temporal-fns.js.org)** · **[npm](https://www.npmjs.com/package/temporal-fns)** · **[GitHub](https://github.com/rhnorskov/temporal-fns)**

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

## API overview

See the **[full API documentation](https://temporal-fns.js.org)** for detailed signatures and examples.

| Category | Functions |
| --- | --- |
| **Period boundaries** | `startOfDay`, `endOfDay`, `startOfHour`, `endOfHour`, `startOfMinute`, `endOfMinute`, `startOfSecond`, `endOfSecond`, `startOfWeek`, `endOfWeek`, `startOfMonth`, `endOfMonth`, `startOfQuarter`, `endOfQuarter`, `startOfYear`, `endOfYear` |
| **Day-of-week navigation** | `nextDayOfWeek`, `previousDayOfWeek`, `firstDayOfWeekOfMonth`, `lastDayOfWeekOfMonth` |
| **Predicates** | `isWeekend`, `isBusinessDay`, `isFirstDayOfMonth`, `isLastDayOfMonth`, `isToday`, `isYesterday`, `isTomorrow`, `isPast`, `isFuture` |
| **Same-period predicates** | `isSameDay`, `isSameWeek`, `isSameMonth`, `isSameQuarter`, `isSameYear`, `isSameHour`, `isSameMinute`, `isSameSecond` |
| **Comparison & selection** | `compare`, `min`, `max`, `clamp`, `closestTo`, `closestIndexTo` |
| **Intervals** | `eachDayOfInterval`, `eachWeekOfInterval`, `eachMonthOfInterval`, `eachQuarterOfInterval`, `eachYearOfInterval`, `eachHourOfInterval`, `eachMinuteOfInterval`, `isWithinInterval`, `areIntervalsOverlapping`, `intervalToDuration` |
| **Business days** | `isBusinessDay`, `addBusinessDays`, `subBusinessDays`, `differenceInBusinessDays` |
| **Conversion** | `fromDate`, `toDate`, `getQuarter` |
| **Type helpers** | `Interval`, `ComparableTemporal`, `TemporalWithDate`, `TemporalWithTime`, `TemporalWithDateTime`, `TemporalWithYearMonth` |

## License

MIT
