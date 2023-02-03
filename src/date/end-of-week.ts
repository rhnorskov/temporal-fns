import { Temporal } from "@js-temporal/polyfill";

export function endOfWeek(temporal: Temporal.PlainDate): Temporal.PlainDate {
  return temporal.add({ days: 7 - temporal.dayOfWeek });
}
