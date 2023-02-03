import { Temporal } from "@js-temporal/polyfill";

export function startOfWeek(temporal: Temporal.PlainDate): Temporal.PlainDate {
  return temporal.subtract({ days: temporal.dayOfWeek - 1 });
}
