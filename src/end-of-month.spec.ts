import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { endOfMonth } from "./end-of-month";

describe("endOfMonth", () => {
  it("returns the last day of the month for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-24");
    const result = endOfMonth(date);

    expect(result.toString()).toBe("2024-02-29");
  });

  it("returns the last day of the month for a Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = endOfMonth(dateTime);

    expect(result.toString()).toBe("2024-02-29T23:59:59.999999999");
  });

  it("returns the last day of the month for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = endOfMonth(zonedDateTime);

    expect(result.toString()).toBe(
      "2024-02-29T23:59:59.999999999+01:00[Europe/Copenhagen]",
    );
  });

  it("returns the last day of February for a leap year", () => {
    const result = endOfMonth(Temporal.PlainDate.from("2024-02-24"));

    expect(result.toString()).toBe("2024-02-29");
  });

  it("returns the last day of February for a non-leap year", () => {
    const result = endOfMonth(Temporal.PlainDate.from("2023-02-10"));

    expect(result.toString()).toBe("2023-02-28");
  });

  it("preserves the original time if preserveTime option is true for Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = endOfMonth(dateTime, { preserveTime: true });

    expect(result.toString()).toBe("2024-02-29T14:24:24.242424242");
  });

  it("preserves the original time if preserveTime option is true for Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = endOfMonth(zonedDateTime, { preserveTime: true });

    expect(result.toString()).toBe(
      "2024-02-29T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });
});
