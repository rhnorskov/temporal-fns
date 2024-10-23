import { Temporal } from "@js-temporal/polyfill";

export function startOfDay<
  T extends
    | Temporal.PlainTime
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T): T {
  return temporal.with({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  }) as T;
}
