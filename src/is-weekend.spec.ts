import { describe, expect, it } from "vitest";
import { isWeekend } from "./is-weekend";

describe("isWeekend", () => {
	it("returns true for Saturday and Sunday", () => {
		// 2024-02-24 is a Saturday, 2024-02-25 is a Sunday.
		expect(isWeekend(Temporal.PlainDate.from("2024-02-24"))).toBe(true);
		expect(isWeekend(Temporal.PlainDate.from("2024-02-25"))).toBe(true);
	});

	it("returns false Monday through Friday", () => {
		// 2024-02-19 is a Monday, 2024-02-23 is a Friday.
		expect(isWeekend(Temporal.PlainDate.from("2024-02-19"))).toBe(false);
		expect(isWeekend(Temporal.PlainDate.from("2024-02-23"))).toBe(false);
	});
});
