var SegundoParcial;
(function (SegundoParcial) {
    var Funciones = /** @class */ (function () {
        function Funciones() {
        }
        return Funciones;
    }());
    SegundoParcial.Funciones = Funciones;
    var divFrm;
    var frm;
    var divInfo;
    var btnCancelar;
    function filtrar() {
        var input = document.getElementById('filtro');
        var textoInput = input.value;
        var vehiculosFiltrados = clientesList.filter(function (registro) {
            if (registro.marca === textoInput) {
                return true;
            }
            else {
                return false;
            }
        });
        SegundoParcial.actualizarTabla(vehiculosFiltrados);
    }
    SegundoParcial.filtrar = filtrar;
    //Buscar el max id, sumarle 1 y retornarlo
    function devuelveId(arrayIds) {
        var MaxId = arrayIds.reduce(function (previous, current) {
        }, 0);
        return MaxId;
    }
    SegundoParcial.devuelveId = devuelveId;
})(SegundoParcial || (SegundoParcial = {}));
