import type { ComparableTemporal } from "./compare";

/**
 * Returns the index of the candidate whose distance to `target` is smallest,
 * or `-1` when `candidates` is empty. Ties resolve to the lowest index.
 * All candidates must be the same Temporal type as `target`.
 */
export function closestIndexTo<T extends ComparableTemporal>(
	target: T,
	candidates: T[],
): number {
	let bestIndex = -1;
	let bestDiff: bigint | null = null;

	for (let i = 0; i < candidates.length; i++) {
		const candidate = candidates[i];
		if (candidate === undefined) continue;

		const diff = absDiff(target, candidate);
		if (bestDiff === null || diff < bestDiff) {
			bestDiff = diff;
			bestIndex = i;
		}
	}

	return bestIndex;
}

// All branches return a `bigint` so differences across types share a common
// comparable representation. `Instant` / `ZonedDateTime` expose
// `epochNanoseconds` directly; the other branches reduce a `Duration` to its
// largest precise unit (nanoseconds for time-bearing types, days for
// `PlainDate`, months for `PlainYearMonth`) and truncate. Sub-unit precision
// is lost where it doesn't exist — fine, since we only need ordering.
function absDiff<T extends ComparableTemporal>(a: T, b: T): bigint {
	if (a instanceof Temporal.Instant) {
		return abs(a.epochNanoseconds - (b as Temporal.Instant).epochNanoseconds);
	}
	if (a instanceof Temporal.ZonedDateTime) {
		return abs(
			a.epochNanoseconds - (b as Temporal.ZonedDateTime).epochNanoseconds,
		);
	}
	if (a instanceof Temporal.PlainYearMonth) {
		return abs(
			BigInt(
				a.since(b as Temporal.PlainYearMonth, { largestUnit: "month" }).months,
			),
		);
	}
	if (a instanceof Temporal.PlainDate) {
		return abs(
			fromNumber(a.since(b as Temporal.PlainDate).total({ unit: "day" })),
		);
	}
	if (a instanceof Temporal.PlainDateTime) {
		return abs(
			fromNumber(
				a
					.since(b as Temporal.PlainDateTime, { largestUnit: "day" })
					.total({ unit: "nanosecond" }),
			),
		);
	}
	return abs(
		fromNumber(
			(a as Temporal.PlainTime)
				.since(b as Temporal.PlainTime)
				.total({ unit: "nanosecond" }),
		),
	);
}

function abs(value: bigint): bigint {
	return value < 0n ? -value : value;
}

function fromNumber(value: number): bigint {
	return BigInt(Math.trunc(value));
}
