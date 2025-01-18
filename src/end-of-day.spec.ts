import { Temporal } from "@js-temporal/polyfill";
import { describe, expect, it } from "vitest";

import { endOfDay } from "./end-of-day";
import { getTemporalPolyfill, setTemporalPolyfill } from "./polyfill";

setTemporalPolyfill(Temporal);

describe("endOfDay", () => {
  const Temporal = getTemporalPolyfill();

  it("sets the time to 23:59:59.999999999 for Temporal.PlainTime", () => {
    const time = Temporal.PlainTime.from("14:24:24.242424242");
    const result = endOfDay(time);

    expect(result.toString()).toBe("23:59:59.999999999");
  });

  it("sets the time to 23:59:59.999999999 for Temporal.PlainDateTime", () => {
    const dateTime = Temporal.PlainDateTime.from(
      "2024-02-24T14:24:24.242424242",
    );
    const result = endOfDay(dateTime);

    expect(result.toString()).toBe("2024-02-24T23:59:59.999999999");
  });

  it("sets the time to 23:59:59.999999999 for Temporal.ZonedDateTime", () => {
    const dateTime = Temporal.ZonedDateTime.from(
      "2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
    );
    const result = endOfDay(dateTime);

    expect(result.toString()).toBe(
      "2024-02-24T23:59:59.999999999+01:00[Europe/Copenhagen]",
    );
  });
});
