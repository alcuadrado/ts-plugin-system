// Importing this is necessary
import { Config } from "application/types/config";

// We can use local types
import { M } from "./module";

declare module "application/types/config" {

    export interface Config {
        newField: number;
        m: M;
    }
}