import { compare } from "./compare.ts";
import type { Interval } from "./interval.ts";
import { startOfMonth } from "./start-of-month.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns the first day of every month touched by the interval. Throws
 * `RangeError` if `start` is after `end`.
 */
export function eachMonthOfInterval<T extends TemporalWithDate>(
	interval: Interval<T>,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError("eachMonthOfInterval: start must be on or before end");
	}

	const result: T[] = [];
	let current = startOfMonth(interval.start);
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ months: 1 }) as T;
	}
	return result;
}
