import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#bundling
const ruleSchema = z.object({
  type: z.enum(["ESModule", "CommonJS", "CompiledWasm", "Text", "Data"]),
  globs: z.array(z.string()),
  fallthrough: z.boolean().optional(),
});

export const rulesSchema = z.array(ruleSchema);
