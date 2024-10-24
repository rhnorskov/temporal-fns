# temporal-fns

A utility library for working with [Temporal](https://tc39.es/proposal-temporal/) dates and times, providing helper functions for common date and time manipulations.

### Installation

```bash
bun install temporal-fns
npm install temporal-fns
pnpm install temporal-fns
```

# Functions

- [startOfMonth](#startofmonth)
- [startOfWeek](#startofweek)
- [startOfDay](#startofday)
- [endOfMonth](#endofmonth)
- [endOfWeek](#endofweek)
- [endOfDay](#endofday)
- [nextDayOfWeek](#nextdayofweek)
- [previousDayOfWeek](#previousdayofweek)
- [firstDayOfWeekOfMonth](#firstdayofweekofmonth)
- [lastDayOfWeekOfMonth](#lastdayofweekofmonth)

## `startOfMonth`

Gets the first day of the month for the given `Temporal` object. Optionally, the time can be preserved instead of resetting to the start of the day (`00:00:00.000000000`).

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.
2. `[options]` _(Object)_: The options object.
   - `preserveTime` _(boolean)_: Specify whether to preserve the original time. Defaults to `false`.

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the first day of the month.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { startOfMonth } from "temporal-fns";

const dateTime = Temporal.PlainDateTime.from("2024-02-24T14:24:24");

startOfMonth(dateTime);
// => Temporal.PlainDateTime 2024-02-01T00:00:00

startOfMonth(dateTime, { preserveTime: true });
// => Temporal.PlainDateTime 2024-02-01T14:24:24
```

## `startOfWeek`

Gets the first day of the week (Monday) for the given `Temporal` object.

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the first day of the week (Monday).

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { startOfWeek } from "temporal-fns";

const date = Temporal.PlainDate.from("2024-02-21"); // A Wednesday

startOfWeek(date);
// => Temporal.PlainDate 2024-02-19 (Monday)
```

## `startOfDay`

Sets the time to the start of the day (`00:00:00.000000000`).

### Arguments

1. `temporal` _(Temporal.PlainTime | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to modify.

### Returns

_(Temporal.PlainTime | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object with the time set to the start of the day.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { startOfDay } from "temporal-fns";

const dateTime = Temporal.PlainDateTime.from("2024-02-24T14:24:24");

startOfDay(dateTime);
// => Temporal.PlainDateTime 2024-02-24T00:00:00
```

## `endOfMonth`

Gets the last day of the month for the given `Temporal` object. Optionally, the time can be preserved instead of resetting to the end of the day (`23:59:59.999999999`).

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.
2. `[options]` _(Object)_: The options object.
   - `preserveTime` _(boolean)_: Specify whether to preserve the original time. Defaults to `false`.

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the last day of the month.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { endOfMonth } from "temporal-fns";

const dateTime = Temporal.PlainDateTime.from("2024-02-24T14:24:24");

endOfMonth(dateTime);
// => Temporal.PlainDateTime 2024-02-29T23:59:59.999999999

endOfMonth(dateTime, { preserveTime: true });
// => Temporal.PlainDateTime 2024-02-29T14:24:24
```

## `endOfWeek`

Gets the last day of the week (Sunday) for the given `Temporal` object.

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the last day of the week (Sunday).

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { endOfWeek } from "temporal-fns";

const date = Temporal.PlainDate.from("2024-02-21"); // A Wednesday

endOfWeek(date);
// => Temporal.PlainDate 2024-02-25 (Sunday)
```

## `endOfDay`

Sets the time to the end of the day (`23:59:59.999999999`).

### Arguments

1. `temporal` _(Temporal.PlainTime | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to modify.

### Returns

_(Temporal.PlainTime | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object with the time set to the end of the day.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { endOfDay } from "temporal-fns";

const dateTime = Temporal.PlainDateTime.from("2024-02-24T14:24:24");

endOfDay(dateTime);
// => Temporal.PlainDateTime 2024-02-24T23:59:59.999999999
```

## `nextDayOfWeek`

Gets the next occurrence of a specific day of the week after the given `Temporal` object.

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.
2. `dayOfWeek` _(1 | 2 | 3 | 4 | 5 | 6 | 7)_: The desired day of the week (1 = Monday, 7 = Sunday).

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the next occurrence of the specified day of the week.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { nextDayOfWeek } from "temporal-fns";

const date = Temporal.PlainDate.from("2024-02-21");

nextDayOfWeek(date, 5); // Next Friday
// => Temporal.PlainDate 2024-02-23
```

## `previousDayOfWeek`

Gets the previous occurrence of a specific day of the week before the given `Temporal` object.

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.
2. `dayOfWeek` _(1 | 2 | 3 | 4 | 5 | 6 | 7)_: The desired day of the week (1 = Monday, 7 = Sunday).

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the previous occurrence of the specified day of the week.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { previousDayOfWeek } from "temporal-fns";

const date = Temporal.PlainDate.from("2024-02-21");

previousDayOfWeek(date, 1); // Previous Monday
// => Temporal.PlainDate 2024-02-19
```

## `firstDayOfWeekOfMonth`

Gets the first occurrence of a specific day of the week in the month of the given `Temporal` object.

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.
2. `dayOfWeek` _(1 | 2 | 3 | 4 | 5 | 6 | 7)_: The desired day of the week (1 = Monday, 7 = Sunday).

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the first occurrence of the specified day of the week in the month.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { firstDayOfWeekOfMonth } from "temporal-fns";

const date = Temporal.PlainDate.from("2024-02-24");

firstDayOfWeekOfMonth(date, 1); // First Monday of the month
// => Temporal.PlainDate 2024-02-05
```

## `lastDayOfWeekOfMonth`

Gets the last occurrence of a specific day of the week in the month of the given `Temporal` object.

### Arguments

1. `temporal` _(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: The Temporal object to query.
2. `dayOfWeek` _(1 | 2 | 3 | 4 | 5 | 6 | 7)_: The desired day of the week (1 = Monday, 7 = Sunday).

### Returns

_(Temporal.PlainDate | Temporal.PlainDateTime | Temporal.ZonedDateTime)_: Returns the new Temporal object set to the last occurrence of the specified day of the week in the month.

### Example

```ts
import { Temporal } from "@js-temporal/polyfill";
import { lastDayOfWeekOfMonth } from "temporal-fns";

const date = Temporal.PlainDate.from("2024-02-24");

lastDayOfWeekOfMonth(date, 1); // Last Monday of the month
// => Temporal.PlainDate 2024-02-26
```
