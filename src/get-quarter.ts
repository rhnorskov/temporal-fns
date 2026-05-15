import type { TemporalWithYearMonth } from "./temporal-types.ts";

/**
 * Returns the quarter (1–4) of the year containing `temporal`.
 * Q1 = Jan–Mar, Q2 = Apr–Jun, Q3 = Jul–Sep, Q4 = Oct–Dec.
 */
export function getQuarter(temporal: TemporalWithYearMonth): 1 | 2 | 3 | 4 {
	return (Math.floor((temporal.month - 1) / 3) + 1) as 1 | 2 | 3 | 4;
}
