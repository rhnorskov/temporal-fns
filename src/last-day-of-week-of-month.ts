import type { DayOfWeek } from "./day-of-week";
import { endOfMonth } from "./end-of-month";
import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns the last occurrence of `dayOfWeek` in the month of `temporal`
 * (e.g. the last Friday of August). Time is preserved for time-bearing
 * inputs.
 */
export function lastDayOfWeekOfMonth<T extends TemporalWithDate>(
	temporal: T,
	dayOfWeek: DayOfWeek,
): T {
	const lastDay = endOfMonth(temporal, { preserveTime: true });

	const delta = (lastDay.dayOfWeek - dayOfWeek + 7) % 7;

	return lastDay.subtract({ days: delta }) as T;
}
