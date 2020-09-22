import { Config } from "application/types";

// This module is an example that uses type extensions
// from `plugin` and `plugin2`.
const _c: Config = {
  // from `application`
  value: "a",
  // from `plugin2`
  plugin2Field: 12,
  // from `plugin`
  newField: 123,
  m: {},
};
