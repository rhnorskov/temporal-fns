import { compare } from "./compare.ts";
import type { Interval } from "./interval.ts";
import { startOfDay } from "./start-of-day.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns every day in the inclusive interval. For time-bearing types
 * (`PlainDateTime`, `ZonedDateTime`) the first element is snapped to start of
 * day. Throws `RangeError` if `start` is after `end`.
 */
export function eachDayOfInterval<T extends TemporalWithDate>(
	interval: Interval<T>,
): T[] {
	if (compare(interval.start, interval.end) > 0) {
		throw new RangeError("eachDayOfInterval: start must be on or before end");
	}

	let current: T =
		interval.start instanceof Temporal.PlainDate
			? interval.start
			: (startOfDay(interval.start) as T);

	const result: T[] = [];
	while (compare(current, interval.end) <= 0) {
		result.push(current);
		current = current.add({ days: 1 }) as T;
	}
	return result;
}
