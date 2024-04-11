import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#browser-rendering
export const browserSchema = z.object({
  binding: z.string(),
});
