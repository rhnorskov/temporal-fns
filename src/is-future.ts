/**
 * Returns `true` when `temporal` is strictly after "now". Accepts `Instant`,
 * `PlainDate`, `PlainDateTime`, and `ZonedDateTime` — all types that can be
 * placed on the absolute timeline (or compared against today's date).
 *
 * For `ZonedDateTime` the comparison anchors "now" to the value's own zone.
 */
export function isFuture(
	temporal:
		| Temporal.Instant
		| Temporal.PlainDate
		| Temporal.PlainDateTime
		| Temporal.ZonedDateTime,
): boolean {
	if (temporal instanceof Temporal.Instant) {
		return Temporal.Instant.compare(temporal, Temporal.Now.instant()) > 0;
	}
	if (temporal instanceof Temporal.ZonedDateTime) {
		return (
			Temporal.ZonedDateTime.compare(
				temporal,
				Temporal.Now.zonedDateTimeISO(temporal.timeZoneId),
			) > 0
		);
	}
	if (temporal instanceof Temporal.PlainDateTime) {
		return (
			Temporal.PlainDateTime.compare(
				temporal,
				Temporal.Now.plainDateTimeISO(),
			) > 0
		);
	}
	return Temporal.PlainDate.compare(temporal, Temporal.Now.plainDateISO()) > 0;
}
