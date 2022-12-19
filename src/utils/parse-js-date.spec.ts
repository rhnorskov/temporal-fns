/* eslint-env mocha */

import { parseJsDate } from "./parse-js-date";

describe("parseJsDate", () => {
  it("parses an ISO date", () => {
    const date = "2000-03-15";
    const parsedDate = parseJsDate(new Date(date));
    expect(parsedDate.toString()).toStrictEqual(date);
  });
});
