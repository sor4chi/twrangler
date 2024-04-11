import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#r2-buckets
export const r2BucketsSchema = z.array(
  z.object({
    binding: z.string(),
    bucket_name: z.string(),
  }),
);
