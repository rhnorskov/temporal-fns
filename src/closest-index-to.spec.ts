import { describe, expect, it } from "vitest";
import { closestIndexTo } from "./closest-index-to";

describe("closestIndexTo", () => {
	it("returns -1 for an empty candidates array", () => {
		const target = Temporal.PlainDate.from("2024-02-21");
		expect(closestIndexTo(target, [])).toBe(-1);
	});

	it("returns the index of the closest PlainDate", () => {
		const target = Temporal.PlainDate.from("2024-02-21");
		const candidates = [
			Temporal.PlainDate.from("2024-02-10"),
			Temporal.PlainDate.from("2024-02-25"),
			Temporal.PlainDate.from("2024-03-15"),
		];
		expect(closestIndexTo(target, candidates)).toBe(1);
	});

	it("returns 0 when the target is exactly the first candidate", () => {
		const target = Temporal.PlainDate.from("2024-02-21");
		const candidates = [
			Temporal.PlainDate.from("2024-02-21"),
			Temporal.PlainDate.from("2024-02-22"),
		];
		expect(closestIndexTo(target, candidates)).toBe(0);
	});

	it("ties go to the earliest index", () => {
		const target = Temporal.PlainDate.from("2024-02-21");
		const candidates = [
			Temporal.PlainDate.from("2024-02-20"),
			Temporal.PlainDate.from("2024-02-22"),
		];
		expect(closestIndexTo(target, candidates)).toBe(0);
	});

	it("works with Temporal.Instant (nanosecond precision)", () => {
		const target = Temporal.Instant.from("2024-02-21T12:00:00Z");
		const candidates = [
			Temporal.Instant.from("2024-02-21T11:59:59.999Z"),
			Temporal.Instant.from("2024-02-21T12:00:01Z"),
		];
		expect(closestIndexTo(target, candidates)).toBe(0);
	});

	it("works with Temporal.PlainYearMonth", () => {
		const target = Temporal.PlainYearMonth.from("2024-06");
		const candidates = [
			Temporal.PlainYearMonth.from("2024-01"),
			Temporal.PlainYearMonth.from("2024-08"),
			Temporal.PlainYearMonth.from("2025-03"),
		];
		expect(closestIndexTo(target, candidates)).toBe(1);
	});

	it("works with Temporal.PlainTime", () => {
		const target = Temporal.PlainTime.from("12:00:00");
		const candidates = [
			Temporal.PlainTime.from("11:30:00"),
			Temporal.PlainTime.from("13:00:00"),
			Temporal.PlainTime.from("12:15:00"),
		];
		expect(closestIndexTo(target, candidates)).toBe(2);
	});
});
