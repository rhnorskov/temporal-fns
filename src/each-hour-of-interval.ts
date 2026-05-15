import { compare } from "./compare.ts";
import type { Interval } from "./interval.ts";
import { startOfHour } from "./start-of-hour.ts";
import type { TemporalWithDateTime } from "./temporal-types.ts";

/**
 * Returns every hour in the inclusive interval. The first element is snapped
 * to the start of the hour. Throws `RangeError` if `start` is after `end`.
 */
export function eachHourOfInterval<T extends TemporalWithDateTime>(
	interval: Interval<T>,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError("eachHourOfInterval: start must be on or before end");
	}

	const result: T[] = [];
	let current = startOfHour(interval.start) as T;
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ hours: 1 }) as T;
	}
	return result;
}
