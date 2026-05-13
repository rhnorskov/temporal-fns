import { compare } from "./compare";
import type { Interval } from "./interval";
import { startOfYear } from "./start-of-year";
import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns the first day of every year touched by the interval. Throws
 * `RangeError` if `start` is after `end`.
 */
export function eachYearOfInterval<T extends TemporalWithDate>(
	interval: Interval<T>,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError("eachYearOfInterval: start must be on or before end");
	}

	const result: T[] = [];
	let current = startOfYear(interval.start);
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ years: 1 }) as T;
	}
	return result;
}
