import { compare } from "./compare.ts";
import type { Interval } from "./interval.ts";
import { startOfQuarter } from "./start-of-quarter.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns the first day of every quarter touched by the interval. Throws
 * `RangeError` if `start` is after `end`.
 */
export function eachQuarterOfInterval<T extends TemporalWithDate>(
	interval: Interval<T>,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError(
			"eachQuarterOfInterval: start must be on or before end",
		);
	}

	const result: T[] = [];
	let current = startOfQuarter(interval.start);
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ months: 3 }) as T;
	}
	return result;
}
