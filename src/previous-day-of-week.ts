import type { DayOfWeek } from "./day-of-week.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns the previous occurrence of `dayOfWeek` strictly before `temporal`.
 * If `temporal` already falls on `dayOfWeek`, the result is one week earlier.
 */
export function previousDayOfWeek<T extends TemporalWithDate>(
	temporal: T,
	dayOfWeek: DayOfWeek,
): T {
	let delta = temporal.dayOfWeek - dayOfWeek;

	if (delta <= 0) {
		delta += 7;
	}

	return temporal.subtract({ days: delta }) as T;
}
