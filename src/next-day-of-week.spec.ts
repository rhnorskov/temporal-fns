import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { nextDayOfWeek } from "./next-day-of-week";
import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";

setTemporalPolyfill(Temporal);

describe("nextDayOfWeek", () => {
  const Temporal = getTemporalPolyfill();

  it("returns the following Monday given various dates before the same", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-20"), 1)).toEqual(
      Temporal.PlainDate.from("2024-10-21"),
    );

    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-19"), 1)).toEqual(
      Temporal.PlainDate.from("2024-10-21"),
    );

    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-18"), 1)).toEqual(
      Temporal.PlainDate.from("2024-10-21"),
    );

    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-17"), 1)).toEqual(
      Temporal.PlainDate.from("2024-10-21"),
    );

    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-16"), 1)).toEqual(
      Temporal.PlainDate.from("2024-10-21"),
    );

    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-22"), 1)).toEqual(
      Temporal.PlainDate.from("2024-10-28"),
    );
  });

  it("returns the following Tuesday given the Saturday before it", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-19"), 2)).toEqual(
      Temporal.PlainDate.from("2024-10-22"),
    );
  });

  it("returns the following Wednesday given the Saturday before it", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-19"), 3)).toEqual(
      Temporal.PlainDate.from("2024-10-23"),
    );
  });

  it("returns the following Thursday given the Saturday before it", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-19"), 4)).toEqual(
      Temporal.PlainDate.from("2024-10-24"),
    );
  });

  it("returns the following Friday given the Saturday before it", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-19"), 5)).toEqual(
      Temporal.PlainDate.from("2024-10-25"),
    );
  });

  it("returns the following Saturday given the Saturday before it", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-19"), 6)).toEqual(
      Temporal.PlainDate.from("2024-10-26"),
    );
  });

  it("returns next Sunday given the day is Sunday", () => {
    expect(nextDayOfWeek(Temporal.PlainDate.from("2024-10-20"), 7)).toEqual(
      Temporal.PlainDate.from("2024-10-27"),
    );
  });

  it("resolves PlainDateTime correctly", () => {
    const dateTime = Temporal.PlainDateTime.from("2024-10-22T12:00");
    const result = nextDayOfWeek(dateTime, 5); // Next Friday
    expect(result.toString()).toBe("2024-10-25T12:00:00");
  });

  it("resolves ZonedDateTime correctly", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-10-22T12:00:00+01:00[Europe/London]",
    );
    const result = nextDayOfWeek(zonedDateTime, 5); // Next Friday
    expect(result.toString()).toBe("2024-10-25T12:00:00+01:00[Europe/London]");
  });
});
