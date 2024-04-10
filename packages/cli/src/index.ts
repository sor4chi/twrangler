import * as fs from "node:fs/promises";
import * as path from "node:path";
import { Twrangler } from "@twrangler/core";
import * as esbuild from "esbuild";
import * as pico from "picocolors";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const CONFIG_SOURCE_FILE = "wrangler.config.ts";
const CONFIG_OUTPUT_FILE = "wrangler.toml";
const MIME_TYPE = "text/javascript";
const BASE64_JS_SOURCE_PREFIX = `data:${MIME_TYPE};base64,`;

export const build = async (): Promise<void> => {
  const cwd = process.cwd();
  const configExists = await fs
    .access(CONFIG_SOURCE_FILE)
    .then(() => true)
    .catch(() => false);
  if (!configExists) {
    console.error(
      pico.red(
        `Could not find a ${CONFIG_SOURCE_FILE} file in the current directory.`,
      ),
    );
    return;
  }

  const buildedConfigOutput = await esbuild.build({
    entryPoints: [path.resolve(cwd, CONFIG_SOURCE_FILE)],
    format: "esm",
    write: false,
    bundle: true,
  });

  const configJsSource = buildedConfigOutput.outputFiles[0].text;
  const configJsSourceBase64 = Buffer.from(configJsSource).toString("base64");

  console.log(pico.yellow("Building your project..."));
  const config = await import(BASE64_JS_SOURCE_PREFIX + configJsSourceBase64);

  let twrangler: Twrangler;
  try {
    twrangler = new Twrangler(config.default);
  } catch (error) {
    console.error(pico.red("Invalid configuration!"));
    return;
  }

  const configToml = twrangler.toToml();
  await fs.writeFile(path.resolve(cwd, CONFIG_OUTPUT_FILE), configToml);

  console.log(pico.green("Successfully built your project!"));
};

const main = async () => {
  const parsed = await yargs(hideBin(process.argv))
    .command("build", `Build your project using the ${CONFIG_SOURCE_FILE} file`)
    .demandCommand(1)
    .parse();

  switch (parsed._[0]) {
    case "build":
      return build();
  }
};

main();
