import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("js-foundation/03-callbacks", () => {
  test("getUserById should return an error if user does not exist", (done) => {
    const id = 10;

    getUserById(id, (err, user) => {
      expect(err).toBe(`USUARIO NO ENCONTRADO ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test("gestUserById should return John Doe", (done) => {
    const id = 1;
    const testUser = {
      id: 1,
      name: "John Doe",
    };

    getUserById(id, (err, user) => {
      expect(err).toBeUndefined();
      expect(user).toStrictEqual(testUser);
    });

    done();
  });
});
