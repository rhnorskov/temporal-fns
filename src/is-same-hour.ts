import type { TemporalWithDateTime } from "./temporal-types";

/**
 * Returns `true` when `a` and `b` share the same wall-clock hour.
 */
export function isSameHour(
	a: TemporalWithDateTime,
	b: TemporalWithDateTime,
): boolean {
	return (
		a.year === b.year &&
		a.month === b.month &&
		a.day === b.day &&
		a.hour === b.hour
	);
}
