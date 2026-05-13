import { describe, expect, it } from "vitest";
import { endOfMinute } from "./end-of-minute";

describe("endOfMinute", () => {
	it("maxes out sub-minute units for Temporal.PlainTime", () => {
		const time = Temporal.PlainTime.from("14:24:24.242424242");
		expect(endOfMinute(time).toString()).toBe("14:24:59.999999999");
	});

	it("maxes out sub-minute units for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-24T14:24:24.242424242",
		);
		expect(endOfMinute(dateTime).toString()).toBe(
			"2024-02-24T14:24:59.999999999",
		);
	});
});
