"use strict";
// const { getUUID } = require("../plugin/get-uuid.plugin");
// const { getAge } = require("../plugin/get-age.plugin");
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
const buildMakePerson = ({ getUUID, getAge, }) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// const obj = { name: "John", birthdate: "1998-08-03" };
// const john = bui(obj);
// console.log(john);
