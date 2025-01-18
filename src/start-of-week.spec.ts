import { Temporal } from "temporal-polyfill";
import { describe, expect, it } from "vitest";

import { startOfWeek } from "./start-of-week";

describe("startOfWeek", () => {
  it("returns the start of the week (Monday) for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-21");
    const result = startOfWeek(date);

    expect(result.toString()).toBe("2024-02-19");
  });

  it("returns the start of the week (Monday) for a Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-21T14:24:24.242424242",
    );
    const result = startOfWeek(dateTime);

    expect(result.toString()).toBe("2024-02-19T14:24:24.242424242");
  });

  it("returns the start of the week (Monday) for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-21T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = startOfWeek(zonedDateTime);

    expect(result.toString()).toBe(
      "2024-02-19T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });

  it("returns the same day if it's already Monday for Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-19");
    const result = startOfWeek(date);

    expect(result.toString()).toBe("2024-02-19");
  });

  it("returns the same day if it's already Monday for Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-19T14:24:24.242424242",
    );
    const result = startOfWeek(dateTime);

    expect(result.toString()).toBe("2024-02-19T14:24:24.242424242");
  });

  it("returns the same day if it's already Monday for Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-19T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = startOfWeek(zonedDateTime);

    expect(result.toString()).toBe(
      "2024-02-19T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });
});
