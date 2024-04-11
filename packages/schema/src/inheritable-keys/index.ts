import { z } from "zod";
import { buildSchema } from "./build";
import {
  compatibilityDateSchema,
  compatibilityFlagsSchema,
} from "./capability";
import { limitsSchema } from "./limits";
import { routeSchema, routesSchema } from "./route";
import { rulesSchema } from "./rule";
import { triggersSchema } from "./trigger";

export const inheritableKeysSchema = z.object({
  name: z.string(),
  main: z.string(),
  compatibility_date: compatibilityDateSchema,
  account_id: z.string().optional(),
  compatibility_flags: compatibilityFlagsSchema.optional(),
  workers_dev: z.boolean().optional(),
  route: routeSchema.optional(),
  routes: routesSchema.optional(),
  tsconfig: z.string().optional(),
  triggers: triggersSchema.optional(),
  rules: rulesSchema.optional(),
  build: buildSchema.optional(),
  no_bundle: z.boolean().optional(),
  minify: z.boolean().optional(),
  node_compat: z.boolean().optional(),
  preserve_file_names: z.boolean().optional(),
  send_metrics: z.boolean().optional(),
  keep_vars: z.boolean().optional(),
  logpush: z.boolean().optional(),
  limits: limitsSchema.optional(),
});
