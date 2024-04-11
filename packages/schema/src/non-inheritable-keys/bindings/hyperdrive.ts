import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#email-bindings
export const hyperdriveSchema = z.object({
  binding: z.string(),
  id: z.string(),
});
