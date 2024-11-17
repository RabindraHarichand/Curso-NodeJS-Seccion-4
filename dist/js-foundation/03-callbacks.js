"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = getUserById;
const users = [
    {
        id: 1,
        name: "John Doe",
    },
    {
        id: 2,
        name: "Jane Doe",
    },
];
function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        setTimeout(() => {
            callback(`USUARIO NO ENCONTRADO ${id}`);
        }, 2500);
        return;
    }
    return callback(undefined, user);
}
