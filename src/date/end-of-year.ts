import { Temporal } from "@js-temporal/polyfill";

export function endOfYear(temporal: Temporal.PlainDate): Temporal.PlainDate {
  return temporal.with({ month: 12, day: 31 });
}
