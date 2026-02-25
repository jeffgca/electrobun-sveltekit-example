import type { ElectrobunConfig } from "electrobun";

export default {
  app: {
    name: "SvelteKit Starter",
    identifier: "sveltekit.electrobun.dev",
    version: "0.0.1",
  },
  build: {
    copy: {
      "src/mainview/build/index.html": "views/mainview/index.html",
      "src/mainview/build/_app": "views/mainview/_app",
    },
    watchIgnore: ["dist/**"],
    mac: {
      bundleCEF: false,
    },
    linux: {
      bundleCEF: false,
    },
    win: {
      bundleCEF: false,
    },
  },
} satisfies ElectrobunConfig;
