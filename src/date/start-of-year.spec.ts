/* eslint-env mocha */

import { Temporal } from "@js-temporal/polyfill";
import { startOfYear } from "./start-of-year";

describe("startOfYear", () => {
  it("returns the date set to the first day of a year", () => {
    const date = new Temporal.PlainDate(2014, 9 /* Sep */, 2);
    const result = startOfYear(date);
    expect(result).toStrictEqual(new Temporal.PlainDate(2014, 1 /* Jan */, 1));
  });
  // it("returns the date with the time set to 00:00:00 and the date set to the first day of a year", () => {
  //   const date = new Temporal.PlainDate(2014, 8 /* Sep */, 2, 11, 55, 0);
  //   const result = startOfYear(date);
  //   assert.deepStrictEqual(result, new Temporal.PlainDate(2014, 0 /* Jan */, 1, 0, 0, 0, 0));
  // });
  // it("accepts a timestamp", () => {
  //   const date = new Temporal.PlainDate(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
  //   const result = startOfYear(date);
  //   assert.deepStrictEqual(result, new Temporal.PlainDate(2014, 0 /* Dec */, 1, 0, 0, 0, 0));
  // });
  // it("does not mutate the original date", () => {
  //   const date = new Temporal.PlainDate(2014, 8 /* Sep */, 2, 11, 55, 0);
  //   startOfYear(date);
  //   assert.deepStrictEqual(date, new Temporal.PlainDate(2014, 8 /* Sep */, 2, 11, 55, 0));
  // });
  // it("handles dates before 100 AD", () => {
  //   const initialDate = new Temporal.PlainDate(0);
  //   initialDate.setFullYear(9, 0 /* Jan */, 5);
  //   initialDate.setHours(0, 0, 0, 0);
  //   const expectedResult = new Temporal.PlainDate(0);
  //   expectedResult.setFullYear(9, 0 /* Jan */, 1);
  //   expectedResult.setHours(0, 0, 0, 0);
  //   const result = startOfYear(initialDate);
  //   assert.deepStrictEqual(result, expectedResult);
  // });
  // it("returns `Invalid Date` if the given date is invalid", () => {
  //   const result = startOfYear(new Temporal.PlainDate(NaN));
  //   assert(result instanceof Date && isNaN(result.getTime()));
  // });
});
