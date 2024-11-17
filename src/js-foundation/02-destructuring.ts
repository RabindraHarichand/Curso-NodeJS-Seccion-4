// console.log(process.env);

const { PUBLIC, windir, TMP } = process.env;

// console.table({ PUBLIC, windir, TMP });

export const characters = ["Flash", "Superman", "Green Lantern", "Batman"];

const [, , , batman] = characters;
// console.log(batman);
