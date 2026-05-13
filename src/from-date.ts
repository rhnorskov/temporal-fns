/**
 * Converts a legacy `Date` to a Temporal value.
 *
 * Without a `timeZone`, returns a `Temporal.Instant` — the time-zone-free
 * representation of the absolute moment the `Date` refers to. Pass a
 * `timeZone` to anchor the instant in a specific zone and get a
 * `Temporal.ZonedDateTime` back. To get a `PlainDate` or `PlainDateTime`,
 * chain the zoned conversion: `fromDate(date, tz).toPlainDate()`.
 */
export function fromDate(date: Date): Temporal.Instant;
export function fromDate(
	date: Date,
	timeZone: Temporal.TimeZoneLike,
): Temporal.ZonedDateTime;
export function fromDate(
	date: Date,
	timeZone?: Temporal.TimeZoneLike,
): Temporal.Instant | Temporal.ZonedDateTime {
	const instant = Temporal.Instant.fromEpochMilliseconds(date.getTime());
	if (timeZone === undefined) {
		return instant;
	}
	return instant.toZonedDateTimeISO(timeZone);
}
