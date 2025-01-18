import { Temporal } from "temporal-polyfill";

import { type DayOfWeek } from "./day-of-week";

export function previousDayOfWeek<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, dayOfWeek: DayOfWeek): T {
  let delta = temporal.dayOfWeek - dayOfWeek;

  if (delta <= 0) {
    delta += 7;
  }

  return temporal.subtract({ days: delta }) as T;
}
