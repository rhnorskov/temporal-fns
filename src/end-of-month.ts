import type { Temporal } from "@js-temporal/polyfill";

import { endOfDay } from "./end-of-day";
import { getTemporalPolyfill } from "./polyfill";

export interface EndOfMonthOptions {
  preserveTime?: boolean;
}

export function endOfMonth<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T, options?: EndOfMonthOptions): T {
  const Temporal = getTemporalPolyfill();
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
