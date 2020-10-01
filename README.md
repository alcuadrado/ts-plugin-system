# Example TS based plugin system

This project contains 4 npm packages that show how a Node.js plugin system
can use TS, while also letting plugins extend the application types.

* `packages/application` is the main package, which defines some types
* `packages/plugin` is a plugin that extends some of the application's types
* `packages/plugin2` is another plugin that depends on `packages/plugin2`. It uses it internally. This plugin also extends the application's types.
* `packages/consumer` is a package that consumes the application and the plugins, but doesn't directly require the plugins.

The most interesting bits are:
* How the `plugin` overrides the types.
* How the `consumer` registers this types extensions whithout doing a `require`/`import` to the `plugin`.

## How to run it

```sh
yarn
yarn wsrun --serial build
```

Look at the file `packages/consumer/src/other.ts`
