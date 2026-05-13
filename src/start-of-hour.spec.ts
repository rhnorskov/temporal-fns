import { describe, expect, it } from "vitest";
import { startOfHour } from "./start-of-hour";

describe("startOfHour", () => {
	it("zeroes out sub-hour units for Temporal.PlainTime", () => {
		const time = Temporal.PlainTime.from("14:24:24.242424242");
		expect(startOfHour(time).toString()).toBe("14:00:00");
	});

	it("zeroes out sub-hour units for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-24T14:24:24.242424242",
		);
		expect(startOfHour(dateTime).toString()).toBe("2024-02-24T14:00:00");
	});

	it("zeroes out sub-hour units for Temporal.ZonedDateTime", () => {
		const zonedDateTime = Temporal.ZonedDateTime.from(
			"2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
		);
		expect(startOfHour(zonedDateTime).toString()).toBe(
			"2024-02-24T14:00:00+01:00[Europe/Copenhagen]",
		);
	});
});
