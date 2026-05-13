import type { DayOfWeek } from "./day-of-week";
import { endOfDay } from "./end-of-day";
import type { TemporalWithDate } from "./temporal-types";

export interface EndOfWeekOptions {
	/**
	 * ISO day-of-week that marks the start of a week. Defaults to 1 (Monday),
	 * which makes Sunday the last day of the week.
	 */
	weekStartsOn?: DayOfWeek;
	/**
	 * For time-bearing inputs, when `true` keeps the original wall-clock
	 * time on the last day of the week. When `false` (default), the time is
	 * set to 23:59:59.999999999.
	 */
	preserveTime?: boolean;
}

/**
 * Returns the last day of the week containing `temporal`. Defaults to ISO
 * weeks (Sunday as the last day). For time-bearing inputs, time is snapped
 * to end of day unless `{ preserveTime: true }`.
 */
export function endOfWeek<T extends TemporalWithDate>(
	temporal: T,
	options?: EndOfWeekOptions,
): T {
	const { weekStartsOn = 1, preserveTime = false } = options ?? {};
	const lastDayOfWeek = ((weekStartsOn + 5) % 7) + 1;
	const delta = (lastDayOfWeek - temporal.dayOfWeek + 7) % 7;
	const lastDay = temporal.add({ days: delta });

	if (lastDay instanceof Temporal.PlainDate) {
		return lastDay as T;
	}

	if (preserveTime) {
		return lastDay as T;
	}

	return endOfDay(lastDay) as T;
}
