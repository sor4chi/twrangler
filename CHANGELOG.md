# twrangler

## 0.0.10

### Patch Changes

- [#23](https://github.com/sor4chi/twrangler/pull/23) [`f361734`](https://github.com/sor4chi/twrangler/commit/f36173416c8d8cf706e6167e0ba98d05b60d3492) Thanks [@sor4chi](https://github.com/sor4chi)! - Add `2024-04-29` for compatibility date

## 0.0.9

### Patch Changes

- [#20](https://github.com/sor4chi/twrangler/pull/20) [`e5e4764`](https://github.com/sor4chi/twrangler/commit/e5e476421bb611c288cc9292c0391585ba562aff) Thanks [@sushi-chaaaan](https://github.com/sushi-chaaaan)! - Add services to bindings schema

## 0.0.8

### Patch Changes

- [#17](https://github.com/sor4chi/twrangler/pull/17) [`8b35704`](https://github.com/sor4chi/twrangler/commit/8b357049f33a253d570858bdc39b6e437ee1dc7b) Thanks [@sor4chi](https://github.com/sor4chi)! - dynamic config supports.

  ```ts
  export default defineConfig(() => {
    return {
      name: "sumple-worker",
      // ...
    };
  });
  ```

## 0.0.7

### Patch Changes

- [#15](https://github.com/sor4chi/twrangler/pull/15) [`7c1d055`](https://github.com/sor4chi/twrangler/commit/7c1d05560edca7a82733d07ef74c3f0e303c8fdf) Thanks [@sor4chi](https://github.com/sor4chi)! - Update compatibility dates and compatibility flags schema

## 0.0.6

### Patch Changes

- [#13](https://github.com/sor4chi/twrangler/pull/13) [`a1574c7`](https://github.com/sor4chi/twrangler/commit/a1574c75a2b6863e004c637d38645fcfeb2b97de) Thanks [@sor4chi](https://github.com/sor4chi)! - Supports non inheritable keys

  - Multi Environments Configuration
  - Bindings

## 0.0.5

### Patch Changes

- [#10](https://github.com/sor4chi/twrangler/pull/10) [`bff20f2`](https://github.com/sor4chi/twrangler/commit/bff20f294272cad04b8078f50e14390a3e25dca6) Thanks [@sor4chi](https://github.com/sor4chi)! - Support all inheritable key fields

  <https://developers.cloudflare.com/workers/wrangler/configuration/#inheritable-keys>

## 0.0.4

### Patch Changes

- [`9360a8d`](https://github.com/sor4chi/twrangler/commit/9360a8d0f07e0293a4526042427ee413160caaf7) Thanks [@sor4chi](https://github.com/sor4chi)! - Fix esbuild dependencies of previous release

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
