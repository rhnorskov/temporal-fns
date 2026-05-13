import { describe, expect, it } from "vitest";
import { closestIndexTo } from "./closest-index-to";
import { closestTo } from "./closest-to";

describe("closestTo", () => {
	it("picks the candidate nearest to the target (PlainDate)", () => {
		const target = Temporal.PlainDate.from("2024-02-15");
		const candidates = [
			Temporal.PlainDate.from("2024-02-10"),
			Temporal.PlainDate.from("2024-02-13"),
			Temporal.PlainDate.from("2024-02-20"),
		];
		expect(closestTo(target, candidates)?.toString()).toBe("2024-02-13");
	});

	it("picks the candidate nearest to the target (Instant)", () => {
		const target = Temporal.Instant.from("2024-02-21T12:00:00Z");
		const candidates = [
			Temporal.Instant.from("2024-02-21T10:00:00Z"),
			Temporal.Instant.from("2024-02-21T13:00:00Z"),
			Temporal.Instant.from("2024-02-21T15:00:00Z"),
		];
		expect(closestTo(target, candidates)?.toString()).toBe(
			"2024-02-21T13:00:00Z",
		);
	});

	it("returns null for empty candidates", () => {
		expect(closestTo(Temporal.PlainDate.from("2024-01-01"), [])).toBeNull();
	});
});

describe("closestIndexTo", () => {
	it("returns the index of the nearest candidate", () => {
		const target = Temporal.PlainDate.from("2024-02-15");
		const candidates = [
			Temporal.PlainDate.from("2024-02-10"),
			Temporal.PlainDate.from("2024-02-13"),
			Temporal.PlainDate.from("2024-02-20"),
		];
		expect(closestIndexTo(target, candidates)).toBe(1);
	});

	it("returns -1 for empty candidates", () => {
		expect(closestIndexTo(Temporal.PlainDate.from("2024-01-01"), [])).toBe(-1);
	});
});
