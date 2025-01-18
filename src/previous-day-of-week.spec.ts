import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";
import { previousDayOfWeek } from "./previous-day-of-week";

setTemporalPolyfill(Temporal);

describe("previousDayOfWeek", () => {
  const Temporal = getTemporalPolyfill();

  it("returns the previous Monday given various dates after the same", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-18"), 1)).toEqual(
      Temporal.PlainDate.from("2021-06-14"),
    );

    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-17"), 1)).toEqual(
      Temporal.PlainDate.from("2021-06-14"),
    );

    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-14"), 1)).toEqual(
      Temporal.PlainDate.from("2021-06-07"),
    );

    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-09"), 1)).toEqual(
      Temporal.PlainDate.from("2021-06-07"),
    );

    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-08"), 1)).toEqual(
      Temporal.PlainDate.from("2021-06-07"),
    );

    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-07"), 1)).toEqual(
      Temporal.PlainDate.from("2021-05-31"),
    );
  });

  it("returns the previous Tuesday given the Saturday after it", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-26"), 2)).toEqual(
      Temporal.PlainDate.from("2021-06-22"),
    );
  });

  it("returns the previous Wednesday given the Saturday after it", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-26"), 3)).toEqual(
      Temporal.PlainDate.from("2021-06-23"),
    );
  });

  it("returns the previous Thursday given the Saturday after it", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-26"), 4)).toEqual(
      Temporal.PlainDate.from("2021-06-24"),
    );
  });

  it("returns the previous Friday given the Saturday after it", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-26"), 5)).toEqual(
      Temporal.PlainDate.from("2021-06-25"),
    );
  });

  it("returns the previous Saturday given the Saturday after it", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-26"), 6)).toEqual(
      Temporal.PlainDate.from("2021-06-19"),
    );
  });

  it("returns the previous Sunday given the day is Sunday", () => {
    expect(previousDayOfWeek(Temporal.PlainDate.from("2021-06-27"), 7)).toEqual(
      Temporal.PlainDate.from("2021-06-20"),
    );
  });

  it("resolves PlainDateTime correctly", () => {
    const result = previousDayOfWeek(
      Temporal.PlainDateTime.from("2021-06-18T12:00"),
      1,
    );

    expect(result.toString()).toBe("2021-06-14T12:00:00");
  });

  it("resolves ZonedDateTime correctly", () => {
    const result = previousDayOfWeek(
      Temporal.ZonedDateTime.from("2021-06-18T12:00:00+01:00[Europe/London]"),
      1,
    );

    expect(result.toString()).toBe("2021-06-14T12:00:00+01:00[Europe/London]");
  });
});
