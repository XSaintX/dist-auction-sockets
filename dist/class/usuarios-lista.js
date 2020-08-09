"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
var UsuariosLista = /** @class */ (function () {
    function UsuariosLista() {
        this.list = [];
    }
    UsuariosLista.prototype.add = function (user) {
        this.list.push(user);
        console.log(this.list);
        return user;
    };
    UsuariosLista.prototype.updateName = function (id, name) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.id === id) {
                user.username = name;
                break;
            }
        }
    };
    //obtener lista de usuarios
    UsuariosLista.prototype.getLista = function () {
        //return this.list;
        return this.list.filter(function (usuario) { return usuario.username !== 'no user'; });
    };
    UsuariosLista.prototype.getLogged = function () {
        //return this.list;
        return this.list.filter(function (usuario) { return usuario.username !== 'no user' && usuario.username !== 'admin'; });
    };
    UsuariosLista.prototype.getListaOrdenada = function () {
        //return this.list;
        return this.list.sort(function (a, b) { return b.points.localeCompare(a.points); });
    };
    UsuariosLista.prototype.getUsuario = function (id) {
        return this.list.find(function (usuario) {
            return usuario.id === id;
        });
    };
    UsuariosLista.prototype.aumentarpuntos = function (username) {
        for (var i in this.list) {
            if (this.list[i].username === username) {
                this.list[i].points = String(Number(this.list[i].points) + 1);
            }
        }
    };
    UsuariosLista.prototype.resetall = function () {
        for (var i in this.list) {
            this.list[i].points = '0';
        }
    };
    UsuariosLista.prototype.getUserinRoom = function (room) {
        return this.list.filter(function (user) { return user.room === room; });
    };
    UsuariosLista.prototype.deleteUser = function (id) {
        var tempUser = this.getUsuario(id);
        this.list = this.list.filter(function (usuario) {
            return usuario.id !== id;
        });
        return tempUser;
    };
    return UsuariosLista;
}());
exports.UsuariosLista = UsuariosLista;
