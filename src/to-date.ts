/**
 * Converts a Temporal value to a legacy `Date`.
 *
 * `Instant` and `ZonedDateTime` are converted by the absolute instant they
 * represent. `PlainDate` and `PlainDateTime` are constructed as local-zone
 * `Date`s using their wall-clock fields.
 */
export function toDate(
	temporal:
		| Temporal.Instant
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime,
): Date {
	if (temporal instanceof Temporal.Instant) {
		return new Date(temporal.epochMilliseconds);
	}

	if (temporal instanceof Temporal.ZonedDateTime) {
		return new Date(temporal.epochMilliseconds);
	}

	if (temporal instanceof Temporal.PlainDate) {
		return new Date(temporal.year, temporal.month - 1, temporal.day);
	}

	return new Date(
		temporal.year,
		temporal.month - 1,
		temporal.day,
		temporal.hour,
		temporal.minute,
		temporal.second,
		temporal.millisecond,
	);
}
