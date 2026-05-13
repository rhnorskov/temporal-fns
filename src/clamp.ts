import { type ComparableTemporal, compare } from "./compare";
import type { Interval } from "./interval";

/**
 * Constrains `value` to the inclusive `[range.start, range.end]` interval.
 * Returns `range.start` if below, `range.end` if above, otherwise `value`.
 */
export function clamp<T extends ComparableTemporal>(
	value: T,
	range: Interval<T>,
): T {
	if (compare(value, range.start) < 0) {
		return range.start;
	}
	if (compare(value, range.end) > 0) {
		return range.end;
	}
	return value;
}
