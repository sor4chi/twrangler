# twrangler

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
