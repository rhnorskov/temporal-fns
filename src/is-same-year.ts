import type { TemporalWithYearMonth } from "./temporal-types";

/**
 * Returns `true` when `a` and `b` are in the same calendar year.
 */
export function isSameYear(
	a: TemporalWithYearMonth,
	b: TemporalWithYearMonth,
): boolean {
	return a.year === b.year;
}
