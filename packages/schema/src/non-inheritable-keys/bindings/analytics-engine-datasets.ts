import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#analytics-engine-datasets
export const analyticsEngineDatasetsSchema = z.array(
  z.object({
    binding: z.string(),
    dataset: z.string().optional(),
  }),
);
