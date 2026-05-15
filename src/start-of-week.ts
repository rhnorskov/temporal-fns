import type { DayOfWeek } from "./day-of-week.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

export interface StartOfWeekOptions {
	/**
	 * ISO day-of-week that marks the start of a week. Defaults to 1 (Monday).
	 */
	weekStartsOn?: DayOfWeek;
}

/**
 * Returns the first day of the week containing `temporal`. Defaults to ISO
 * weeks (Monday); pass `weekStartsOn` to change the anchor.
 */
export function startOfWeek<T extends TemporalWithDate>(
	temporal: T,
	options?: StartOfWeekOptions,
): T {
	const { weekStartsOn = 1 } = options ?? {};
	const delta = (temporal.dayOfWeek - weekStartsOn + 7) % 7;

	return temporal.subtract({ days: delta }) as T;
}
