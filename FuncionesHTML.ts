namespace SegundoParcial{

    var clientesList:Array<Cliente> = new Array<Cliente>();
    var atributos:string[] = ['id','nombre','apellido', 'edad', 'genero'];

    let divFrm;
    let frm;
    let divInfo;
    let btnCancelar;


    window.onload= function inicializar(){
        setTimeout(function(){
        // var btn= document.getElementById("btnEnviar");
        // btn.onclick= login;
        document.getElementById('loadingDiv').style.display = 'none';

        var cliente1:Cliente = new Cliente(1,"Mercedes", "Juarez", 35, sexo.femenino);
        var cliente2:Cliente = new Cliente(2,"Leandro", "Holmberg", 28, sexo.masculino);
        clientesList.push(cliente1);
        clientesList.push(cliente2);

        // var btnAlta= 
        document.getElementById('btnAlta').addEventListener('click',crearFormulario);
        document.getElementById("idCheckbox").addEventListener('change', mostrarColumnas);
        document.getElementById("nombreCheckbox").addEventListener('change', mostrarColumnas);
        document.getElementById("apellidoCheckbox").addEventListener('change', mostrarColumnas);
        document.getElementById("edadCheckbox").addEventListener('change', mostrarColumnas);
        document.getElementById("sexoCheckbox").addEventListener('change', mostrarColumnas);

        crearTabla();
        
        },2000);
    };

    export function mostrarTablaFiltrada(clientesFiltrados:Array<Cliente>) {

        clientesFiltrados.forEach(cliente=>{

            //cliente.id.toString(), cliente.nombre, cliente.apellido, cliente.edad.toString(), cliente.sexo

            actualizarTabla(cliente);
        });

    }

    export function crearTabla() 
    {
        var tabla = document.createElement('table');
        tabla.id = "tablaLista";
        tabla = crearHeader(tabla);
        document.body.appendChild(tabla);
    }

    export function crearHeader(tabla)
    {
        var header = document.createElement('tr');
        var theader = document.createElement('thead');
        theader.id = 'theader';

        atributos.forEach(atributo => {
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(atributo));
            header.appendChild(th);
            // if(atributo=== "id"){
            //     th.style.display = 'none';
            // }
        });
        
        theader.appendChild(header);
        tabla.appendChild(theader);
        return crearBody(tabla);
    }

    export function crearBody(tabla)
    {
        var tbody = document.createElement('tbody');
        tbody.id = 'bodyTabla';

        clientesList.forEach(cliente => {

            var tr = document.createElement('tr');

            atributos.forEach(atributo => {

                var td = document.createElement('td');

                if(atributo == 'genero'){

                    td.appendChild(document.createTextNode(sexo[cliente.sexo]));

                }else{

                    td.appendChild(document.createTextNode(cliente[atributo]));
                }
                tr.appendChild(td);
            });

            tr.id = 'tableRow';
            tr.addEventListener('click',crearFormulario);
            tbody.appendChild(tr);     
        });
        
        tabla.appendChild(tbody);
        return tabla;
    }

    export function actualizarTabla(cliente)
    {
        var tbody;
        tbody= document.getElementById('bodyTabla');

        var tr = document.createElement('tr');
        var atributo;
        for(atributo in cliente)
        {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(cliente[atributo]));
            tr.appendChild(td);
        }
        tr.id = 'tableRow';
        tr.addEventListener('click',crearFormulario);
        tbody.appendChild(tr);
    }

    export function mostrarColumnas() {

        var id= <HTMLInputElement>document.getElementById('idCheckbox');
        var nombre= <HTMLInputElement>document.getElementById('nombreCheckbox');
        var apellido= <HTMLInputElement>document.getElementById('apellidoCheckbox');
        var edad= <HTMLInputElement>document.getElementById('edadCheckbox');
        var sexo= <HTMLInputElement>document.getElementById('sexoCheckbox');

        if(id.checked){
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= false;
            });
        }else{
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= true;
            });
        }

        if(apellido.checked){
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= false;
            });
        }else{
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= true;
            });
        }

        if(nombre.checked){
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= false;
            });
        }else{
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= true;
            });
        }

        if(edad.checked){
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= false;
            });
        }else{
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= true;
            });
        }

        if(sexo.checked){
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= false;
            });
        }else{
            var columIds= document.getElementsByName('');
            columIds.forEach(registro=>{
                registro.hidden= true;
            });
        }
        
    }

    export function filtrar() {

        var input= <HTMLInputElement>document.getElementById('filtro');
        var textoInput:string = input.value;

        var listaFiltrada:Array<Cliente> = clientesList.filter(function(cliente){

            if(cliente.nombre === textoInput){
                return true;
            }else{
                return false;
            }
        });

        mostrarTablaFiltrada(listaFiltrada);
        
    }

    

    //Buscar el max id, sumarle 1 y retornarlo
    export function devuelveId() {

        var MaxId = clientesList.reduce(function(previous, current){

            if(previous< current.id){
                return current.id;
            }else{
                return previous;
            }

        },0);

        return MaxId +1;
        
    }

    // function consultarFormExistente()
    // {
    //     document.body.children.forEach(hijos => {

    //         if(hijos.className == 'frm')
    //         {
    //             return 0;
    //         }
            
    //     });
    // }

    function crearFormulario()
    {
        var formulario = document.createElement('form');
        formulario.className = 'contenedor';
        var tabla = document.createElement('table');
        var i;
        for(i = 0; i< atributos.length; i++)
        {
            var tr = document.createElement('tr');
            var label = document.createElement('label');
            label.className = 'labelForm';
            label.innerText = atributos[i];

            var td = document.createElement('td');
            td.appendChild(label);
            tr.appendChild(td);

            var tdInput = document.createElement('td');

            if(atributos[i]== 'id'){

                tdInput.appendChild(crearInputText(true));
                
            }else{

                tdInput.appendChild(crearInputText());
            }

            tr.appendChild(tdInput);

            tabla.appendChild(tr);
        }
        
        agregarBotonesRow(tabla,this);
        agregarBotonEnviar(tabla,this);
        formulario.appendChild(tabla);
        document.body.appendChild(formulario);
    }

    function crearInputText(isId?)
    {
        var input;
        input = document.createElement('input');
        input.type = 'text';
        input.className = 'inputForm';

        if(isId){
            input.disabled = true;
        }

        return input;
    }

    function agregarBotonEnviar(tabla,caller)
    {
        if(caller.id == 'btnAlta')
        {
            var tr = document.createElement('tr');
            var Enviar = document.createElement('button');
            Enviar.innerText = 'Guardar';
            Enviar.type = 'button';
            Enviar.classList.add('btnForm');
            Enviar.classList.add('btnGuardar');
            Enviar.addEventListener('click',altaPersona);
            var td = document.createElement('td');
            td.appendChild(Enviar);
            tr.appendChild(td);
            agregarBotonCancelar(tabla,tr);
            tabla.appendChild(tr);
        }
    }

    function agregarBotonesRow(tabla, caller)
    {
        if(caller.id == 'tableRow')
        {
            var botones = ["Eliminar","Modificar","Cancelar"];
            var tr = document.createElement('tr');

            for(var i = 0 ; i<botones.length;i++)
            {
                var boton = document.createElement('button');
                boton.innerText = botones[i];
                boton.type = 'button';
                boton.className = 'btnForm';
                if(i == 0)
                {
                    boton.addEventListener('click',eliminacionPersona);
                }
                else if(i==1)
                {
                    boton.addEventListener('click',modificacionPersona);
                }
                else
                {
                    boton.addEventListener('click',cerrarForm);
                }
                var td = document.createElement('td');
                td.appendChild(boton);
                tr.appendChild(td);
            }

            tabla.appendChild(tr);
        }
    }

    function agregarBotonCancelar(tabla,tr)
    {
        var Cancelar = document.createElement('button');
        Cancelar.innerText = 'Cancelar';
        Cancelar.type = 'button';
        Cancelar.classList.add('btnForm');
        Cancelar.classList.add('btnCancelar');
        Cancelar.addEventListener('click',cerrarForm);
        var td = document.createElement('td');
        td.appendChild(Cancelar);
        tr.appendChild(td);
    }

    function altaPersona() 
    {
        var inputs = document.getElementsByClassName('inputForm');
        
        var nuevaPersona:Cliente = new Cliente(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        
        clientesList.push(nuevaPersona);

        actualizarTabla(nuevaPersona);
        removerObjetos();    
    }
    
        
        function cerrarForm()
        {
            document.body.removeChild(document.getElementsByClassName('contenedor')[0]);
        }
    
        function removerObjetos()
        {
            cerrarForm();
            // document.body.removeChild(document.getElementById('tablaLista'));    
        }
    
        function eliminacionPersona() 
        {
            var inputs = document.getElementsByClassName('inputForm');
            if(confirm("¿Desea eliminar a " + inputs[1].value +", " + inputs[2].value+"?"))
            {
                //bajaPersona(inputs[0].value);
                removerObjetos();        
            }
        }
    
        function modificacionPersona(persona) 
        {
            var turno = document.getElementById('turno');
    
            // if (turno.checked == true){
            //     turno=true;
            // }else{
            //     turno=false;
            // }
    
            // var casa;
            // if (document.getElementById('Mañana').checked) {
            //     casa = "Mañana";
            // }
            // else if (document.getElementById('Tarde').checked) {
            //     casa = "Tarde";
            // }
    
            // var inputs = document.getElementsByClassName('inputForm');
            // var persona = new Persona(inputs[1].value,inputs[2].value,inputs[3].value,casa, turno);
            // persona.id = inputs[0].value;
            //modificarPersona(persona);
            removerObjetos();
        }

        
    
        
    
        

}