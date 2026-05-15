import { getQuarter } from "./get-quarter.ts";
import type { TemporalWithYearMonth } from "./temporal-types.ts";

/**
 * Returns `true` when `a` and `b` fall in the same quarter of the same year.
 */
export function isSameQuarter(
	a: TemporalWithYearMonth,
	b: TemporalWithYearMonth,
): boolean {
	return a.year === b.year && getQuarter(a) === getQuarter(b);
}
