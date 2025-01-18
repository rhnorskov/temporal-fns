import { Temporal } from "temporal-polyfill";

export function fromDate(date: Date): Temporal.Instant {
  return Temporal.Instant.fromEpochMilliseconds(date.getTime());
}
