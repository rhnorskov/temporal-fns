import { Temporal } from "temporal-polyfill";

export function startOfWeek<
  T extends
    | Temporal.PlainDate
    | Temporal.PlainDateTime
    | Temporal.ZonedDateTime,
>(temporal: T): T {
  const delta = temporal.dayOfWeek === 1 ? 0 : -(temporal.dayOfWeek - 1);

  return temporal.add({ days: delta }) as T;
}
