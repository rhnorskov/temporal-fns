import { describe, expect, it } from "vitest";
import { startOfMinute } from "./start-of-minute.ts";

describe("startOfMinute", () => {
	it("zeroes out sub-minute units for Temporal.PlainTime", () => {
		const time = Temporal.PlainTime.from("14:24:24.242424242");
		expect(startOfMinute(time).toString()).toBe("14:24:00");
	});

	it("zeroes out sub-minute units for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-24T14:24:24.242424242",
		);
		expect(startOfMinute(dateTime).toString()).toBe("2024-02-24T14:24:00");
	});

	it("zeroes out sub-minute units for Temporal.ZonedDateTime", () => {
		const zonedDateTime = Temporal.ZonedDateTime.from(
			"2024-02-24T14:24:24.242424242+01:00[Europe/Copenhagen]",
		);
		expect(startOfMinute(zonedDateTime).toString()).toBe(
			"2024-02-24T14:24:00+01:00[Europe/Copenhagen]",
		);
	});
});
