import { describe, expect, it } from "vitest";
import { startOfYear } from "./start-of-year";

describe("startOfYear", () => {
	it("returns January 1 for Temporal.PlainDate", () => {
		const date = Temporal.PlainDate.from("2024-07-15");
		expect(startOfYear(date).toString()).toBe("2024-01-01");
	});

	it("returns January 1 with start-of-day for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-07-15T14:24:24");
		expect(startOfYear(dateTime).toString()).toBe("2024-01-01T00:00:00");
	});

	it("preserves time when preserveTime is true", () => {
		const dateTime = Temporal.PlainDateTime.from("2024-07-15T14:24:24");
		expect(startOfYear(dateTime, { preserveTime: true }).toString()).toBe(
			"2024-01-01T14:24:24",
		);
	});

	it("works for Temporal.ZonedDateTime", () => {
		const zonedDateTime = Temporal.ZonedDateTime.from(
			"2024-07-15T14:24:24+02:00[Europe/Copenhagen]",
		);
		expect(startOfYear(zonedDateTime).toString()).toBe(
			"2024-01-01T00:00:00+01:00[Europe/Copenhagen]",
		);
	});
});
