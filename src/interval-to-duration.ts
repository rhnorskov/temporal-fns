import type { Interval } from "./interval.ts";

type ContinuousTemporal =
	| Temporal.Instant
	| Temporal.PlainDate
	| Temporal.PlainDateTime
	| Temporal.PlainTime
	| Temporal.ZonedDateTime;

/**
 * Returns the `Duration` from `interval.start` to `interval.end`.
 *
 * The default `largestUnit` is opinionated for each input type — `"year"`
 * for date-bearing types (`PlainDate`, `PlainDateTime`, `ZonedDateTime`) and
 * `"hour"` for `Instant` / `PlainTime` — so the result reads naturally
 * without further configuration. Pass `options` to override.
 *
 * `options` accepts the same shape as Temporal's `.until()` rounding
 * options, including `smallestUnit`, `roundingIncrement`, and
 * `roundingMode`.
 */
export function intervalToDuration(
	interval: Interval<Temporal.Instant>,
	options?: Temporal.RoundingOptionsWithLargestUnit<Temporal.TimeUnit>,
): Temporal.Duration;
export function intervalToDuration(
	interval: Interval<Temporal.ZonedDateTime>,
	options?: Temporal.RoundingOptionsWithLargestUnit<
		Temporal.DateUnit | Temporal.TimeUnit
	>,
): Temporal.Duration;
export function intervalToDuration(
	interval: Interval<Temporal.PlainDateTime>,
	options?: Temporal.RoundingOptionsWithLargestUnit<
		Temporal.DateUnit | Temporal.TimeUnit
	>,
): Temporal.Duration;
export function intervalToDuration(
	interval: Interval<Temporal.PlainDate>,
	options?: Temporal.RoundingOptionsWithLargestUnit<Temporal.DateUnit>,
): Temporal.Duration;
export function intervalToDuration(
	interval: Interval<Temporal.PlainTime>,
	options?: Temporal.RoundingOptionsWithLargestUnit<Temporal.TimeUnit>,
): Temporal.Duration;
export function intervalToDuration(
	interval: Interval<ContinuousTemporal>,
	options?: Temporal.RoundingOptionsWithLargestUnit<
		Temporal.DateUnit | Temporal.TimeUnit
	>,
): Temporal.Duration {
	const { start, end } = interval;

	if (start instanceof Temporal.Instant) {
		return start.until(end as Temporal.Instant, {
			largestUnit: "hour",
			...(options as Temporal.RoundingOptionsWithLargestUnit<Temporal.TimeUnit>),
		});
	}
	if (start instanceof Temporal.ZonedDateTime) {
		return start.until(end as Temporal.ZonedDateTime, {
			largestUnit: "year",
			...options,
		});
	}
	if (start instanceof Temporal.PlainDateTime) {
		return start.until(end as Temporal.PlainDateTime, {
			largestUnit: "year",
			...options,
		});
	}
	if (start instanceof Temporal.PlainDate) {
		return start.until(end as Temporal.PlainDate, {
			largestUnit: "year",
			...(options as Temporal.RoundingOptionsWithLargestUnit<Temporal.DateUnit>),
		});
	}
	return start.until(end as Temporal.PlainTime, {
		largestUnit: "hour",
		...(options as Temporal.RoundingOptionsWithLargestUnit<Temporal.TimeUnit>),
	});
}
