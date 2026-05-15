import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns `true` when `a` and `b` share the same calendar date (year, month,
 * day). Time is ignored.
 */
export function isSameDay(a: TemporalWithDate, b: TemporalWithDate): boolean {
	return a.year === b.year && a.month === b.month && a.day === b.day;
}
