import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#kv-namespaces
const kvNamespaceSchema = z.object({
  binding: z.string(),
  id: z.string(),
  preview_id: z.string().optional(),
});

export const kvNamespacesSchema = z.array(kvNamespaceSchema);
