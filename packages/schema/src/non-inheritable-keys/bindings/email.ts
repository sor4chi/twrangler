import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#email-bindings
const emailSchema = z.object({
  name: z.string(),
  destination_address: z.string().optional(),
  allowed_destination_addresses: z.array(z.string()).optional(),
});

export const sendEmailSchema = z.array(emailSchema);
