import type { DayOfWeek } from "./day-of-week";
import { startOfMonth } from "./start-of-month";
import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns the first occurrence of `dayOfWeek` in the month of `temporal`
 * (e.g. the first Monday of March). Time is preserved for time-bearing
 * inputs.
 */
export function firstDayOfWeekOfMonth<T extends TemporalWithDate>(
	temporal: T,
	dayOfWeek: DayOfWeek,
): T {
	const firstDay = startOfMonth(temporal, { preserveTime: true });

	const delta = (dayOfWeek - firstDay.dayOfWeek + 7) % 7;

	return firstDay.add({ days: delta }) as T;
}
