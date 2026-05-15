import { endOfDay } from "./end-of-day.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface EndOfMonthOptions {
	/**
	 * For time-bearing inputs, when `true` keeps the original wall-clock
	 * time. When `false` (default), time is set to 23:59:59.999999999.
	 */
	preserveTime?: boolean;
}

/**
 * Returns the last day of the month containing `temporal`. For time-bearing
 * inputs, time is snapped to end of day unless `{ preserveTime: true }`.
 */
export function endOfMonth<T extends TemporalWithDate>(
	temporal: T,
	options?: EndOfMonthOptions,
): T {
	const { preserveTime = false } = options ?? {};
	const lastDay = temporal.with({ day: temporal.daysInMonth });

	if (lastDay instanceof Temporal.PlainDate) {
		return lastDay as T;
	}

	if (preserveTime) {
		return lastDay as T;
	}

	return endOfDay(lastDay) as T;
}
