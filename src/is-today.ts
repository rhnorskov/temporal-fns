import type { TemporalWithDate } from "./temporal-types";

/**
 * Returns `true` when `temporal` falls on today's calendar date. Does NOT
 * accept `Instant`: an absolute timeline point has no calendar date until a
 * time zone is supplied — convert via `instant.toZonedDateTimeISO(tz)` first.
 *
 * For `ZonedDateTime`, "today" is resolved in the value's own time zone.
 */
export function isToday(temporal: TemporalWithDate): boolean {
	const today =
		temporal instanceof Temporal.ZonedDateTime
			? Temporal.Now.plainDateISO(temporal.timeZoneId)
			: Temporal.Now.plainDateISO();

	return (
		temporal.year === today.year &&
		temporal.month === today.month &&
		temporal.day === today.day
	);
}
