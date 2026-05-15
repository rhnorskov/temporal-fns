import { describe, expect, it } from "vitest";
import { addBusinessDays } from "./add-business-days.ts";
import { differenceInBusinessDays } from "./difference-in-business-days.ts";
import { isBusinessDay } from "./is-business-day.ts";
import { subBusinessDays } from "./sub-business-days.ts";

// Reference dates:
// 2024-02-19 is a Monday
// 2024-02-23 is a Friday
// 2024-02-24 is a Saturday
// 2024-02-26 is a Monday

describe("isBusinessDay", () => {
	it("returns true Monday through Friday", () => {
		expect(isBusinessDay(Temporal.PlainDate.from("2024-02-19"))).toBe(true);
		expect(isBusinessDay(Temporal.PlainDate.from("2024-02-23"))).toBe(true);
	});

	it("returns false on Saturday and Sunday", () => {
		expect(isBusinessDay(Temporal.PlainDate.from("2024-02-24"))).toBe(false);
		expect(isBusinessDay(Temporal.PlainDate.from("2024-02-25"))).toBe(false);
	});

	it("respects weekendDays option (Fri/Sat weekend)", () => {
		const fri = Temporal.PlainDate.from("2024-02-23");
		const sat = Temporal.PlainDate.from("2024-02-24");
		const sun = Temporal.PlainDate.from("2024-02-25");
		expect(isBusinessDay(fri, { weekendDays: [5, 6] })).toBe(false);
		expect(isBusinessDay(sat, { weekendDays: [5, 6] })).toBe(false);
		expect(isBusinessDay(sun, { weekendDays: [5, 6] })).toBe(true);
	});
});

describe("addBusinessDays", () => {
	it("returns the same temporal when amount is 0", () => {
		const date = Temporal.PlainDate.from("2024-02-21");
		expect(addBusinessDays(date, 0).toString()).toBe("2024-02-21");
	});

	it("skips weekends when adding from a Thursday", () => {
		// Thu + 3 business days = next Tue
		expect(
			addBusinessDays(Temporal.PlainDate.from("2024-02-22"), 3).toString(),
		).toBe("2024-02-27");
	});

	it("skips weekends when amount lands on a weekend", () => {
		// Fri + 1 business day = next Mon
		expect(
			addBusinessDays(Temporal.PlainDate.from("2024-02-23"), 1).toString(),
		).toBe("2024-02-26");
	});

	it("handles negative amounts", () => {
		// Mon - 1 business day = previous Fri
		expect(
			addBusinessDays(Temporal.PlainDate.from("2024-02-26"), -1).toString(),
		).toBe("2024-02-23");
	});

	it("respects weekendDays option (Fri/Sat weekend)", () => {
		// Thu + 1 business day with Fri/Sat off = Sun
		expect(
			addBusinessDays(Temporal.PlainDate.from("2024-02-22"), 1, {
				weekendDays: [5, 6],
			}).toString(),
		).toBe("2024-02-25");
	});
});

describe("subBusinessDays", () => {
	it("subtracts business days", () => {
		expect(
			subBusinessDays(Temporal.PlainDate.from("2024-02-26"), 1).toString(),
		).toBe("2024-02-23");
	});
});

describe("differenceInBusinessDays", () => {
	it("returns 0 for the same date", () => {
		const date = Temporal.PlainDate.from("2024-02-21");
		expect(differenceInBusinessDays(date, date)).toBe(0);
	});

	it("excludes weekends when counting forward across a weekend", () => {
		// Fri to next Mon = 1 business day
		expect(
			differenceInBusinessDays(
				Temporal.PlainDate.from("2024-02-26"),
				Temporal.PlainDate.from("2024-02-23"),
			),
		).toBe(1);
	});

	it("counts 5 business days across one calendar week", () => {
		// Mon to next Mon
		expect(
			differenceInBusinessDays(
				Temporal.PlainDate.from("2024-02-26"),
				Temporal.PlainDate.from("2024-02-19"),
			),
		).toBe(5);
	});

	it("returns negative when later is before earlier", () => {
		expect(
			differenceInBusinessDays(
				Temporal.PlainDate.from("2024-02-19"),
				Temporal.PlainDate.from("2024-02-26"),
			),
		).toBe(-5);
	});

	it("respects weekendDays option", () => {
		// Mon to next Mon with Fri/Sat as weekend: Tue, Wed, Thu, Sun, Mon = 5
		expect(
			differenceInBusinessDays(
				Temporal.PlainDate.from("2024-02-26"),
				Temporal.PlainDate.from("2024-02-19"),
				{ weekendDays: [5, 6] },
			),
		).toBe(5);
	});
});
