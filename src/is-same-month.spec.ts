import { describe, expect, it } from "vitest";
import { isSameMonth } from "./is-same-month";

describe("isSameMonth", () => {
	it("returns true for dates in the same month", () => {
		const a = Temporal.PlainDate.from("2024-02-01");
		const b = Temporal.PlainDate.from("2024-02-29");
		expect(isSameMonth(a, b)).toBe(true);
	});

	it("returns false for dates in different months", () => {
		const a = Temporal.PlainDate.from("2024-02-29");
		const b = Temporal.PlainDate.from("2024-03-01");
		expect(isSameMonth(a, b)).toBe(false);
	});

	it("returns false for the same month in different years", () => {
		const a = Temporal.PlainDate.from("2023-02-01");
		const b = Temporal.PlainDate.from("2024-02-01");
		expect(isSameMonth(a, b)).toBe(false);
	});

	it("works for PlainYearMonth", () => {
		const a = Temporal.PlainYearMonth.from("2024-05");
		const b = Temporal.PlainYearMonth.from("2024-05");
		expect(isSameMonth(a, b)).toBe(true);
	});
});
