namespace SegundoParcial{

    export class Auto extends Vehiculo{

        public cantidadPuertas:number;

        constructor(id:number, marca:string, modelo:string, precio:number, cantidadPuertas:number){
            super(id, marca, modelo, precio);
            this.cantidadPuertas= cantidadPuertas;
        }

        toJson():string {
            var jsonBase:string= super.toJson();

            return jsonBase + "{cantidadPuertas: " + this.cantidadPuertas + "}"; // esto probablemente esta mal------------
        }
    }
}