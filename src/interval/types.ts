import type { Temporal } from "@js-temporal/polyfill";

export interface Interval {
  start: Temporal.PlainDate;
  end: Temporal.PlainDate;
}
