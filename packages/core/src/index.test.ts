import { Twrangler } from ".";

describe("Twrangler", () => {
  describe("create instance", () => {
    it("should load a valid config", () => {
      const rawConfig = {
        name: "my-project",
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
      };
      const twrangler = new Twrangler(rawConfig);
      expect(twrangler.toToml()).toEqual(`name = "my-project"\n`);
    });
  });
});
