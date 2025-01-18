import { Temporal } from "temporal-polyfill";

export function toDate<
  T extends
    | Temporal.Instant
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T): Date {
  if (temporal instanceof Temporal.Instant) {
    return new Date(temporal.epochMilliseconds);
  }

  if (temporal instanceof Temporal.PlainDate) {
    return new Date(temporal.year, temporal.month - 1, temporal.day);
  }

  if (temporal instanceof Temporal.PlainDateTime) {
    return new Date(
      temporal.year,
      temporal.month - 1,
      temporal.day,
      temporal.hour,
      temporal.minute,
      temporal.second,
      temporal.millisecond,
    );
  }

  if (temporal instanceof Temporal.ZonedDateTime) {
    const utc = temporal.withTimeZone("UTC");

    return new Date(
      utc.year,
      utc.month - 1,
      utc.day,
      utc.hour,
      utc.minute,
      utc.second,
      utc.millisecond,
    );
  }
}
