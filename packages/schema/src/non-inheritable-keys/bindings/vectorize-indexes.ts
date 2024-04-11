import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#vectorize-indexes
export const vectorizeSchema = z.array(
  z.object({
    binding: z.string(),
    index_name: z.string(),
  }),
);
