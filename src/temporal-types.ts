/**
 * Temporal types that expose a calendar date (year + month + day).
 * Excludes `PlainTime` (no date) and `PlainYearMonth` (no day).
 */
export type TemporalWithDate =
	| Temporal.PlainDate
	| Temporal.PlainDateTime
	| Temporal.ZonedDateTime;

/**
 * Temporal types that expose a wall-clock time (hour + minute + second
 * + sub-second). Excludes `PlainDate` and `PlainYearMonth`.
 */
export type TemporalWithTime =
	| Temporal.PlainTime
	| Temporal.PlainDateTime
	| Temporal.ZonedDateTime;

/**
 * Temporal types that expose both a calendar date and a wall-clock time.
 */
export type TemporalWithDateTime =
	| Temporal.PlainDateTime
	| Temporal.ZonedDateTime;

/**
 * Temporal types that expose a year + month (no day required).
 */
export type TemporalWithYearMonth =
	| Temporal.PlainDate
	| Temporal.PlainDateTime
	| Temporal.PlainYearMonth
	| Temporal.ZonedDateTime;
