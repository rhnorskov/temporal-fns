import { describe, expect, it } from "vitest";
import { endOfSecond } from "./end-of-second.ts";

describe("endOfSecond", () => {
	it("maxes out sub-second units for Temporal.PlainTime", () => {
		const time = Temporal.PlainTime.from("14:24:24.242424242");
		expect(endOfSecond(time).toString()).toBe("14:24:24.999999999");
	});

	it("maxes out sub-second units for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-24T14:24:24.242424242",
		);
		expect(endOfSecond(dateTime).toString()).toBe(
			"2024-02-24T14:24:24.999999999",
		);
	});
});
