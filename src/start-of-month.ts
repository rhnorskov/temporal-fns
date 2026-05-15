import { startOfDay } from "./start-of-day.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface StartOfMonthOptions {
	/**
	 * For time-bearing inputs, when `true` keeps the original wall-clock time
	 * on the first day of the month. When `false` (default), the time is
	 * also reset to 00:00:00.
	 */
	preserveTime?: boolean;
}

/**
 * Returns the first day of the month containing `temporal`. For
 * `PlainDateTime` / `ZonedDateTime`, time is zeroed unless
 * `{ preserveTime: true }`.
 */
export function startOfMonth<T extends TemporalWithDate>(
	temporal: T,
	options?: StartOfMonthOptions,
): T {
	const { preserveTime = false } = options ?? {};

	const firstDay = temporal.with({ day: 1 });

	if (firstDay instanceof Temporal.PlainDate) {
		return firstDay as T;
	}

	if (preserveTime) {
		return firstDay as T;
	}

	return startOfDay(firstDay) as T;
}
