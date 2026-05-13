import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns `true` when `temporal` falls on yesterday's calendar date. Does
 * NOT accept `Instant` — see `isToday` for the rationale.
 */
export function isYesterday(temporal: TemporalWithDate): boolean {
	const today =
		temporal instanceof Temporal.ZonedDateTime
			? Temporal.Now.plainDateISO(temporal.timeZoneId)
			: Temporal.Now.plainDateISO();
	const yesterday = today.subtract({ days: 1 });

	return (
		temporal.year === yesterday.year &&
		temporal.month === yesterday.month &&
		temporal.day === yesterday.day
	);
}
