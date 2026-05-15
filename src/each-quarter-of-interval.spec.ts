import { describe, expect, it } from "vitest";
import { eachQuarterOfInterval } from "./each-quarter-of-interval.ts";

describe("eachQuarterOfInterval", () => {
	it("returns the first day of each quarter in the interval", () => {
		const result = eachQuarterOfInterval({
			start: Temporal.PlainDate.from("2024-02-15"),
			end: Temporal.PlainDate.from("2024-11-30"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-01-01",
			"2024-04-01",
			"2024-07-01",
			"2024-10-01",
		]);
	});
});
