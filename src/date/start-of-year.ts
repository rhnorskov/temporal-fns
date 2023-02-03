import { Temporal } from "@js-temporal/polyfill";

export function startOfYear(temporal: Temporal.PlainDate): Temporal.PlainDate {
  return temporal.with({ month: 1, day: 1 });
}
