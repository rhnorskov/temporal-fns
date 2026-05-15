import { type ComparableTemporal, compare } from "./compare.ts";

/**
 * Returns the earliest value in `values`. Throws `RangeError` if `values` is
 * empty. All values must be the same Temporal type.
 */
export function min<T extends ComparableTemporal>(values: T[]): T {
	if (values.length === 0) {
		throw new RangeError("min requires at least one value");
	}
	return values.reduce((acc, value) => (compare(value, acc) < 0 ? value : acc));
}
