import { describe, expect, it } from "vitest";
import { isLastDayOfMonth } from "./is-last-day-of-month.ts";

describe("isLastDayOfMonth", () => {
	it("returns true for the last day of a 29-day February", () => {
		expect(isLastDayOfMonth(Temporal.PlainDate.from("2024-02-29"))).toBe(true);
	});

	it("returns true for the last day of a 28-day February", () => {
		expect(isLastDayOfMonth(Temporal.PlainDate.from("2023-02-28"))).toBe(true);
	});

	it("returns true for the last day of a 31-day month", () => {
		expect(isLastDayOfMonth(Temporal.PlainDate.from("2024-01-31"))).toBe(true);
	});

	it("returns false for the second-to-last day", () => {
		expect(isLastDayOfMonth(Temporal.PlainDate.from("2024-01-30"))).toBe(false);
	});
});
