import { describe, expect, it } from "vitest";
import { getQuarter } from "./get-quarter";

describe("getQuarter", () => {
	it("returns 1 for January through March", () => {
		expect(getQuarter(Temporal.PlainDate.from("2024-01-15"))).toBe(1);
		expect(getQuarter(Temporal.PlainDate.from("2024-03-31"))).toBe(1);
	});

	it("returns 2 for April through June", () => {
		expect(getQuarter(Temporal.PlainDate.from("2024-04-01"))).toBe(2);
		expect(getQuarter(Temporal.PlainDate.from("2024-06-30"))).toBe(2);
	});

	it("returns 3 for July through September", () => {
		expect(getQuarter(Temporal.PlainDate.from("2024-07-01"))).toBe(3);
		expect(getQuarter(Temporal.PlainDate.from("2024-09-30"))).toBe(3);
	});

	it("returns 4 for October through December", () => {
		expect(getQuarter(Temporal.PlainDate.from("2024-10-01"))).toBe(4);
		expect(getQuarter(Temporal.PlainDate.from("2024-12-31"))).toBe(4);
	});
});
