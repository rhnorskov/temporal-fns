import { Temporal } from "@js-temporal/polyfill";

export function parseJsDate(date: Date): Temporal.PlainDate {
  return new Temporal.PlainDate(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
}
