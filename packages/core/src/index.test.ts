import dedent from "dedent";
import { Twrangler } from ".";

describe("Twrangler", () => {
  describe("create instance", () => {
    it("should load a valid config", () => {
      const rawConfig = {
        name: "my-project",
        main: "src/index.ts",
        compatibility_date: "2022-03-21",
      };
      const twrangler = new Twrangler(rawConfig);
      expect(twrangler.config).toEqual(rawConfig);
    });

    it("should throw an error if the config is invalid", () => {
      const rawConfig = {
        name: 123,
      };
      expect(() => new Twrangler(rawConfig)).toThrowError();
    });
  });

  describe("toToml", () => {
    it("should return a valid TOML string", () => {
      const rawConfig = {
        name: "my-project",
        main: "src/index.ts",
        compatibility_date: "2022-03-21",
      };
      const twrangler = new Twrangler(rawConfig);
      expect(twrangler.toToml().trim()).toEqual(dedent`
        name = "my-project"
        main = "src/index.ts"
        compatibility_date = "2022-03-21"
      `);
    });
  });
});
