import { closestIndexTo } from "./closest-index-to";
import type { ComparableTemporal } from "./compare";

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
