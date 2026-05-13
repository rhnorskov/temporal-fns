import type { DayOfWeek } from "./day-of-week";
import { startOfWeek } from "./start-of-week";
import type { TemporalWithDate } from "./temporal-types";

export interface IsSameWeekOptions {
	/**
	 * ISO day-of-week that marks the start of a week. Defaults to 1 (Monday).
	 */
	weekStartsOn?: DayOfWeek;
}

/**
 * Returns `true` when `a` and `b` fall in the same week. Default week start
 * is Monday (ISO); change via `weekStartsOn`.
 */
export function isSameWeek(
	a: TemporalWithDate,
	b: TemporalWithDate,
	options?: IsSameWeekOptions,
): boolean {
	const startA = startOfWeek(a, options);
	const startB = startOfWeek(b, options);
	return (
		startA.year === startB.year &&
		startA.month === startB.month &&
		startA.day === startB.day
	);
}
