/* eslint-env mocha */

import { Temporal } from "@js-temporal/polyfill";
import { endOfYear } from "./end-of-year";

describe("endOfYear", () => {
  it("returns the date with date set the last day of a year", () => {
    const date = new Temporal.PlainDate(2014, 9 /* Sep */, 2);
    const result = endOfYear(date);
    expect(result).toStrictEqual(
      new Temporal.PlainDate(2014, 12 /* Dec */, 31)
    );
  });

  // it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a year", () => {
  //   const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
  //   const result = endOfYear(date);
  //   assert.deepStrictEqual(
  //     result,
  //     new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
  //   );
  // });

  // it("accepts a timestamp", () => {
  //   const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
  //   const result = endOfYear(date);
  //   assert.deepStrictEqual(
  //     result,
  //     new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
  //   );
  // });

  // it("does not mutate the original date", () => {
  //   const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
  //   endOfYear(date);
  //   assert.deepStrictEqual(date, new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
  // });

  // it("returns `Invalid Date` if the given date is invalid", () => {
  //   const result = endOfYear(new Date(NaN));
  //   assert(result instanceof Date && isNaN(result.getTime()));
  // });
});