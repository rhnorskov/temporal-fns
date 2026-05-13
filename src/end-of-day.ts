import type { TemporalWithTime } from "./temporal-types";

/**
 * Returns `temporal` at the last representable instant of its current day
 * (23:59:59.999999999).
 */
export function endOfDay<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		hour: 23,
		minute: 59,
		second: 59,
		millisecond: 999,
		microsecond: 999,
		nanosecond: 999,
	}) as T;
}
