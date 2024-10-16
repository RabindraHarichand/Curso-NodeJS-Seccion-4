// const { getUUID } = require("../plugin/get-uuid.plugin");
// const { getAge } = require("../plugin/get-age.plugin");

// const { getAge, getUUID } = require("../plugin/index");
const buildMakePerson = ({ getUUID, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

// const obj = { name: "John", birthdate: "1998-08-03" };

// const john = buildPerson(obj);

// console.log(john);

module.exports = {
  buildMakePerson,
};
