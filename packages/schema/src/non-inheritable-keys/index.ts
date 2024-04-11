import { z } from "zod";

import { bindingsKeysSchema } from "./bindings";

export const nonInheritableKeysSchema = bindingsKeysSchema.extend({
  define: z.record(z.string()).optional(),
});
