import { Temporal } from "@js-temporal/polyfill";

export function startOfYear(dirtyDate: Temporal.PlainDate): Temporal.PlainDate {
  return new Temporal.PlainDate(dirtyDate.year, 1, 1);
}
