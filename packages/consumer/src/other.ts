import { Config, Config2 } from "application/types";

console.log("This file uses the plugin and plugin2, but doesn't import them");

const c: Config = {
  // From `application`
  value: "v",
  // From `plugin`
  newField: 123,
  m: {},
  // From `plugin2`
  plugin2Field: 123,
};

// This isn't augmented, and it's still valid
const c2: Config2 = {
  value: 123,
};

console.log(c, c2);
