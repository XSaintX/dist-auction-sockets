"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContadorRegresivo = void 0;
var ContadorRegresivo = /** @class */ (function () {
    function ContadorRegresivo() {
        this.list = [];
    }
    ContadorRegresivo.prototype.reboot = function () {
        this.list = [];
        this.list.push({ inicio: 15 });
        //return this.list;
    };
    ContadorRegresivo.prototype.decrease = function () {
        this.list[0].inicio = Number(this.list[0].inicio) - 1;
    };
    ContadorRegresivo.prototype.result = function () {
        return this.list[0].inicio;
    };
    return ContadorRegresivo;
}());
exports.ContadorRegresivo = ContadorRegresivo;
