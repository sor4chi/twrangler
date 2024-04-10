import { defineConfig } from "twrangler";

export default defineConfig({
  name: "my-project",
  main: "src/index.ts",
  compatibility_date: "2022-03-21",
  route: "/api/*",
  routes: [
    { pattern: "shop.example.com", custom_domain: true },
    { pattern: "admin.example.com", custom_domain: true },
  ],
  tsconfig: "tsconfig.json",
  triggers: {
    crons: ["0 0 * * *"],
  },
  rules: [
    {
      type: "Text",
      globs: ["**/*.md"],
      fallthrough: true,
    },
  ],
  build: {
    command: "npm run build",
    cwd: "dist",
    watch_dir: "src",
  },
  no_bundle: true,
  minify: true,
  node_compat: true,
  preserve_file_names: true,
  send_metrics: true,
  keep_vars: true,
  logpush: true,
  limits: {
    cpu_ms: 1000,
  },
});
