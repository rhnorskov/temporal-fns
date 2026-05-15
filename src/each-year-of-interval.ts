import { compare } from "./compare.ts";
import type { Interval } from "./interval.ts";
import { startOfYear } from "./start-of-year.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

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
