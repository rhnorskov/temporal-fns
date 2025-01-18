import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { firstDayOfWeekOfMonth } from "./first-day-of-week-of-month";
import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";

setTemporalPolyfill(Temporal);

describe("firstDayOfWeekOfMonth", () => {
  const Temporal = getTemporalPolyfill();

  it("returns the first Monday of the month for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-24");
    const result = firstDayOfWeekOfMonth(date, 1);

    expect(result.toString()).toBe("2024-02-05");
  });

  it("returns the first Wednesday of the month for a Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = firstDayOfWeekOfMonth(dateTime, 3);

    expect(result.toString()).toBe("2024-02-07T14:24:24.242424242");
  });

  it("returns the first Friday of the month for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = firstDayOfWeekOfMonth(zonedDateTime, 5);

    expect(result.toString()).toBe(
      "2024-02-02T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });

  it("returns the first Sunday of the month for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-24");
    const result = firstDayOfWeekOfMonth(date, 7);

    expect(result.toString()).toBe("2024-02-04");
  });

  it("returns the first Tuesday of the month for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = firstDayOfWeekOfMonth(zonedDateTime, 2);

    expect(result.toString()).toBe(
      "2024-02-06T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });
});
