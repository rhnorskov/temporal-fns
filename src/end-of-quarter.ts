import { endOfDay } from "./end-of-day.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface EndOfQuarterOptions {
	/**
	 * For time-bearing inputs, when `true` keeps the original wall-clock
	 * time. When `false` (default), time is set to 23:59:59.999999999.
	 */
	preserveTime?: boolean;
}

/**
 * Returns the last day of the quarter (Mar 31, Jun 30, Sep 30, Dec 31)
 * containing `temporal`. For time-bearing inputs, time is snapped to end of
 * day unless `{ preserveTime: true }`.
 */
export function endOfQuarter<T extends TemporalWithDate>(
	temporal: T,
	options?: EndOfQuarterOptions,
): T {
	const { preserveTime = false } = options ?? {};

	const quarterEndMonth = Math.floor((temporal.month - 1) / 3) * 3 + 3;
	const lastDayOfMonth = temporal.with({ month: quarterEndMonth, day: 1 });
	const lastDay = lastDayOfMonth.with({ day: lastDayOfMonth.daysInMonth });

	if (lastDay instanceof Temporal.PlainDate) {
		return lastDay as T;
	}

	if (preserveTime) {
		return lastDay as T;
	}

	return endOfDay(lastDay) as T;
}
