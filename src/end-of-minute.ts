import type { TemporalWithTime } from "./temporal-types";

/**
 * Returns `temporal` at the last representable instant of its current minute
 * (seconds 59 and all sub-second fields 999).
 */
export function endOfMinute<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		second: 59,
		millisecond: 999,
		microsecond: 999,
		nanosecond: 999,
	}) as T;
}
