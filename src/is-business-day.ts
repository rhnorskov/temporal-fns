import type { DayOfWeek } from "./day-of-week.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface BusinessDayOptions {
	/**
	 * Days of the week treated as weekend (ISO numbering: 1 = Mon, 7 = Sun).
	 * Defaults to `[6, 7]` (Saturday, Sunday).
	 */
	weekendDays?: readonly DayOfWeek[];
}

const DEFAULT_WEEKEND: readonly DayOfWeek[] = [6, 7];

/**
 * Returns `true` when `temporal` falls on a business day — i.e. its `dayOfWeek`
 * is not one of `options.weekendDays`. Default weekend is Saturday + Sunday.
 */
export function isBusinessDay(
	temporal: TemporalWithDate,
	options?: BusinessDayOptions,
): boolean {
	const weekendDays = options?.weekendDays ?? DEFAULT_WEEKEND;
	return !weekendDays.includes(temporal.dayOfWeek as DayOfWeek);
}
