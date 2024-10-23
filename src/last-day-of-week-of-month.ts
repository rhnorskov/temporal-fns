import { Temporal } from "@js-temporal/polyfill";

import { type DayOfWeek } from "./day-of-week";
import { endOfMonth } from "./end-of-month";

export function lastDayOfWeekOfMonth<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, dayOfWeek: DayOfWeek): T {
  const lastDay = endOfMonth(temporal, { preserveTime: true });

  const delta = (lastDay.dayOfWeek - dayOfWeek + 7) % 7;

  return lastDay.subtract({ days: delta }) as T;
}
