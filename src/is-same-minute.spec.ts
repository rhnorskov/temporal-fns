import { describe, expect, it } from "vitest";
import { isSameMinute } from "./is-same-minute";

describe("isSameMinute", () => {
	it("returns true within the same minute", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:24:00");
		const b = Temporal.PlainDateTime.from("2024-02-21T14:24:59");
		expect(isSameMinute(a, b)).toBe(true);
	});

	it("returns false across the minute boundary", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:24:59");
		const b = Temporal.PlainDateTime.from("2024-02-21T14:25:00");
		expect(isSameMinute(a, b)).toBe(false);
	});
});
