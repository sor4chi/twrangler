import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#d1-databases
const d1DatabaseSchema = z.object({
  binding: z.string(),
  database_name: z.string(),
  database_id: z.string(),
  preview_database_id: z.string().optional(),
});

export const d1DatabasesSchema = z.array(d1DatabaseSchema);
