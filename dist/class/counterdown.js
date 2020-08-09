"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterDown = void 0;
var CounterDown = /** @class */ (function () {
    function CounterDown() {
        this.list = [];
    }
    CounterDown.prototype.reboot = function () {
        this.list = [];
        this.list.push({ begin: 15 });
    };
    CounterDown.prototype.decrease = function () {
        this.list[0].begin = Number(this.list[0].begin) - 1;
    };
    CounterDown.prototype.result = function () {
        return this.list[0].begin;
    };
    CounterDown.prototype.restart = function () {
        this.list = [];
    };
    return CounterDown;
}());
exports.CounterDown = CounterDown;
