process.env.TZ = "UTC";

import { Temporal } from "temporal-polyfill";
import { describe, expect, it } from "vitest";

import { toDate } from "./to-date";

describe("toDate", () => {
  it("converts Temporal.Instant to a Date object", () => {
    const instant = Temporal.Instant.from("2024-02-21T14:24:24.242Z");
    const result = toDate(instant);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-02-21T14:24:24.242Z");
  });

  it("converts Temporal.PlainDate to a Date object", () => {
    const plainDate = Temporal.PlainDate.from("2024-02-21");
    const result = toDate(plainDate);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-02-21T00:00:00.000Z");
  });

  it("converts Temporal.PlainDateTime to a Date object", () => {
    const plainDateTime = Temporal.PlainDateTime.from(
      "2024-02-21T14:24:24.242",
    );
    const result = toDate(plainDateTime);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-02-21T14:24:24.242Z");
  });

  it("converts Temporal.ZonedDateTime to a Date object", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-21T14:24:24.242+01:00[Europe/Copenhagen]",
    );
    const result = toDate(zonedDateTime);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-02-21T13:24:24.242Z");
  });

  it("handles Temporal.PlainDate at the start of the year", () => {
    const plainDate = Temporal.PlainDate.from("2024-01-01");
    const result = toDate(plainDate);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-01-01T00:00:00.000Z");
  });

  it("handles Temporal.PlainDateTime with milliseconds", () => {
    const plainDateTime = Temporal.PlainDateTime.from(
      "2024-02-21T14:24:24.999",
    );
    const result = toDate(plainDateTime);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-02-21T14:24:24.999Z");
  });

  it("handles Temporal.ZonedDateTime at midnight", () => {
    const zonedDateTime = Temporal.ZonedDateTime.from(
      "2024-02-21T00:00:00.000+01:00[Europe/Copenhagen]",
    );
    const result = toDate(zonedDateTime);

    expect(result).toBeInstanceOf(Date);
    expect(result.toISOString()).toBe("2024-02-20T23:00:00.000Z");
  });
});
