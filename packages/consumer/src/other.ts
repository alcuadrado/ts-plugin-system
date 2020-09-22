import { Config, Config2 } from "application/types";;

console.log("This file uses the plugin, but doesn't import it");

const c: Config = {
    value: "v",
    newField: 123,
    m: {}
}

const c2: Config2 = {
    value: 123
}

console.log(c, c2);