import { Temporal } from "temporal-polyfill";

import { endOfDay } from "./end-of-day";

export interface EndOfMonthOptions {
  preserveTime?: boolean;
}

export function endOfMonth<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, options?: EndOfMonthOptions): T {
  const { preserveTime = false } = options ?? {};
  const lastDay = temporal.with({ day: temporal.daysInMonth });

  if (lastDay instanceof Temporal.PlainDate) {
    return lastDay as T;
  }

  if (preserveTime) {
    return lastDay as T;
  }

  return endOfDay(lastDay) as T;
}
