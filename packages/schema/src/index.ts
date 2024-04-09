import { z } from "zod";

export const configSchema = z.object({
  // ref: https://developers.cloudflare.com/workers/wrangler/configuration/#inheritable-keys
  name: z.string({
    required_error: '"name" field is required',
  }),
  // ref: https://developers.cloudflare.com/workers/wrangler/configuration/#inheritable-keys
  main: z.string({
    required_error: '"main" field is required',
  }),
  // ref: https://developers.cloudflare.com/workers/configuration/compatibility-dates
  compatibility_date: z.union([
    z.literal("2024-04-29"),
    z.literal("2024-04-03"),
    z.literal("2024-04-01"),
    z.literal("2024-03-26"),
    z.literal("2024-03-18"),
    z.literal("2024-03-04"),
    z.literal("2023-12-01"),
    z.literal("2023-11-08"),
    z.literal("2023-08-15"),
    z.literal("2023-08-01"),
    z.literal("2023-03-14"),
    z.literal("2023-03-01"),
    z.literal("2022-11-30"),
    z.literal("2022-10-31"),
    z.literal("2022-08-04"),
    z.literal("2022-06-01"),
    z.literal("2022-04-05"),
    z.literal("2022-03-21"),
    z.literal("2022-03-08"),
    z.literal("2022-01-31"),
    z.literal("2021-11-10"),
    z.literal("2021-11-03"),
  ]),
  // ref: // ref: https://developers.cloudflare.com/workers/wrangler/configuration/#inheritable-keys
  account_id: z.string().optional(),
  // ref: https://developers.cloudflare.com/workers/configuration/compatibility-dates/#compatibility-flags
  compatibility_flags: z
    .array(
      z.union([
        z.literal("brotli_content_encoding"),
        z.literal("no_brotli_content_encoding"),
        z.literal("rpc"),
        z.literal("unwrap_custom_thenables"),
        z.literal("no_unwrap_custom_thenables"),
        z.literal("fetcher_no_get_put_delete"),
        z.literal("fetcher_has_get_put_delete"),
        z.literal("queues_json_messages"),
        z.literal("no_queues_json_messages"),
        z.literal("no_global_importscripts"),
        z.literal("global_importscripts"),
        z.literal("nodejs_als"),
        z.literal("no_nodejs_als"),
        z.literal("crypto_preserve_public_exponent"),
        z.literal("no_crypto_preserve_public_exponent"),
        z.literal("vectorize_query_metadata_optional"),
        z.literal("vectorize_query_original"),
        z.literal("web_socket_compression"),
        z.literal("no_web_socket_compression"),
        z.literal("strict_crypto_checks"),
        z.literal("no_strict_crypto_checks"),
        z.literal("strict_compression_checks"),
        z.literal("no_strict_compression_checks"),
        z.literal("response_redirect_url_standard"),
        z.literal("response_redirect_url_original"),
        z.literal("dynamic_dispatch_tunnel_exceptions"),
        z.literal("dynamic_dispatch_treat_exceptions_as_500"),
        z.literal("http_headers_getsetcookie"),
        z.literal("no_http_headers_getsetcookie"),
        z.literal("streams_enable_constructors"),
        z.literal("streams_disable_constructors"),
        z.literal("transformstream_enable_standard_constructor"),
        z.literal("transformstream_disable_standard_constructor"),
        z.literal("export_commonjs_default"),
        z.literal("export_commonjs_namespace"),
        z.literal("capture_async_api_throws"),
        z.literal("do_not_capture_async_api_throws"),
        z.literal("url_standard"),
        z.literal("url_original"),
        z.literal("r2_list_honor_include"),
        z.literal("dont_substitute_null_on_type_error"),
        z.literal("substitute_null_on_type_error"),
        z.literal("minimal_subrequests"),
        z.literal("no_minimal_subrequests"),
        z.literal("global_navigator"),
        z.literal("no_global_navigator"),
        z.literal("no_cots_on_external_fetch"),
        z.literal("cots_on_external_fetch"),
        z.literal("workers_api_getters_setters_on_prototype"),
        z.literal("workers_api_getters_setters_on_instance"),
        z.literal("durable_object_fetch_requires_full_url"),
        z.literal("durable_object_fetch_allows_relative_url"),
        z.literal("fetch_refuses_unknown_protocols"),
        z.literal("fetch_treats_unknown_protocols_as_http"),
        z.literal("streams_byob_reader_detaches_buffer"),
        z.literal("streams_byob_reader_does_not_detach_buffer"),
        z.literal("formdata_parser_supports_files"),
        z.literal("formdata_parser_converts_files_to_strings"),
        z.literal("html_rewriter_treats_esi_include_as_void_tag"),
      ]),
    )
    .optional(),
  // ref: https://developers.cloudflare.com/workers/wrangler/configuration/#inheritable-keys
  workers_dev: z.boolean().optional(),
});

export type Config = z.infer<typeof configSchema>;

export function defineConfig(config: Config): Config {
  return config;
}
