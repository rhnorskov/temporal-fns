import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns `true` when `temporal.day === 1`. Counterpart to `isLastDayOfMonth`.
 */
export function isFirstDayOfMonth(temporal: TemporalWithDate): boolean {
	return temporal.day === 1;
}
