import { describe, expect, it } from "vitest";
import { endOfQuarter } from "./end-of-quarter.ts";

describe("endOfQuarter", () => {
	it("returns Mar 31 for a date in Q1", () => {
		const date = Temporal.PlainDate.from("2024-02-15");
		expect(endOfQuarter(date).toString()).toBe("2024-03-31");
	});

	it("returns Jun 30 for a date in Q2", () => {
		const date = Temporal.PlainDate.from("2024-05-15");
		expect(endOfQuarter(date).toString()).toBe("2024-06-30");
	});

	it("returns Sep 30 for a date in Q3", () => {
		const date = Temporal.PlainDate.from("2024-08-15");
		expect(endOfQuarter(date).toString()).toBe("2024-09-30");
	});

	it("returns Dec 31 for a date in Q4", () => {
		const date = Temporal.PlainDate.from("2024-11-15");
		expect(endOfQuarter(date).toString()).toBe("2024-12-31");
	});

	it("sets time to end-of-day by default", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-05-15T14:24:24");
		expect(endOfQuarter(dateTime).toString()).toBe(
			"2024-06-30T23:59:59.999999999",
		);
	});

	it("preserves time when preserveTime is true", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-05-15T14:24:24");
		expect(endOfQuarter(dateTime, { preserveTime: true }).toString()).toBe(
			"2024-06-30T14:24:24",
		);
	});
});
