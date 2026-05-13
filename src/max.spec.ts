import { describe, expect, it } from "vitest";
import { max } from "./max";

describe("max", () => {
	it("returns the latest of a list of PlainDates", () => {
		const a = Temporal.PlainDate.from("2024-02-21");
		const b = Temporal.PlainDate.from("2024-02-19");
		const c = Temporal.PlainDate.from("2024-02-25");
		expect(max([a, b, c]).toString()).toBe("2024-02-25");
	});

	it("throws on empty input", () => {
		expect(() => max<Temporal.PlainDate>([])).toThrow(RangeError);
	});
});
