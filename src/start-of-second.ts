import type { TemporalWithTime } from "./temporal-types.ts";

/**
 * Returns `temporal` with sub-second fields zeroed (millisecond, microsecond,
 * nanosecond → 0).
 */
export function startOfSecond<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		millisecond: 0,
		microsecond: 0,
		nanosecond: 0,
	}) as T;
}
