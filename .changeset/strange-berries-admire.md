---
"twrangler": patch
---

First Release of Twrangler 🎉

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
