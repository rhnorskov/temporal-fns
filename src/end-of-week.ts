import { Temporal } from "@js-temporal/polyfill";

export function endOfWeek<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T): T {
  return temporal.add({ days: 7 - temporal.dayOfWeek }) as T;
}
