import { httpClientPlugin } from "../../src/plugin/http-client.plugin";

describe("plugin/http-client.plugin.ts", () => {
  test("httpClientPlugin.get() should return a string", async () => {
    const data = await httpClientPlugin.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });
  });

  test("httpClientPlugin should have POST, PUT and DELETE methods", async () => {
    const getPost = httpClientPlugin.post;
    const getPut = httpClientPlugin.put;
    const getDelete = httpClientPlugin.delete;
    const getGet = httpClientPlugin.get;

    expect(typeof getPost).toBe("function");
    expect(typeof getPut).toBe("function");
    expect(typeof getDelete).toBe("function");
    expect(typeof getGet).toBe("function");
  });
});
