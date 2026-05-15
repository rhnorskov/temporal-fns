import { compare } from "./compare.ts";
import type { Interval } from "./interval.ts";
import { startOfMinute } from "./start-of-minute.ts";
import type { TemporalWithDateTime } from "./temporal-types.ts";

/**
 * Returns every minute in the inclusive interval. The first element is
 * snapped to the start of the minute. Throws `RangeError` if `start` is
 * after `end`.
 */
export function eachMinuteOfInterval<T extends TemporalWithDateTime>(
	interval: Interval<T>,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError(
			"eachMinuteOfInterval: start must be on or before end",
		);
	}

	const result: T[] = [];
	let current = startOfMinute(interval.start) as T;
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ minutes: 1 }) as T;
	}
	return result;
}
