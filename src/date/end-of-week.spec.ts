import { Temporal } from "@js-temporal/polyfill";
import { endOfWeek } from "./end-of-week";

describe("endOfWeek", () => {
  it("returns the last day of a week", () => {
    const date = new Temporal.PlainDate(2010, 11, 12);
    const result = endOfWeek(date);

    expect(result.equals(new Temporal.PlainDate(2010, 11, 14))).toBeTruthy();
  });
});
