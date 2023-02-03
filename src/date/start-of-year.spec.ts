import { Temporal } from "@js-temporal/polyfill";

import { startOfYear } from "./start-of-year";

describe("startOfYear", () => {
  it("returns the first day of a year", () => {
    const date = new Temporal.PlainDate(2010, 11, 12);
    const result = startOfYear(date);

    expect(result.equals(new Temporal.PlainDate(2010, 1, 1))).toBeTruthy();
  });
});
