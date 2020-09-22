# Example TS based plugin system

This project contains three npm packages that show how a Node.js plugin system
can use TS, while also letting plugins extend the application types.

* `packages/application` is the main package, which defines some types
* `packages/plugin` is a plugin that extends some of the application's types
* `packages/consumer` is a package that consumes the application and the plugin, but doesn't directly require the plugin

## How to run it

```sh
yarn
cd packages/application
yarn build
cd ../plugin
yarn build
cd ../consumer
yarn build
```

Look at the file `packages/consumer/src/other.ts`