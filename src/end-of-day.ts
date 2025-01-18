import type { Temporal } from "@js-temporal/polyfill";

export function endOfDay<
  T extends
    | Temporal.PlainTime
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T): T {
  return temporal.with({
    hour: 23,
    minute: 59,
    second: 59,
    millisecond: 999,
    microsecond: 999,
    nanosecond: 999,
  }) as T;
}
