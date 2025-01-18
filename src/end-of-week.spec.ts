import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { endOfWeek } from "./end-of-week";
import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";

setTemporalPolyfill(Temporal);

describe("endOfWeek", () => {
  const Temporal = getTemporalPolyfill();

  it("returns the end of the week (Sunday) for a Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-21");
    const result = endOfWeek(date);

    expect(result.toString()).toBe("2024-02-25");
  });

  it("returns the end of the week (Sunday) for a Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-21T14:24:24.242424242",
    );
    const result = endOfWeek(dateTime);

    expect(result.toString()).toBe("2024-02-25T14:24:24.242424242");
  });

  it("returns the end of the week (Sunday) for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-21T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = endOfWeek(zonedDateTime);

    expect(result.toString()).toBe(
      "2024-02-25T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });

  it("returns the same day if it's already Sunday for Temporal.PlainDate", () => {
    const date = Temporal.PlainDate.from("2024-02-25");
    const result = endOfWeek(date);

    expect(result.toString()).toBe("2024-02-25");
  });

  it("returns the same day if it's already Sunday for Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-25T14:24:24.242424242",
    );
    const result = endOfWeek(dateTime);

    expect(result.toString()).toBe("2024-02-25T14:24:24.242424242");
  });

  it("returns the same day if it's already Sunday for Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-25T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = endOfWeek(zonedDateTime);

    expect(result.toString()).toBe(
      "2024-02-25T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });
});
