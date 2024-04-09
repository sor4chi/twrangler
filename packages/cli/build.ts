import { build } from "esbuild";

build({
  bundle: true,
  entryPoints: ["./src/index.ts"],
  banner: {
    js: "#!/usr/bin/env node",
  },
  platform: "node",
  outfile: "./dist/bin",
  format: "cjs",
  external: ["node:fs/promises", "esbuild"],
});
