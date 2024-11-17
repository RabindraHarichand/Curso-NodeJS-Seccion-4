"use strict";
// console.log(process.env);
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = void 0;
const { PUBLIC, windir, TMP } = process.env;
// console.table({ PUBLIC, windir, TMP });
exports.characters = ["Flash", "Superman", "Green Lantern", "Batman"];
const [, , , batman] = exports.characters;
// console.log(batman);
