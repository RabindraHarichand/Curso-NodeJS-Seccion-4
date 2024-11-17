import { getUUID } from "../../src/plugin/get-uuid.plugin";

describe("plugin/get-uuid.plugin.ts", () => {
  test("get UUID() should return a UUID", () => {
    const uuid = getUUID();

    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});
