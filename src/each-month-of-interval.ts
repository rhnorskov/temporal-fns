import { compare } from "./compare";
import type { Interval } from "./interval";
import { startOfMonth } from "./start-of-month";
import type { TemporalWithDate } from "./temporal-types";

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
