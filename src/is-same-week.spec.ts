import { describe, expect, it } from "vitest";
import { isSameWeek } from "./is-same-week";

describe("isSameWeek", () => {
	it("returns true for dates in the same ISO week", () => {
		const a = Temporal.PlainDate.from("2024-02-19"); // Mon
		const b = Temporal.PlainDate.from("2024-02-25"); // Sun
		expect(isSameWeek(a, b)).toBe(true);
	});

	it("returns false across week boundaries", () => {
		const a = Temporal.PlainDate.from("2024-02-25"); // Sun, end of week
		const b = Temporal.PlainDate.from("2024-02-26"); // Mon, start of next week
		expect(isSameWeek(a, b)).toBe(false);
	});

	it("treats a Sunday and the next Monday as different weeks (default Monday start)", () => {
		const a = Temporal.PlainDate.from("2023-01-01"); // Sun, end of prior week
		const b = Temporal.PlainDate.from("2023-01-02"); // Mon, start of new week
		expect(isSameWeek(a, b)).toBe(false);
	});

	it("respects weekStartsOn option", () => {
		const a = Temporal.PlainDate.from("2024-02-18"); // Sun
		const b = Temporal.PlainDate.from("2024-02-19"); // Mon

		expect(isSameWeek(a, b)).toBe(false);
		expect(isSameWeek(a, b, { weekStartsOn: 7 })).toBe(true);
	});
});
