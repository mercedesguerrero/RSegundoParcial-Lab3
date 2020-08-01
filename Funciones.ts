namespace SegundoParcial{
    
    export class Funciones{
        
        let divFrm;
        let frm;
        let divInfo;
        let btnCancelar;

        
        

        export function filtrar() {

            var input= <HTMLInputElement>document.getElementById('filtro');
            var textoInput:string = input.value;

            var vehiculosFiltrados:Array<Vehiculo> = clientesList.filter(function(registro){

                if(registro.marca === textoInput){
                    return true;
                }else{
                    return false;
                }
            });

            actualizarTabla(vehiculosFiltrados);
            
        }

        

        //Buscar el max id, sumarle 1 y retornarlo
        export function devuelveId(arrayIds) {

            var MaxId = arrayIds.reduce(function(previous, current){

            },0);

            return MaxId;
            
        }
    
        
    

        
    }
}