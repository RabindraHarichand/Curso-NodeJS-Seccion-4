import { emailTemplate } from "../../src/js-foundation/01-template";

describe("js-foundation/01-template.ts", () => {
  test("emailTemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });

  test("emailTemplate should contain Gracias and orden", () => {
    expect(emailTemplate).toMatch(/Gracias/);
    expect(emailTemplate).toMatch(/orden/);

    expect(emailTemplate).toContain("Gracias");
    expect(emailTemplate).toContain("orden");
  });
});
