import { describe, expect, it } from "vitest";

import { fromDate } from "./from-date";

describe("fromDate", () => {
  it("returns a Temporal.Instant from a Date", () => {
    const date = new Date("2024-02-24T14:24:24.242Z");
    const result = fromDate(date);

    expect(result.toString()).toBe("2024-02-24T14:24:24.242Z");
  });
});
