import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";
import { startOfDay } from "./start-of-day";

setTemporalPolyfill(Temporal);

describe("startOfDay", () => {
  const Temporal = getTemporalPolyfill();

  it("sets the time to 00:00:00.000000000 for Temporal.PlainTime", () => {
    const time = Temporal.PlainTime.from("14:24:24.242424242");
    const result = startOfDay(time);

    expect(result.toString()).toBe("00:00:00");
  });

  it("sets the time to 00:00:00.000000000 for Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = startOfDay(dateTime);

    expect(result.toString()).toBe("2024-02-24T00:00:00");
  });

  it("sets the time to 00:00:00.000000000 for Temporal.ZonedDateTime", () => {
    const dateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = startOfDay(dateTime);

    expect(result.toString()).toBe(
      "2024-02-24T00:00:00+01:00[Europe/Copenhagen]",
    );
  });
});
