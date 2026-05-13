import { describe, expect, it } from "vitest";
import { isSameSecond } from "./is-same-second";

describe("isSameSecond", () => {
	it("returns true within the same second", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:24:24.001");
		const b = Temporal.PlainDateTime.from("2024-02-21T14:24:24.999");
		expect(isSameSecond(a, b)).toBe(true);
	});

	it("returns false across the second boundary", () => {
		const a = Temporal.PlainDateTime.from("2024-02-21T14:24:24.999");
		const b = Temporal.PlainDateTime.from("2024-02-21T14:24:25.000");
		expect(isSameSecond(a, b)).toBe(false);
	});
});
