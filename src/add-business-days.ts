import { type BusinessDayOptions, isBusinessDay } from "./is-business-day.ts";
import type { TemporalWithDate } from "./temporal-types.ts";

/**
 * Adds `amount` business days to `temporal`, skipping weekends (and, if
 * configured, any days listed in `options.weekendDays`). `amount` may be
 * negative to subtract. Throws `RangeError` if `amount` is not an integer.
 *
 * The return type matches the input type.
 */
export function addBusinessDays<T extends TemporalWithDate>(
	temporal: T,
	amount: number,
	options?: BusinessDayOptions,
): T {
	if (!Number.isInteger(amount)) {
		throw new RangeError("addBusinessDays: amount must be an integer");
	}

	if (amount === 0) {
		return temporal;
	}

	const direction = amount > 0 ? 1 : -1;
	let remaining = Math.abs(amount);
	let current = temporal;

	while (remaining > 0) {
		current = current.add({ days: direction }) as T;
		if (isBusinessDay(current, options)) {
			remaining--;
		}
	}

	return current;
}
