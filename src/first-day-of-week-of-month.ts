import { Temporal } from "@js-temporal/polyfill";

import { type DayOfWeek } from "./day-of-week";
import { startOfMonth } from "./start-of-month";

export function firstDayOfWeekOfMonth<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, dayOfWeek: DayOfWeek): T {
  const firstDay = startOfMonth(temporal, { preserveTime: true });

  const delta = (dayOfWeek - firstDay.dayOfWeek + 7) % 7;

  return firstDay.add({ days: delta }) as T;
}
