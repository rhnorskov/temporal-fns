import { Temporal } from "@js-temporal/polyfill";
import { endOfYear } from "./end-of-year";

describe("endOfYear", () => {
  it("returns the last day of a year", () => {
    const date = new Temporal.PlainDate(2010, 11, 12);
    const result = endOfYear(date);

    expect(result.equals(new Temporal.PlainDate(2010, 12, 31))).toBeTruthy();
  });
});
