import type { z } from "zod";

import { inheritableKeysSchema } from "./inheritable-keys";

export const configSchema = inheritableKeysSchema;

export type Config = z.infer<typeof configSchema>;

export function defineConfig(config: Config): Config {
  return config;
}
