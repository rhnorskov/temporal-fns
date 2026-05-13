import { describe, expect, it } from "vitest";
import { eachWeekOfInterval } from "./each-week-of-interval";

describe("eachWeekOfInterval", () => {
	it("returns the Monday of each week in the interval", () => {
		const result = eachWeekOfInterval({
			start: Temporal.PlainDate.from("2024-02-15"), // Thu
			end: Temporal.PlainDate.from("2024-03-05"), // Tue
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-12",
			"2024-02-19",
			"2024-02-26",
			"2024-03-04",
		]);
	});

	it("respects weekStartsOn (Sunday start)", () => {
		const result = eachWeekOfInterval(
			{
				start: Temporal.PlainDate.from("2024-02-15"), // Thu
				end: Temporal.PlainDate.from("2024-03-05"), // Tue
			},
			{ weekStartsOn: 7 },
		);
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-11",
			"2024-02-18",
			"2024-02-25",
			"2024-03-03",
		]);
	});
});
