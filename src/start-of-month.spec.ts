import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";
import { startOfMonth } from "./start-of-month";

setTemporalPolyfill(Temporal);

describe("startOfMonth", () => {
  const Temporal = getTemporalPolyfill();
  it("returns the first day of the month for a Temporal.PlainDate", () => {
    const result = startOfMonth(Temporal.PlainDate.from("2024-02-24"));

    expect(result.toString()).toBe("2024-02-01");
  });

  it("returns the first day of the month for a Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = startOfMonth(dateTime);

    expect(result.toString()).toBe("2024-02-01T00:00:00");
  });

  it("returns the first day of the month for a Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = startOfMonth(zonedDateTime);

    expect(result.toString()).toBe(
      "2024-02-01T00:00:00+01:00[Europe/Copenhagen]",
    );
  });

  it("preserves the original time if preserveTime option is true for Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = startOfMonth(dateTime, { preserveTime: true });

    expect(result.toString()).toBe("2024-02-01T14:24:24.242424242");
  });

  it("preserves the original time if preserveTime option is true for Temporal.ZonedDateTime", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = startOfMonth(zonedDateTime, { preserveTime: true });

    expect(result.toString()).toBe(
      "2024-02-01T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
  });
});
