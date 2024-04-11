import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#triggers
export const triggersSchema = z.object({
  crons: z.array(z.string()),
});
