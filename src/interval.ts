import type { ComparableTemporal } from "./compare";

/**
 * A half-or-fully-closed range between two Temporal values of the same type.
 * Whether `start` and `end` are inclusive depends on the function consuming
 * the interval (e.g. `isWithinInterval` is inclusive on both ends;
 * `areIntervalsOverlapping` is exclusive by default).
 */
export interface Interval<T extends ComparableTemporal> {
	start: T;
	end: T;
}
