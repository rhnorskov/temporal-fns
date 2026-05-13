import type { TemporalWithTime } from "./temporal-types";

/**
 * Returns `temporal` at the last representable instant of its current hour
 * (minutes 59, seconds 59, all sub-second fields 999).
 */
export function endOfHour<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		minute: 59,
		second: 59,
		millisecond: 999,
		microsecond: 999,
		nanosecond: 999,
	}) as T;
}
