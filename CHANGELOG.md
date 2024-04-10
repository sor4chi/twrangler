# twrangler

## 0.0.3

### Patch Changes

- [#5](https://github.com/sor4chi/twrangler/pull/5) [`ba34de0`](https://github.com/sor4chi/twrangler/commit/ba34de0dff706a7d1a64420e43dc0b8406505ae1) Thanks [@sor4chi](https://github.com/sor4chi)! - Fix resolve `esbuild` dependencies for `twrangler` package.

## 0.0.2

### Patch Changes

- [#3](https://github.com/sor4chi/twrangler/pull/3) [`9351c6e`](https://github.com/sor4chi/twrangler/commit/9351c6ef7200d75793c2ba9a6b7f87649e9debc3) Thanks [@sor4chi](https://github.com/sor4chi)! - Fix dependencies to allow npm-import of `twrangler` package.

## 0.0.1

### Patch Changes

- [`1255d9b`](https://github.com/sor4chi/twrangler/commit/1255d9b7d22d76734c5bdc1572f094a08d7ca18f) Thanks [@sor4chi](https://github.com/sor4chi)! - First Release of Twrangler 🎉

  ```bash
  npm install twrangler
  ```

  ```ts
  import { defineConfig } from "twrangler";

  export default defineConfig({
    name: "my-project",
    main: "src/index.ts",
    compatibility_date: "2022-03-21",
  });
  ```

  ```bash
  npx twrangler build
  ```

  You can get generated `wrangler.toml` file in cwd.
