import { addBusinessDays } from "./add-business-days";
import type { BusinessDayOptions } from "./is-business-day";
import type { TemporalWithDate } from "./temporal-types";

/**
 * Subtracts `amount` business days from `temporal`. Equivalent to
 * `addBusinessDays(temporal, -amount, options)`; provided for symmetry with
 * Temporal's `.add()` / `.subtract()` pairing.
 */
export function subBusinessDays<T extends TemporalWithDate>(
	temporal: T,
	amount: number,
	options?: BusinessDayOptions,
): T {
	return addBusinessDays(temporal, -amount, options);
}
