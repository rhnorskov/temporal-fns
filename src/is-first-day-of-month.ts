import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns `true` when `temporal.day === 1`. Counterpart to `isLastDayOfMonth`.
 */
export function isFirstDayOfMonth(temporal: TemporalWithDate): boolean {
	return temporal.day === 1;
}
