# TWrangler

> [!WARNING]
> This project is still in early development. Please use it with caution!

TWrangler is a simple tool to help you to manage `wrangler.toml` file for Cloudflare Stacks.

TWrangler means (T)ype-safe (Wrangler).toml.

Enhance your DX with configure your `wrangler.toml` file.

## Usage

```bash
npm install twrangler
```

Write your `wrangler.config.ts` file.

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

prefer to add `"prepare": "twrangler build"` in your package.json scripts.

You can get generated `wrangler.toml` file in cwd.

## Features (Roadmap)

- :zap: Configure `wrangler.toml` file in TypeScript with type support.
- :rocket: Generate `wrangler.toml` file from TypeScript.
- :key: Built-in `.env` and `.vars` support.
- :earth_americas: Multiple environment support.

## License

MIT
