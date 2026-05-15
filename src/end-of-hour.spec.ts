import { describe, expect, it } from "vitest";
import { endOfHour } from "./end-of-hour.ts";

describe("endOfHour", () => {
	it("maxes out sub-hour units for Temporal.PlainTime", () => {
		const time = Temporal.PlainTime.from("14:24:24.242424242");
		expect(endOfHour(time).toString()).toBe("14:59:59.999999999");
	});

	it("maxes out sub-hour units for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-24T14:24:24.242424242",
		);
		expect(endOfHour(dateTime).toString()).toBe(
			"2024-02-24T14:59:59.999999999",
		);
	});

	it("maxes out sub-hour units for Temporal.ZonedDateTime", () => {
		const zonedDateTime = Temporal.ZonedDateTime.from(
			"2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
		);
		expect(endOfHour(zonedDateTime).toString()).toBe(
			"2024-02-24T14:59:59.999999999+01:00[Europe/Copenhagen]",
		);
	});
});
