import { Temporal } from "@js-temporal/polyfill";
import { startOfWeek } from "./start-of-week";

describe("startOfWeek", () => {
  it("returns the first day of a week", () => {
    const date = new Temporal.PlainDate(2010, 11, 12);
    const result = startOfWeek(date);

    expect(result.equals(new Temporal.PlainDate(2010, 11, 8))).toBeTruthy();
  });
});
