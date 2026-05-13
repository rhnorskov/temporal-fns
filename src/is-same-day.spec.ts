import { describe, expect, it } from "vitest";
import { isSameDay } from "./is-same-day";

describe("isSameDay", () => {
	it("returns true for two PlainDates on the same day", () => {
		const a = Temporal.PlainDate.from("2024-02-21");
		const b = Temporal.PlainDate.from("2024-02-21");
		expect(isSameDay(a, b)).toBe(true);
	});

	it("returns false for two PlainDates on different days", () => {
		const a = Temporal.PlainDate.from("2024-02-21");
		const b = Temporal.PlainDate.from("2024-02-22");
		expect(isSameDay(a, b)).toBe(false);
	});

	it("ignores time for PlainDateTime", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T08:00:00");
		const b = Temporal.PlainDateTime.from("2024-02-21T23:59:59");
		expect(isSameDay(a, b)).toBe(true);
	});

	it("returns false across year boundaries", () => {
		const a = Temporal.PlainDate.from("2023-12-31");
		const b = Temporal.PlainDate.from("2024-01-01");
		expect(isSameDay(a, b)).toBe(false);
	});
});
