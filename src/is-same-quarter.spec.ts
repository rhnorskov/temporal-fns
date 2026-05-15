import { describe, expect, it } from "vitest";
import { isSameQuarter } from "./is-same-quarter.ts";

describe("isSameQuarter", () => {
	it("returns true for dates in the same quarter", () => {
		const a = Temporal.PlainDate.from("2024-01-15");
		const b = Temporal.PlainDate.from("2024-03-31");
		expect(isSameQuarter(a, b)).toBe(true);
	});

	it("returns false across quarter boundaries", () => {
		const a = Temporal.PlainDate.from("2024-03-31"); // Q1
		const b = Temporal.PlainDate.from("2024-04-01"); // Q2
		expect(isSameQuarter(a, b)).toBe(false);
	});

	it("returns false for the same quarter in different years", () => {
		const a = Temporal.PlainDate.from("2023-01-01");
		const b = Temporal.PlainDate.from("2024-01-01");
		expect(isSameQuarter(a, b)).toBe(false);
	});
});
