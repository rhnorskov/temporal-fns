import { describe, expect, it } from "vitest";
import { areIntervalsOverlapping } from "./are-intervals-overlapping.ts";

const a = {
	start: Temporal.PlainDate.from("2024-02-10"),
	end: Temporal.PlainDate.from("2024-02-20"),
};

describe("areIntervalsOverlapping", () => {
	it("returns true when intervals overlap", () => {
		const b = {
			start: Temporal.PlainDate.from("2024-02-15"),
			end: Temporal.PlainDate.from("2024-02-25"),
		};
		expect(areIntervalsOverlapping(a, b)).toBe(true);
	});

	it("returns false when intervals do not touch", () => {
		const b = {
			start: Temporal.PlainDate.from("2024-02-25"),
			end: Temporal.PlainDate.from("2024-02-28"),
		};
		expect(areIntervalsOverlapping(a, b)).toBe(false);
	});

	it("returns false for back-to-back intervals when exclusive (default)", () => {
		const b = {
			start: Temporal.PlainDate.from("2024-02-20"),
			end: Temporal.PlainDate.from("2024-02-25"),
		};
		expect(areIntervalsOverlapping(a, b)).toBe(false);
	});

	it("returns true for back-to-back intervals when inclusive", () => {
		const b = {
			start: Temporal.PlainDate.from("2024-02-20"),
			end: Temporal.PlainDate.from("2024-02-25"),
		};
		expect(areIntervalsOverlapping(a, b, { inclusive: true })).toBe(true);
	});
});
