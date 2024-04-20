import { z } from "zod";
import { aiSchema } from "./ai";
import { analyticsEngineDatasetsSchema } from "./analytics-engine-datasets";
import { browserSchema } from "./browser";
import { d1DatabasesSchema } from "./d1-database";
import { dispatchNamespacesSchema } from "./dispatch-namespaces";
import { durableObjectsSchema, migrationsSchema } from "./durable-object";
import { sendEmailSchema } from "./email";
import { hyperdriveSchema } from "./hyperdrive";
import { kvNamespacesSchema } from "./kv-namespaces";
import { mtlsCertificatesSchema } from "./mtls-certificates";
import { queuesSchema } from "./queues";
import { r2BucketsSchema } from "./r2-buckets";
import { serviceBindingsSchema } from "./service-bindings";
import { vectorizeSchema } from "./vectorize-indexes";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#non-inheritable-keys
export const bindingsKeysSchema = z.object({
  vars: z.record(z.any()).optional(),
  browser: browserSchema.optional(),
  d1_databases: d1DatabasesSchema.optional(),
  durable_objects: durableObjectsSchema.optional(),
  dispatch_namespaces: dispatchNamespacesSchema.optional(),
  migrations: migrationsSchema.optional(),
  send_email: sendEmailSchema.optional(),
  hyperdrive: hyperdriveSchema.optional(),
  kv_namespaces: kvNamespacesSchema.optional(),
  queues: queuesSchema.optional(),
  r2_buckets: r2BucketsSchema.optional(),
  vectorize: vectorizeSchema.optional(),
  services: serviceBindingsSchema.optional(),
  analytics_engine_datasets: analyticsEngineDatasetsSchema.optional(),
  mtls_certificates: mtlsCertificatesSchema.optional(),
  ai: aiSchema.optional(),
});
