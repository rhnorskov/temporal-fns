import { describe, expect, it } from "vitest";
import { startOfSecond } from "./start-of-second.ts";

describe("startOfSecond", () => {
	it("zeroes out sub-second units for Temporal.PlainTime", () => {
		const time = Temporal.PlainTime.from("14:24:24.242424242");
		expect(startOfSecond(time).toString()).toBe("14:24:24");
	});

	it("zeroes out sub-second units for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-24T14:24:24.242424242",
		);
		expect(startOfSecond(dateTime).toString()).toBe("2024-02-24T14:24:24");
	});
});
