import { z } from "zod";

import { inheritableKeysSchema } from "./inheritable-keys";
import { nonInheritableKeysSchema } from "./non-inheritable-keys";

export const configSchema = nonInheritableKeysSchema
  .merge(inheritableKeysSchema)
  .extend({
    env: z
      .record(nonInheritableKeysSchema.merge(inheritableKeysSchema.partial()))
      .optional(),
  });

export type Config = z.infer<typeof configSchema>;

export function defineConfig(config: Config | (() => Config)): Config {
  return typeof config === "function" ? config() : config;
}
