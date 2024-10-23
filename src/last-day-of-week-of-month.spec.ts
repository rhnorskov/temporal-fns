import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { lastDayOfWeekOfMonth } from "./last-day-of-week-of-month";

describe("lastDayOfWeekOfMonth", () => {
  it("returns the last Monday of the month for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-24");
    const result = lastDayOfWeekOfMonth(date, 1);

    expect(result.toString()).toBe("2024-02-26");
  });

  it("returns the last Wednesday of the month for a Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = lastDayOfWeekOfMonth(dateTime, 3);

    expect(result.toString()).toBe("2024-02-28T14:24:24.242424242");
  });

  it("returns the last Friday of the month for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = lastDayOfWeekOfMonth(zonedDateTime, 5);

    expect(result.toString()).toBe(
      "2024-02-23T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });

  it("returns the last Sunday of the month for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-24");
    const result = lastDayOfWeekOfMonth(date, 7);

    expect(result.toString()).toBe("2024-02-25");
  });

  it("returns the last Tuesday of the month for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = lastDayOfWeekOfMonth(zonedDateTime, 2);

    expect(result.toString()).toBe(
      "2024-02-27T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });
});
