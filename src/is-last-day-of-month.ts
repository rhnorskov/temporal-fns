import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns `true` when `temporal` is on the final day of its month (handles
 * variable month lengths and leap years via `daysInMonth`).
 */
export function isLastDayOfMonth(temporal: TemporalWithDate): boolean {
	return temporal.day === temporal.daysInMonth;
}
