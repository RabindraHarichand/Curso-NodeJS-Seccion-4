// const { getUUID } = require("../plugin/get-uuid.plugin");
// const { getAge } = require("../plugin/get-age.plugin");

// const { getAge, getUUID } = require("../plugin/index");

interface BuildMakePersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number;
}

interface PersonOptions {
  name: string;
  birthdate: string;
}

export const buildMakePerson = ({
  getUUID,
  getAge,
}: BuildMakePersonOptions) => {
  return ({ name, birthdate }: PersonOptions) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: "John", birthdate: "1998-08-03" };

// const john = bui(obj);

// console.log(john);
