import { type ComparableTemporal, compare } from "./compare.ts";
import type { Interval } from "./interval.ts";

export interface AreIntervalsOverlappingOptions {
	/**
	 * When `true`, intervals that merely touch at an endpoint (one's `end`
	 * equals the other's `start`) are treated as overlapping. Defaults to
	 * `false`, matching date-fns.
	 */
	inclusive?: boolean;
}

/**
 * Returns `true` when intervals `a` and `b` overlap. By default the endpoints
 * are exclusive — adjacent intervals do not count as overlapping. Pass
 * `{ inclusive: true }` to treat touching intervals as overlapping.
 */
export function areIntervalsOverlapping<T extends ComparableTemporal>(
	a: Interval<T>,
	b: Interval<T>,
	options?: AreIntervalsOverlappingOptions,
): boolean {
	const { inclusive = false } = options ?? {};

	if (inclusive) {
		return compare(a.start, b.end) <= 0 && compare(b.start, a.end) <= 0;
	}
	return compare(a.start, b.end) < 0 && compare(b.start, a.end) < 0;
}
