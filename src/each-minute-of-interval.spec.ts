import { describe, expect, it } from "vitest";
import { eachMinuteOfInterval } from "./each-minute-of-interval.ts";

describe("eachMinuteOfInterval", () => {
	it("returns the start of each minute in the interval", () => {
		const result = eachMinuteOfInterval({
			start: Temporal.PlainDateTime.from("2024-02-21T14:00:30"),
			end: Temporal.PlainDateTime.from("2024-02-21T14:03:15"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-21T14:00:00",
			"2024-02-21T14:01:00",
			"2024-02-21T14:02:00",
			"2024-02-21T14:03:00",
		]);
	});
});
