import { compare } from "./compare.ts";
import type { DayOfWeek } from "./day-of-week.ts";
import type { Interval } from "./interval.ts";
import { startOfWeek } from "./start-of-week.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface EachWeekOfIntervalOptions {
	/**
	 * ISO day-of-week that marks the start of a week. Defaults to 1 (Monday).
	 */
	weekStartsOn?: DayOfWeek;
}

/**
 * Returns the first day (per `weekStartsOn`) of every week touched by the
 * interval. Throws `RangeError` if `start` is after `end`.
 */
export function eachWeekOfInterval<T extends TemporalWithDate>(
	interval: Interval<T>,
	options?: EachWeekOfIntervalOptions,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError("eachWeekOfInterval: start must be on or before end");
	}

	const result: T[] = [];
	let current = startOfWeek(interval.start, options);
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ days: 7 }) as T;
	}
	return result;
}
