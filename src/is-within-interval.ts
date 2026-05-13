import { type ComparableTemporal, compare } from "./compare";
import type { Interval } from "./interval";

/**
 * Returns `true` when `value` is within the interval, inclusive on both
 * ends. To check a half-open interval, exclude the endpoint manually.
 */
export function isWithinInterval<T extends ComparableTemporal>(
	value: T,
	interval: Interval<T>,
): boolean {
	return (
		compare(value, interval.start) >= 0 && compare(value, interval.end) <= 0
	);
}
