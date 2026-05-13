import { describe, expect, it } from "vitest";
import { endOfYear } from "./end-of-year";

describe("endOfYear", () => {
	it("returns December 31 for Temporal.PlainDate", () => {
		const date = Temporal.PlainDate.from("2024-07-15");
		expect(endOfYear(date).toString()).toBe("2024-12-31");
	});

	it("returns December 31 with end-of-day for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-07-15T14:24:24");
		expect(endOfYear(dateTime).toString()).toBe(
			"2024-12-31T23:59:59.999999999",
		);
	});

	it("preserves time when preserveTime is true", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-07-15T14:24:24");
		expect(endOfYear(dateTime, { preserveTime: true }).toString()).toBe(
			"2024-12-31T14:24:24",
		);
	});

	it("works for Temporal.ZonedDateTime", () => {
		const zonedDateTime = Temporal.ZonedDateTime.from(
			"2024-07-15T14:24:24+02:00[Europe/Copenhagen]",
		);
		expect(endOfYear(zonedDateTime).toString()).toBe(
			"2024-12-31T23:59:59.999999999+01:00[Europe/Copenhagen]",
		);
	});
});
