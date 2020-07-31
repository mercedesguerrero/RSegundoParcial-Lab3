var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SegundoParcial;
(function (SegundoParcial) {
    var Auto = /** @class */ (function (_super) {
        __extends(Auto, _super);
        function Auto(id, marca, modelo, precio, cantidadPuertas) {
            var _this = _super.call(this, id, marca, modelo, precio) || this;
            _this.cantidadPuertas = cantidadPuertas;
            return _this;
        }
        Auto.prototype.toJson = function () {
            var jsonBase = _super.prototype.toJson.call(this);
            return jsonBase + "{cantidadPuertas: " + this.cantidadPuertas + "}"; // esto probablemente esta mal------------
        };
        return Auto;
    }(SegundoParcial.Vehiculo));
    SegundoParcial.Auto = Auto;
})(SegundoParcial || (SegundoParcial = {}));
