import { describe, expect, it } from "vitest";
import { isSameHour } from "./is-same-hour.ts";

describe("isSameHour", () => {
	it("returns true when both are within the same hour", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:00:00");
		const b = Temporal.PlainDateTime.from("2024-02-21T14:59:59");
		expect(isSameHour(a, b)).toBe(true);
	});

	it("returns false when minute pushes into a different hour", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:59:59");
		const b = Temporal.PlainDateTime.from("2024-02-21T15:00:00");
		expect(isSameHour(a, b)).toBe(false);
	});

	it("returns false across days even with same hour", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:00:00");
		const b = Temporal.PlainDateTime.from("2024-02-22T14:00:00");
		expect(isSameHour(a, b)).toBe(false);
	});
});
