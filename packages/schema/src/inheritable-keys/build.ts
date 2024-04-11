import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#custom-builds
export const buildSchema = z.object({
  command: z.string().optional(),
  cwd: z.string().optional(),
  watch_dir: z.union([z.string(), z.array(z.string())]).optional(),
});
