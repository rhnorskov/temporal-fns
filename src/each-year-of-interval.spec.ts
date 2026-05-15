import { describe, expect, it } from "vitest";
import { eachYearOfInterval } from "./each-year-of-interval.ts";

describe("eachYearOfInterval", () => {
	it("returns Jan 1 of each year in the interval", () => {
		const result = eachYearOfInterval({
			start: Temporal.PlainDate.from("2022-06-15"),
			end: Temporal.PlainDate.from("2025-02-10"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2022-01-01",
			"2023-01-01",
			"2024-01-01",
			"2025-01-01",
		]);
	});
});
