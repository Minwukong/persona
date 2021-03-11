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

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userskeys = Object.keys(users); // => [id,password,name]
        const userInfo = userskeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name)
        users.password.push(userInfo.password);
        return { success: true };
    }
}


module.exports = UserStorage;

