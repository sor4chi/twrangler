import { z } from "zod";

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#custom-domains
const customDomainsItemSchema = z.object({
  pattern: z.string(),
  custom_domain: z.boolean().optional(),
});

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#zone-id-route
const zoneIdRouteItemSchema = z.object({
  pattern: z.string(),
  zone_id: z.string(),
});

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#zone-name-route
const zoneNameRouteItemSchema = z.object({
  pattern: z.string(),
  zone_name: z.string(),
});

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#simple-route
const simpleRouteItemSchema = z.string();

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#types-of-routes
export const routeSchema = z.union([
  customDomainsItemSchema,
  zoneIdRouteItemSchema,
  zoneNameRouteItemSchema,
  simpleRouteItemSchema,
]);

// ref: https://developers.cloudflare.com/workers/wrangler/configuration/#types-of-routess
export const routesSchema = z.union([
  z.array(customDomainsItemSchema),
  z.array(zoneIdRouteItemSchema),
  z.array(zoneNameRouteItemSchema),
  z.array(simpleRouteItemSchema),
]);
