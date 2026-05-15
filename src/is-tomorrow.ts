import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Returns `true` when `temporal` falls on tomorrow's calendar date. Does NOT
 * accept `Instant` — see `isToday` for the rationale.
 */
export function isTomorrow(temporal: TemporalWithDate): boolean {
	const today =
		temporal instanceof Temporal.ZonedDateTime
			? Temporal.Now.plainDateISO(temporal.timeZoneId)
			: Temporal.Now.plainDateISO();
	const tomorrow = today.add({ days: 1 });

	return (
		temporal.year === tomorrow.year &&
		temporal.month === tomorrow.month &&
		temporal.day === tomorrow.day
	);
}
