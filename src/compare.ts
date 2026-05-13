export type ComparableTemporal =
	| Temporal.Instant
	| Temporal.PlainDate
	| Temporal.PlainDateTime
	| Temporal.PlainTime
	| Temporal.PlainYearMonth
	| Temporal.ZonedDateTime;

/**
 * Polymorphic compare for any pair of same-typed Temporal values. Returns a
 * negative number if `a < b`, `0` if equal, positive if `a > b` — matching the
 * convention used by each `Temporal.X.compare` static.
 *
 * Both arguments must be the same Temporal type.
 */
export function compare<T extends ComparableTemporal>(a: T, b: T): number {
	if (a instanceof Temporal.Instant) {
		return Temporal.Instant.compare(a, b as Temporal.Instant);
	}
	if (a instanceof Temporal.ZonedDateTime) {
		return Temporal.ZonedDateTime.compare(a, b as Temporal.ZonedDateTime);
	}
	if (a instanceof Temporal.PlainDateTime) {
		return Temporal.PlainDateTime.compare(a, b as Temporal.PlainDateTime);
	}
	if (a instanceof Temporal.PlainDate) {
		return Temporal.PlainDate.compare(a, b as Temporal.PlainDate);
	}
	if (a instanceof Temporal.PlainTime) {
		return Temporal.PlainTime.compare(a, b as Temporal.PlainTime);
	}
	return Temporal.PlainYearMonth.compare(a, b as Temporal.PlainYearMonth);
}
