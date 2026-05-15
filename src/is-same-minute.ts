import type { TemporalWithDateTime } from "./temporal-types.ts";

/**
 * Returns `true` when `a` and `b` share the same wall-clock minute.
 */
export function isSameMinute(
	a: TemporalWithDateTime,
	b: TemporalWithDateTime,
): boolean {
	return (
		a.year === b.year &&
		a.month === b.month &&
		a.day === b.day &&
		a.hour === b.hour &&
		a.minute === b.minute
	);
}
