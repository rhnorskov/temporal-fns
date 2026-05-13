import { describe, expect, it } from "vitest";
import { min } from "./min";

describe("min", () => {
	it("returns the earliest of a list of PlainDates", () => {
		const a = Temporal.PlainDate.from("2024-02-21");
		const b = Temporal.PlainDate.from("2024-02-19");
		const c = Temporal.PlainDate.from("2024-02-25");
		expect(min([a, b, c]).toString()).toBe("2024-02-19");
	});

	it("returns the earliest Instant", () => {
		const a = Temporal.Instant.from("2024-02-21T10:00:00Z");
		const b = Temporal.Instant.from("2024-02-21T09:00:00Z");
		expect(min([a, b]).toString()).toBe("2024-02-21T09:00:00Z");
	});

	it("throws on empty input", () => {
		expect(() => min<Temporal.PlainDate>([])).toThrow(RangeError);
	});
});
