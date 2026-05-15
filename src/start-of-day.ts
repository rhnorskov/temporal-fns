import type { TemporalWithTime } from "./temporal-types.ts";

/**
 * Returns `temporal` with the time portion zeroed (00:00:00.000000000).
 */
export function startOfDay<T extends TemporalWithTime>(temporal: T): T {
	return temporal.with({
		hour: 0,
		minute: 0,
		second: 0,
		millisecond: 0,
		microsecond: 0,
		nanosecond: 0,
	}) as T;
}
