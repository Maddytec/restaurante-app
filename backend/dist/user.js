"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    return User;
}());
exports.User = User;
exports.users = {
    'madson.silva@maddytec.com.br': new User('madson.silva@maddytec.com.br', 'Madson Silva', 'madson12'),
    'madson@maddytec.com.br': new User('madson@maddytec.com.br', 'Madson Araujo', 'madson1234')
};
