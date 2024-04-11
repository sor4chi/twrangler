import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#workers-ai
export const aiSchema = z.object({
  binding: z.string(),
});
