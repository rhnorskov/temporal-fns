import { Temporal } from "temporal-polyfill";

import { startOfDay } from "./start-of-day";

export interface StartOfMonthOptions {
  preserveTime?: boolean;
}

export function startOfMonth<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, options?: StartOfMonthOptions): T {
  const { preserveTime = false } = options ?? {};

  const firstDay = temporal.with({ day: 1 });

  if (firstDay instanceof Temporal.PlainDate) {
    return firstDay as T;
  }

  if (preserveTime) {
    return firstDay as T;
  }

  return startOfDay(firstDay) as T;
}
