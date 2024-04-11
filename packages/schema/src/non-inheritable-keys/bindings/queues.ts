import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#queues
const producersSchema = z.array(
  z.object({
    binding: z.string(),
    queue: z.string(),
    delivery_delay: z.number().optional(),
  }),
);

const consumersSchema = z.array(
  z.object({
    queue: z.string(),
    max_batch_size: z.number().optional(),
    max_batch_timeout: z.number().optional(),
    max_retries: z.number().optional(),
    dead_letter_queue: z.string().optional(),
    max_concurrency: z.number().optional(),
    retry_delay: z.number().optional(),
  }),
);

export const queuesSchema = z.object({
  producers: z.array(producersSchema).optional(),
  consumers: z.array(consumersSchema).optional(),
});
