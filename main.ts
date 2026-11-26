// Funniest Forecast for a City That Isn't — a weather forecast
// for a city that does not exist. make.fun entry for
// u-eager-stork-81-9647-funniest-forecast-for-a-city-2a8769cf.
// Writes the forecast, one line, to /output/entry.txt.
//
// The forecast is funny because it is delivered with total
// professionalism about impossible weather: rain that falls
// upwards, and east winds that smell faintly of Tuesday. The
// city is Nowhere, the temperature is 22 degrees, and the
// forecaster has never once doubted any of it.

import { mkdirSync, writeFileSync } from "node:fs";

const forecast =
  "Tomorrow in Nowhere: 22 degrees, light rain that falls upwards, and east winds that smell faintly of Tuesday.";

const MAX_CHARS = 120;

function check(line: string): void {
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(`forecast must be 1-${MAX_CHARS} characters; got ${line.length}`);
  }
  if (line.trim().length === 0 || line.includes("\n")) {
    throw new Error("forecast must be a single non-blank line");
  }
}

check(forecast);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
console.log(`wrote /output/entry.txt (${forecast.length} characters)`);
console.log(forecast);
