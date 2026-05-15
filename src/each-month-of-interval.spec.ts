import { describe, expect, it } from "vitest";
import { eachMonthOfInterval } from "./each-month-of-interval.ts";

describe("eachMonthOfInterval", () => {
	it("returns the start of each month in the interval (PlainDate)", () => {
		const result = eachMonthOfInterval({
			start: Temporal.PlainDate.from("2024-02-15"),
			end: Temporal.PlainDate.from("2024-05-10"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-01",
			"2024-03-01",
			"2024-04-01",
			"2024-05-01",
		]);
	});

	it("returns a single month when interval fits within one month", () => {
		const result = eachMonthOfInterval({
			start: Temporal.PlainDate.from("2024-02-05"),
			end: Temporal.PlainDate.from("2024-02-20"),
		});
		expect(result.map((d) => d.toString())).toEqual(["2024-02-01"]);
	});
});
