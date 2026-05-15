import { describe, expect, it } from "vitest";
import { isFuture } from "./is-future.ts";
import { isPast } from "./is-past.ts";
import { isToday } from "./is-today.ts";
import { isTomorrow } from "./is-tomorrow.ts";
import { isYesterday } from "./is-yesterday.ts";

describe("isToday", () => {
	it("returns true for the current PlainDate", () => {
		expect(isToday(Temporal.Now.plainDateISO())).toBe(true);
	});

	it("returns false for yesterday", () => {
		expect(isToday(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(
			false,
		);
	});

	it("returns false for tomorrow", () => {
		expect(isToday(Temporal.Now.plainDateISO().add({ days: 1 }))).toBe(false);
	});
});

describe("isYesterday", () => {
	it("returns true for yesterday", () => {
		expect(isYesterday(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(
			true,
		);
	});

	it("returns false for today", () => {
		expect(isYesterday(Temporal.Now.plainDateISO())).toBe(false);
	});

	it("returns false for two days ago", () => {
		expect(isYesterday(Temporal.Now.plainDateISO().subtract({ days: 2 }))).toBe(
			false,
		);
	});
});

describe("isTomorrow", () => {
	it("returns true for tomorrow", () => {
		expect(isTomorrow(Temporal.Now.plainDateISO().add({ days: 1 }))).toBe(true);
	});

	it("returns false for today", () => {
		expect(isTomorrow(Temporal.Now.plainDateISO())).toBe(false);
	});

	it("returns false for two days from now", () => {
		expect(isTomorrow(Temporal.Now.plainDateISO().add({ days: 2 }))).toBe(
			false,
		);
	});
});

describe("isPast", () => {
	it("returns true for an Instant one hour ago", () => {
		expect(isPast(Temporal.Now.instant().subtract({ hours: 1 }))).toBe(true);
	});

	it("returns false for an Instant one hour in the future", () => {
		expect(isPast(Temporal.Now.instant().add({ hours: 1 }))).toBe(false);
	});

	it("returns true for a past PlainDate", () => {
		expect(isPast(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(
			true,
		);
	});

	it("returns false for a future PlainDate", () => {
		expect(isPast(Temporal.Now.plainDateISO().add({ days: 1 }))).toBe(false);
	});

	it("returns true for a past ZonedDateTime", () => {
		const zdt = Temporal.Now.zonedDateTimeISO().subtract({ hours: 1 });
		expect(isPast(zdt)).toBe(true);
	});
});

describe("isFuture", () => {
	it("returns true for an Instant one hour in the future", () => {
		expect(isFuture(Temporal.Now.instant().add({ hours: 1 }))).toBe(true);
	});

	it("returns false for an Instant one hour ago", () => {
		expect(isFuture(Temporal.Now.instant().subtract({ hours: 1 }))).toBe(false);
	});

	it("returns true for a future PlainDate", () => {
		expect(isFuture(Temporal.Now.plainDateISO().add({ days: 1 }))).toBe(true);
	});

	it("returns false for a past PlainDate", () => {
		expect(isFuture(Temporal.Now.plainDateISO().subtract({ days: 1 }))).toBe(
			false,
		);
	});
});
