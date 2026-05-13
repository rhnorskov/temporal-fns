import { describe, expect, it } from "vitest";
import { eachDayOfInterval } from "./each-day-of-interval";

describe("eachDayOfInterval", () => {
	it("returns each day from start to end inclusive (PlainDate)", () => {
		const result = eachDayOfInterval({
			start: Temporal.PlainDate.from("2024-02-19"),
			end: Temporal.PlainDate.from("2024-02-22"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-19",
			"2024-02-20",
			"2024-02-21",
			"2024-02-22",
		]);
	});

	it("returns a single-element array when start === end", () => {
		const result = eachDayOfInterval({
			start: Temporal.PlainDate.from("2024-02-19"),
			end: Temporal.PlainDate.from("2024-02-19"),
		});
		expect(result.map((d) => d.toString())).toEqual(["2024-02-19"]);
	});

	it("snaps the first element to start of day for PlainDateTime", () => {
		const result = eachDayOfInterval({
			start: Temporal.PlainDateTime.from("2024-02-19T08:30:00"),
			end: Temporal.PlainDateTime.from("2024-02-21T08:30:00"),
		});
		expect(result.map((d) => d.toString())).toEqual([
			"2024-02-19T00:00:00",
			"2024-02-20T00:00:00",
			"2024-02-21T00:00:00",
		]);
	});

	it("throws when start is after end", () => {
		expect(() =>
			eachDayOfInterval({
				start: Temporal.PlainDate.from("2024-02-22"),
				end: Temporal.PlainDate.from("2024-02-19"),
			}),
		).toThrow(RangeError);
	});
});
