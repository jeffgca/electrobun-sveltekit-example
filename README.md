# Electrobun + Sveltekit

> Why? Well, SK is pretty nice for quickly building a multi-view app, and people might want all the nice stuff it give you.

## Getting started

```
$ git clone git@github.com:jeffgca/electrobun-sveltekit-example.git && cd ./electrobun-sveltekit-example
$ bun install && cd src/mainview && bun install
$ cd ../../ && bun run dev:hmr
```

## Working:

- builds ( `bun start` )
- dev / hmr mode ( `bun run dev:hmr` )
- IPC example for SK's data loading utilities

## TODO:

- always open devtools?
- examples that integrate with EB's native OS integrations
- moar

## Bugs

- I'm using shell scripts to run the sveltekit app's embedded commands, probably a nicer way to do that. Currently you need to hit CMD+c twice to fully exit from `bun run dev:hmr`
