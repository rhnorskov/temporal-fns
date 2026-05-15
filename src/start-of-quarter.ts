import { startOfDay } from "./start-of-day.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface StartOfQuarterOptions {
	/**
	 * For time-bearing inputs, when `true` keeps the original wall-clock
	 * time. When `false` (default), time is reset to 00:00:00.
	 */
	preserveTime?: boolean;
}

/**
 * Returns the first day of the quarter containing `temporal` (Jan, Apr, Jul,
 * Oct). For time-bearing inputs, time is zeroed unless
 * `{ preserveTime: true }`.
 */
export function startOfQuarter<T extends TemporalWithDate>(
	temporal: T,
	options?: StartOfQuarterOptions,
): T {
	const { preserveTime = false } = options ?? {};

	const quarterStartMonth = Math.floor((temporal.month - 1) / 3) * 3 + 1;
	const firstDay = temporal.with({ month: quarterStartMonth, day: 1 });

	if (firstDay instanceof Temporal.PlainDate) {
		return firstDay as T;
	}

	if (preserveTime) {
		return firstDay as T;
	}

	return startOfDay(firstDay) as T;
}
