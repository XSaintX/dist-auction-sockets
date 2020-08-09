"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraficaData = void 0;
var GraficaData = /** @class */ (function () {
    function GraficaData() {
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.valores = [1, 2, 3, 4];
    }
    GraficaData.prototype.getDataGrafica = function () {
        return [
            { data: this.valores, label: 'Ventas' }
        ];
    };
    GraficaData.prototype.incrementarValor = function (mes, valor) {
        //mes = mes.toLowerCase().trim();
        for (var i in this.months) {
            if (this.months[i] === mes) {
                this.valores[i] += valor;
            }
        }
        return this.getDataGrafica();
    };
    return GraficaData;
}());
exports.GraficaData = GraficaData;
