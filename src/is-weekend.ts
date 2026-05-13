import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns `true` when `temporal` falls on Saturday or Sunday. For
 * non-Sat/Sun weekends, use `isBusinessDay` with a custom `weekendDays`.
 */
export function isWeekend(temporal: TemporalWithDate): boolean {
	return temporal.dayOfWeek === 6 || temporal.dayOfWeek === 7;
}
