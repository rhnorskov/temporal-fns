import { describe, expect, it } from "vitest";
import { intervalToDuration } from "./interval-to-duration";

describe("intervalToDuration", () => {
	it("returns a Duration for an Instant interval", () => {
		const duration = intervalToDuration({
			start: Temporal.Instant.from("2024-02-21T10:00:00Z"),
			end: Temporal.Instant.from("2024-02-21T13:30:00Z"),
		});
		expect(duration.hours).toBe(3);
		expect(duration.minutes).toBe(30);
	});

	it("returns a Duration for a PlainDate interval", () => {
		const duration = intervalToDuration({
			start: Temporal.PlainDate.from("2024-01-15"),
			end: Temporal.PlainDate.from("2025-03-20"),
		});
		expect(duration.years).toBe(1);
		expect(duration.months).toBe(2);
		expect(duration.days).toBe(5);
	});

	it("returns a Duration for a PlainDateTime interval", () => {
		const duration = intervalToDuration({
			start: Temporal.PlainDateTime.from("2024-01-01T00:00:00"),
			end: Temporal.PlainDateTime.from("2025-02-15T13:30:45"),
		});
		expect(duration.years).toBe(1);
		expect(duration.months).toBe(1);
		expect(duration.days).toBe(14);
		expect(duration.hours).toBe(13);
		expect(duration.minutes).toBe(30);
		expect(duration.seconds).toBe(45);
	});

	it("respects largestUnit option", () => {
		const duration = intervalToDuration(
			{
				start: Temporal.PlainDate.from("2024-01-01"),
				end: Temporal.PlainDate.from("2024-03-15"),
			},
			{ largestUnit: "day" },
		);
		expect(duration.years).toBe(0);
		expect(duration.months).toBe(0);
		expect(duration.days).toBe(74);
	});
});
