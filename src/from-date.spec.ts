import { describe, expect, it } from "vitest";
import { fromDate } from "./from-date.ts";

describe("fromDate", () => {
	it("returns a Temporal.Instant from a Date", () => {
		const date = new Date("2024-02-24T14:24:24.242Z");
		const result = fromDate(date);

		expect(result.toString()).toBe("2024-02-24T14:24:24.242Z");
	});

	it("returns a Temporal.ZonedDateTime when a timeZone is provided", () => {
		const date = new Date("2024-02-24T14:24:24.242Z");
		const result = fromDate(date, "Europe/Copenhagen");

		expect(result).toBeInstanceOf(Temporal.ZonedDateTime);
		expect(result.toString()).toBe(
			"2024-02-24T15:24:24.242+01:00[Europe/Copenhagen]",
		);
	});
});
