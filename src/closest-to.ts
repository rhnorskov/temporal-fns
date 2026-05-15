import { closestIndexTo } from "./closest-index-to.ts";
import type { ComparableTemporal } from "./compare.ts";

/**
 * Returns the candidate whose distance to `target` is smallest, or `null`
 * when `candidates` is empty. Ties resolve to the earliest candidate.
 */
export function closestTo<T extends ComparableTemporal>(
	target: T,
	candidates: T[],
): T | null {
	const index = closestIndexTo(target, candidates);
	return index === -1 ? null : (candidates[index] ?? null);
}
