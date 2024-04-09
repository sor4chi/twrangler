import { z } from "zod";

export const configSchema = z.object({
  name: z.string({
    required_error: '"name" field is required',
  }),
});

export type Config = z.infer<typeof configSchema>;

export function defineConfig(config: Config): Config {
  return config;
}
