import { compare } from "./compare";
import { type BusinessDayOptions, isBusinessDay } from "./is-business-day";
import type { TemporalWithDate } from "./temporal-types";

/**
 * Counts business days strictly between `earlier` and `later`: the start day
 * is excluded, the end day is included. Returns a negative number when
 * `later` is before `earlier`. Honors `options.weekendDays`.
 */
export function differenceInBusinessDays<T extends TemporalWithDate>(
	later: T,
	earlier: T,
	options?: BusinessDayOptions,
): number {
	const direction = compare(later, earlier);
	if (direction === 0) {
		return 0;
	}

	const [start, end] = direction > 0 ? [earlier, later] : [later, earlier];
	let count = 0;
	let current = start.add({ days: 1 }) as T;

	while (compare(current, end) <= 0) {
		if (isBusinessDay(current, options)) {
			count++;
		}
		current = current.add({ days: 1 }) as T;
	}

	return direction > 0 ? count : -count;
}
