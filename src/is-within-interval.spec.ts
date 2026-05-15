import { describe, expect, it } from "vitest";
import { isWithinInterval } from "./is-within-interval.ts";

const interval = {
	start: Temporal.PlainDate.from("2024-02-10"),
	end: Temporal.PlainDate.from("2024-02-20"),
};

describe("isWithinInterval", () => {
	it("returns true for a value within the interval", () => {
		expect(
			isWithinInterval(Temporal.PlainDate.from("2024-02-15"), interval),
		).toBe(true);
	});

	it("returns true at the boundaries", () => {
		expect(isWithinInterval(interval.start, interval)).toBe(true);
		expect(isWithinInterval(interval.end, interval)).toBe(true);
	});

	it("returns false outside the interval", () => {
		expect(
			isWithinInterval(Temporal.PlainDate.from("2024-02-09"), interval),
		).toBe(false);
		expect(
			isWithinInterval(Temporal.PlainDate.from("2024-02-21"), interval),
		).toBe(false);
	});
});
