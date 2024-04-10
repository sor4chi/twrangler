import * as TOML from "@iarna/toml";
import { type Config, configSchema } from "@twrangler/schema";

export class Twrangler {
  config: Config;

  constructor(config?: Record<string, unknown>) {
    this.config = configSchema.parse(config);
  }

  toToml(): string {
    return TOML.stringify(this.config);
  }
}
