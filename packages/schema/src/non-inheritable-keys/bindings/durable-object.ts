import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#durable-objects
const durableObjectsBindingsSchema = z.object({
  name: z.string(),
  class_name: z.string(),
  script_name: z.string().optional(),
  environment: z.string().optional(),
});

export const durableObjectsSchema = z.object({
  bindings: z.record(durableObjectsBindingsSchema),
});

export const migrationsSchema = z.object({
  tag: z.string(),
  new_classes: z.array(z.string()).optional(),
  renamed_classes: z
    .array(
      z.object({
        from: z.string(),
        to: z.string(),
      }),
    )
    .optional(),
  deleted_classes: z.array(z.string()).optional(),
});
