import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#dispatch-namespace-bindings-workers-for-platforms
export const dispatchNamespacesSchema = z.object({
  binding: z.string(),
  namespace: z.string(),
});
