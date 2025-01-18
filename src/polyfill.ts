import type { Temporal } from "@js-temporal/polyfill";

let temporalPolyfill: typeof Temporal | undefined = globalThis["Temporal"];

export function setTemporalPolyfill(newTemporalPolyfill: typeof Temporal) {
  temporalPolyfill = newTemporalPolyfill;
}

export function getTemporalPolyfill() {
  if (temporalPolyfill == null) {
    throw new Error(
      "globalThis.Temporal is undefined. Use setTemporalPolyfill(MyTemporal) to use a polyfill.",
    );
  }
  return temporalPolyfill;
}
