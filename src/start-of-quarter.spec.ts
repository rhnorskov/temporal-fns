import { describe, expect, it } from "vitest";
import { startOfQuarter } from "./start-of-quarter";

describe("startOfQuarter", () => {
	it("returns Jan 1 for a date in Q1", () => {
		const date = Temporal.PlainDate.from("2024-02-15");
		expect(startOfQuarter(date).toString()).toBe("2024-01-01");
	});

	it("returns Apr 1 for a date in Q2", () => {
		const date = Temporal.PlainDate.from("2024-05-15");
		expect(startOfQuarter(date).toString()).toBe("2024-04-01");
	});

	it("returns Jul 1 for a date in Q3", () => {
		const date = Temporal.PlainDate.from("2024-08-15");
		expect(startOfQuarter(date).toString()).toBe("2024-07-01");
	});

	it("returns Oct 1 for a date in Q4", () => {
		const date = Temporal.PlainDate.from("2024-11-15");
		expect(startOfQuarter(date).toString()).toBe("2024-10-01");
	});

	it("resets time for Temporal.PlainDateTime by default", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-05-15T14:24:24");
		expect(startOfQuarter(dateTime).toString()).toBe("2024-04-01T00:00:00");
	});

	it("preserves time when preserveTime is true", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-05-15T14:24:24");
		expect(startOfQuarter(dateTime, { preserveTime: true }).toString()).toBe(
			"2024-04-01T14:24:24",
		);
	});
});
