import { type ComparableTemporal, compare } from "./compare.ts";

/**
 * Returns the latest value in `values`. Throws `RangeError` if `values` is
 * empty. All values must be the same Temporal type.
 */
export function max<T extends ComparableTemporal>(values: T[]): T {
	if (values.length === 0) {
		throw new RangeError("max requires at least one value");
	}
	return values.reduce((acc, value) => (compare(value, acc) > 0 ? value : acc));
}
