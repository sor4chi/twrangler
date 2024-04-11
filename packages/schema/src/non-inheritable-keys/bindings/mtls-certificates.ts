import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#mtls-certificates
export const mtlsCertificatesSchema = z.array(
  z.object({
    binding: z.string(),
    certificate_id: z.string(),
  }),
);
