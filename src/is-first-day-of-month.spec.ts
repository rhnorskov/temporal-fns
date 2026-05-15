import { describe, expect, it } from "vitest";
import { isFirstDayOfMonth } from "./is-first-day-of-month.ts";

describe("isFirstDayOfMonth", () => {
	it("returns true for day 1", () => {
		expect(isFirstDayOfMonth(Temporal.PlainDate.from("2024-02-01"))).toBe(true);
	});

	it("returns false for any other day", () => {
		expect(isFirstDayOfMonth(Temporal.PlainDate.from("2024-02-02"))).toBe(
			false,
		);
		expect(isFirstDayOfMonth(Temporal.PlainDate.from("2024-02-29"))).toBe(
			false,
		);
	});
});
