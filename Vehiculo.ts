namespace SegundoParcial{

    export class Vehiculo{

        public id:number;
        public marca:string;
        public modelo:string; 
        public precio:number;

        constructor(id:number,marca:string,modelo:string,precio:number){
            this.id= id;
            this.marca= marca;
            this.modelo= modelo;
            this.precio=precio;
        } 
    
    
        toJson():string {

            return "{id: " + this.id + "," + 
                    "marca: " + this.marca + "," +
                    "modelo: " + this.modelo + "," +
                    "precio" + this.precio + "}";
        }
    }

}
