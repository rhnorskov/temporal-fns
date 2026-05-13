import { describe, expect, it } from "vitest";
import { isSameYear } from "./is-same-year";

describe("isSameYear", () => {
	it("returns true for dates in the same year", () => {
		const a = Temporal.PlainDate.from("2024-01-01");
		const b = Temporal.PlainDate.from("2024-12-31");
		expect(isSameYear(a, b)).toBe(true);
	});

	it("returns false for dates in different years", () => {
		const a = Temporal.PlainDate.from("2023-12-31");
		const b = Temporal.PlainDate.from("2024-01-01");
		expect(isSameYear(a, b)).toBe(false);
	});
});
