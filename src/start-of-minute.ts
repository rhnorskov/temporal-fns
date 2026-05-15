import type { TemporalWithTime } from "./temporal-types.ts";

/**
 * Returns `temporal` with seconds and all sub-second fields zeroed.
 */
export function startOfMinute<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		second: 0,
		millisecond: 0,
		microsecond: 0,
		nanosecond: 0,
	}) as T;
}
