import { describe, expect, it } from "vitest";
import { endOfWeek } from "./end-of-week";

describe("endOfWeek", () => {
	it("returns the end of the week (Sunday) for a Temporal.PlainDate", () => {
		const date = Temporal.PlainDate.from("2024-02-21");
		const result = endOfWeek(date);

		expect(result.toString()).toBe("2024-02-25");
	});

	it("snaps to end of day (Sunday) for a Temporal.PlainDateTime by default", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-21T14:24:24.242424242",
		);
		const result = endOfWeek(dateTime);

		expect(result.toString()).toBe("2024-02-25T23:59:59.999999999");
	});

	it("preserves time when preserveTime is true for Temporal.PlainDateTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-21T14:24:24.242424242",
		);
		const result = endOfWeek(dateTime, { preserveTime: true });

		expect(result.toString()).toBe("2024-02-25T14:24:24.242424242");
	});

	it("snaps to end of day (Sunday) for a Temporal.ZonedDateTime by default", () => {
		const zonedDateTime = Temporal.ZonedDateTime.from(
			"2024-02-21T14:24:24.242424242+01:00[Europe/Copenhagen]",
		);
		const result = endOfWeek(zonedDateTime);

		expect(result.toString()).toBe(
			"2024-02-25T23:59:59.999999999+01:00[Europe/Copenhagen]",
		);
	});

	it("returns the same day if it's already Sunday for Temporal.PlainDate", () => {
		const date = Temporal.PlainDate.from("2024-02-25");
		const result = endOfWeek(date);

		expect(result.toString()).toBe("2024-02-25");
	});

	it("respects weekStartsOn option (Sunday start → end is Saturday)", () => {
		const date = Temporal.PlainDate.from("2024-02-21"); // Wed
		const result = endOfWeek(date, { weekStartsOn: 7 });

		expect(result.toString()).toBe("2024-02-24"); // Sat
	});

	it("respects weekStartsOn with preserveTime", () => {
		const dateTime = Temporal.PlainDateTime.from(
			"2024-02-21T14:24:24.242424242",
		);
		const result = endOfWeek(dateTime, {
			weekStartsOn: 7,
			preserveTime: true,
		});

		expect(result.toString()).toBe("2024-02-24T14:24:24.242424242");
	});
});
