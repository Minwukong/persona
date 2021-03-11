"use strict";

class UserStorage {
    static #users = {
        id: ["minjun","챕챕","민준","1"],
        password: ["1234","1234","12345","2"],
        name: ["민준","채빈","민준이","숫자"]
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;

