import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#limits
export const limitsSchema = z.object({
  cpu_ms: z.number().optional(),
});
