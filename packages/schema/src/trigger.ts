import { z } from "zod";

export const triggersSchema = z.object({
  crons: z.array(z.string()),
});
