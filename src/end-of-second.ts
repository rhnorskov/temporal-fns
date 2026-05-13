import type { TemporalWithTime } from "./temporal-types";

/**
 * Returns `temporal` at the last representable instant of its current second
 * (millisecond/microsecond/nanosecond all 999).
 */
export function endOfSecond<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		millisecond: 999,
		microsecond: 999,
		nanosecond: 999,
	}) as T;
}
