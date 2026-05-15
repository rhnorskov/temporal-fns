import type { DayOfWeek } from "./day-of-week.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns the next occurrence of `dayOfWeek` strictly after `temporal`. If
 * `temporal` already falls on `dayOfWeek`, the result is one week later.
 */
export function nextDayOfWeek<T extends TemporalWithDate>(
	temporal: T,
	dayOfWeek: DayOfWeek,
): T {
	let delta = dayOfWeek - temporal.dayOfWeek;

	if (delta <= 0) {
		delta += 7;
	}

	return temporal.add({ days: delta }) as T;
}
