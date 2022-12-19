import { Temporal } from "@js-temporal/polyfill";
import { eachYearOfInterval } from "./each-year-of-interval";

describe("eachYearOfInterval", () => {
  it("returns an array with starts of days from the day of the start Temporal.PlainDate to the day of the end Temporal.PlainDate", () => {
    const result = eachYearOfInterval({
      start: new Temporal.PlainDate(2012, 10 /* Oct */, 6),
      end: new Temporal.PlainDate(2017, 10 /* Oct */, 12),
    });

    expect(result).toStrictEqual([
      new Temporal.PlainDate(2012, 1 /* Jan */, 1),
      new Temporal.PlainDate(2013, 1 /* Jan */, 1),
      new Temporal.PlainDate(2014, 1 /* Jan */, 1),
      new Temporal.PlainDate(2015, 1 /* Jan */, 1),
      new Temporal.PlainDate(2016, 1 /* Jan */, 1),
      new Temporal.PlainDate(2017, 1 /* Jan */, 1),
    ]);
  });

  // it("accepts timestamps", () => {
  //   const result = eachYearOfInterval({
  //     start: new Temporal.PlainDate(2012, 9 /* Oct */, 6).getTime(),
  //     end: new Temporal.PlainDate(2017, 9 /* Oct */, 12).getTime(),
  //   });
  //   assert.deepStrictEqual(result, [
  //     new Temporal.PlainDate(2012, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2013, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2014, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2015, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2016, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2017, 0 /* Jan */, 1),
  //   ]);
  // });

  // it("handles the Temporal.PlainDates that are not starts of days", () => {
  //   const result = eachYearOfInterval({
  //     start: new Temporal.PlainDate(2012, 9 /* Oct */, 6, 6, 35),
  //     end: new Temporal.PlainDate(2017, 9 /* Oct */, 12, 22, 15),
  //   });
  //   assert.deepStrictEqual(result, [
  //     new Temporal.PlainDate(2012, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2013, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2014, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2015, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2016, 0 /* Jan */, 1),
  //     new Temporal.PlainDate(2017, 0 /* Jan */, 1),
  //   ]);
  // });

  // it("returns one year if the both arguments are on the same year", () => {
  //   const result = eachYearOfInterval({
  //     start: new Temporal.PlainDate(2014, 9 /* Oct */, 6, 14),
  //     end: new Temporal.PlainDate(2014, 9 /* Oct */, 6, 15),
  //   });
  //   assert.deepStrictEqual(result, [new Temporal.PlainDate(2014, 0 /* Jan */, 1)]);
  // });

  // it("returns one year if the both arguments are the same", () => {
  //   const result = eachYearOfInterval({
  //     start: new Temporal.PlainDate(2014, 9 /* Oct */, 6, 14),
  //     end: new Temporal.PlainDate(2014, 9 /* Oct */, 6, 14),
  //   });
  //   assert.deepStrictEqual(result, [new Temporal.PlainDate(2014, 0 /* Jan */, 1)]);
  // });

  // it("throws an exception if the start Temporal.PlainDate is after the end Temporal.PlainDate", () => {
  //   const block = eachYearOfInterval.bind(null, {
  //     start: new Temporal.PlainDate(2014, 9 /* Oct */, 12),
  //     end: new Temporal.PlainDate(2014, 9 /* Oct */, 6),
  //   });
  //   assert.throws(block, RangeError);
  // });

  // it("throws an exception if the start Temporal.PlainDate is `Invalid Temporal.PlainDate`", () => {
  //   const block = eachYearOfInterval.bind(null, {
  //     // @ts-expect-error
  //     start: new Temporal.PlainDate(NaN),
  //     end: new Temporal.PlainDate(2014, 9 /* Oct */, 6),
  //   });
  //   assert.throws(block, RangeError);
  // });

  // it("throws an exception if the end Temporal.PlainDate is `Invalid Temporal.PlainDate`", () => {
  //   const block = eachYearOfInterval.bind(null, {
  //     start: new Temporal.PlainDate(2014, 9 /* Oct */, 12),
  //     // @ts-expect-error
  //     end: new Temporal.PlainDate(NaN),
  //   });
  //   assert.throws(block, RangeError);
  // });
});
