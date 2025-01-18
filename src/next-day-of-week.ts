import { Temporal } from "temporal-polyfill";

import { type DayOfWeek } from "./day-of-week";

export function nextDayOfWeek<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, dayOfWeek: DayOfWeek): T {
  let delta = dayOfWeek - temporal.dayOfWeek;

  if (delta <= 0) {
    delta += 7;
  }

  return temporal.add({ days: delta }) as T;
}
