import { Temporal } from "@js-temporal/polyfill";
import { Interval } from "./types";

export function eachYearOfInterval(interval: Interval): Temporal.PlainDate[] {
  const result: Temporal.PlainDate[] = [];
  const { start, end } = interval;

  for (let year = start.year; year <= end.year; year++) {
    result.push(new Temporal.PlainDate(year, 1, 1));
  }

  return result;
}
