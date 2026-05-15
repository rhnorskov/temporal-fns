import { describe, expect, it } from "vitest";
import { eachHourOfInterval } from "./each-hour-of-interval.ts";

describe("eachHourOfInterval", () => {
	it("returns the start of each hour in the interval", () => {
		const result = eachHourOfInterval({
			start: Temporal.PlainDateTime.from("2024-02-21T14:30:00"),
			end: Temporal.PlainDateTime.from("2024-02-21T17:15:00"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-21T14:00:00",
			"2024-02-21T15:00:00",
			"2024-02-21T16:00:00",
			"2024-02-21T17:00:00",
		]);
	});
});
