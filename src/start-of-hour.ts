import type { TemporalWithTime } from "./temporal-types";

/**
 * Returns `temporal` with minutes, seconds, and all sub-second fields zeroed.
 */
export function startOfHour<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		minute: 0,
		second: 0,
		millisecond: 0,
		microsecond: 0,
		nanosecond: 0,
	}) as T;
}
