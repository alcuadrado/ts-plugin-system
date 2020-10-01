/// <reference types="plugin" />

// Importing this is necessary
import { Config } from "application/types/config";

declare module "application/types/config" {
  export interface Config {
    plugin2Field: number;
  }
}
