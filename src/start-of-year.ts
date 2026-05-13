import { startOfDay } from "./start-of-day";
import type { TemporalWithDate } from "./temporal-types";

export interface StartOfYearOptions {
	/**
	 * For time-bearing inputs, when `true` keeps the original wall-clock
	 * time. When `false` (default), time is reset to 00:00:00.
	 */
	preserveTime?: boolean;
}

/**
 * Returns January 1 of the year containing `temporal`. For time-bearing
 * inputs, time is zeroed unless `{ preserveTime: true }`.
 */
export function startOfYear<T extends TemporalWithDate>(
	temporal: T,
	options?: StartOfYearOptions,
): T {
	const { preserveTime = false } = options ?? {};

	const firstDay = temporal.with({ month: 1, day: 1 });

	if (firstDay instanceof Temporal.PlainDate) {
		return firstDay as T;
	}

	if (preserveTime) {
		return firstDay as T;
	}

	return startOfDay(firstDay) as T;
}
