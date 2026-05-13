import { describe, expect, it } from "vitest";
import { clamp } from "./clamp";

describe("clamp", () => {
	const start = Temporal.PlainDate.from("2024-02-10");
	const end = Temporal.PlainDate.from("2024-02-20");

	it("returns the value unchanged when within range", () => {
		const value = Temporal.PlainDate.from("2024-02-15");
		expect(clamp(value, { start, end }).toString()).toBe("2024-02-15");
	});

	it("clamps to start when below range", () => {
		const value = Temporal.PlainDate.from("2024-02-01");
		expect(clamp(value, { start, end }).toString()).toBe("2024-02-10");
	});

	it("clamps to end when above range", () => {
		const value = Temporal.PlainDate.from("2024-02-25");
		expect(clamp(value, { start, end }).toString()).toBe("2024-02-20");
	});

	it("returns the boundary itself when equal", () => {
		expect(clamp(start, { start, end }).toString()).toBe("2024-02-10");
		expect(clamp(end, { start, end }).toString()).toBe("2024-02-20");
	});
});
