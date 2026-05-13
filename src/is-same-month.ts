import type { TemporalWithYearMonth } from "./temporal-types";

/**
 * Returns `true` when `a` and `b` are in the same calendar month of the same
 * year.
 */
export function isSameMonth(
	a: TemporalWithYearMonth,
	b: TemporalWithYearMonth,
): boolean {
	return a.year === b.year && a.month === b.month;
}
