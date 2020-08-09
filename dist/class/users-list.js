"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersList = void 0;
var UsersList = /** @class */ (function () {
    function UsersList() {
        this.list = [];
    }
    UsersList.prototype.add = function (user) {
        this.list.push(user);
        return user;
    };
    UsersList.prototype.updateName = function (id, name) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id === id) {
                user.username = name;
                break;
            }
        }
    };
    UsersList.prototype.getList = function () {
        return this.list.filter(function (user) { return user.username !== 'no user'; });
    };
    UsersList.prototype.getLogged = function () {
        return this.list.filter(function (user) { return user.username !== 'no user' && user.username !== 'admin'; });
    };
    UsersList.prototype.checkifexists = function (username) {
        return this.list.filter(function (user) { return user.username == username; });
    };
    UsersList.prototype.getOrderedList = function () {
        return this.list.sort(function (a, b) { return b.points.localeCompare(a.points); });
    };
    UsersList.prototype.getUser = function (id) {
        return this.list.find(function (user) {
            return user.id === id;
        });
    };
    UsersList.prototype.increasepoints = function (username) {
        for (var i in this.list) {
            if (this.list[i].username === username) {
                this.list[i].points = String(Number(this.list[i].points) + 1);
            }
        }
    };
    UsersList.prototype.resetall = function () {
        for (var i in this.list) {
            this.list[i].points = '0';
        }
    };
    UsersList.prototype.getUserinRoom = function (room) {
        return this.list.filter(function (user) { return user.room === room; });
    };
    UsersList.prototype.deleteUser = function (id) {
        var tempUser = this.getUser(id);
        this.list = this.list.filter(function (user) {
            return user.id !== id;
        });
        return tempUser;
    };
    UsersList.prototype.delete = function (username) {
        return this.list.filter(function (user) { return user.username !== username; });
    };
    return UsersList;
}());
exports.UsersList = UsersList;
