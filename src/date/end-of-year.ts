import { Temporal } from "@js-temporal/polyfill";

export function endOfYear(dirtyDate: Temporal.PlainDate): Temporal.PlainDate {
  return new Temporal.PlainDate(dirtyDate.year + 1, 1, 1).subtract({ days: 1 });
}
