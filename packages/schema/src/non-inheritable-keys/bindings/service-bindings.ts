import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#service-bindings
export const serviceBindingsSchema = z.array(
  z.object({
    binding: z.string(),
    service: z.string(),
    entrypoint: z.string().optional(),
  }),
);
