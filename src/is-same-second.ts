import type { TemporalWithDateTime } from "./temporal-types.ts";

/**
 * Returns `true` when `a` and `b` share the same wall-clock second (year,
 * month, day, hour, minute, second equal). Sub-second fields are ignored.
 */
export function isSameSecond(
	a: TemporalWithDateTime,
	b: TemporalWithDateTime,
): boolean {
	return (
		a.year === b.year &&
		a.month === b.month &&
		a.day === b.day &&
		a.hour === b.hour &&
		a.minute === b.minute &&
		a.second === b.second
	);
}
