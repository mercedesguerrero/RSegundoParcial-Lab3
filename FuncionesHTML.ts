namespace SegundoParcial{

    var clientesList:Array<Cliente> = new Array<Cliente>();



    window.onload= function inicializar(){
        //setTimeout(function(){
        // var btn= document.getElementById("btnEnviar");
        // btn.onclick= login;
        //document.getElementById('loadingDiv').style.display = 'none';

        // var cliente1:Cliente = new Cliente(1,"Mercedes", "Juarez", 35, sexo.femenino);
        // var cliente2:Cliente = new Cliente(2,"Leandro", "Holmberg", 28, sexo.masculino);
        // clientesList.push(cliente1);
        // clientesList.push(cliente2);

        var btnAlta= document.getElementById('btnAlta').addEventListener('click',crearFormulario);

        crearTabla(clientesList);
        
        //},3000);
    };

    // export function actualizarTabla(clientesFiltrados:Array<Cliente>) {

    //     clientesFiltrados.forEach(registro=>{

    //         agregarEnTabla(registro.id.toString(), registro.marca, registro.modelo, registro.precio.toString());
    //     });

    // }

    export function mostrarColumnas() {

        var id= <HTMLInputElement>document.getElementById('idCheckbox');
        var modelo= <HTMLInputElement>document.getElementById('modelCheckbox');
        var marca= <HTMLInputElement>document.getElementById('brandCheckbox');
        var precio= <HTMLInputElement>document.getElementById('priceCheckbox');

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

        if(marca.checked){
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

        if(modelo.checked){
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

        if(precio.checked){
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

    export function crearHeader(tabla, lista)
    {
        var header = document.createElement('tr');
        var theader = document.createElement('thead');
        theader.id = 'theader';

        lista[0].forEach(atributo => {
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(atributo));
            header.appendChild(th);
            // if(atributo=== "id"){
            //     th.style.display = 'none';
            // }
        });
        
        theader.appendChild(header);
        tabla.appendChild(theader);
        return crearBody(tabla,lista);
    }

    export function crearBody(tabla,lista)
    {
        var tbody = document.createElement('tbody');
        tbody.id = 'bodyTabla';
        for(var i = 0; i < lista.length; i++)
        {
            var tr = document.createElement('tr');
            var atributo;
            for(atributo in lista[i])
            {
                var td = document.createElement('td');

                td.appendChild(document.createTextNode(lista[i][atributo]));

                tr.appendChild(td);
            }
            tr.id = 'tableRow';
            tbody.appendChild(tr);
        }
        tabla.appendChild(tbody);
        return tabla;
    }

    export function crearTabla(lista) 
    {
        var tabla = document.createElement('table');
        tabla.id = "tablaLista";
        tabla = crearHeader(tabla, lista);
        document.body.appendChild(tabla);
    }

    export function actualizarTabla(respuesta)
    {
        var tbody;
        tbody= document.getElementById('bodyTabla');

        var tr = document.createElement('tr');
        var atributo;
        for(atributo in respuesta)
        {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(respuesta[atributo]));
            tr.appendChild(td);
            if(atributo=== "id"){
                td.style.display = 'none';
            }
        }
        tr.id = 'tableRow';
        tr.addEventListener('click',crearFormulario);
        tbody.appendChild(tr);
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
        var atributos:string[] = ['id','nombre','apellido', 'edad', 'sexo'];
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

            var td = document.createElement('td');

            td.appendChild(crearInputText());

            tr.appendChild(td);
            tabla.appendChild(tr);
        }
        
        agregarBotonesRow(tabla,this);
        agregarBotonEnviar(tabla,this);
        formulario.appendChild(tabla);
        document.body.appendChild(formulario);
    }

    // function crearSelect()
    // {
    //     // var labelValor = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
         
    //     var yearSelect = document.createElement('select');
    //     yearSelect.className = 'inputForm';
    //     yearSelect.id = 'yearSelect';

    //     for(var i=2000; i<2021; i++)
    //     {
    //         var option = document.createElement('option');
    //         // option.className = 'labelForm';
    //         option.innerText = i;
    //         option.value= i;
    //         // obtenerValorSelect(caller);
    //         yearSelect.appendChild(option);
    //     }
        
    //     return yearSelect;
    // }

    // function obtenerValorSelect()
    // {
        
    //     var year = document.getElementById('yearSelect');
    //     var index;
    //     var yearSelected;

    //     index = year.selectedIndex;

    //     yearSelected= year.options[index].innerText;
           
    //     return yearSelected;
    // }

    function crearInputText()
    {
        var input;
        input = document.createElement('input');
        input.type = 'text';
        input.className = 'inputForm';

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

    // function altaPersona() 
    //     {
    //         var inputs = document.getElementsByClassName('inputForm');
    //         var hayError= false;
    //         var year= obtenerValorSelect();
    //         var select= document.getElementById('yearSelect');
    
    //         inputs[0].classList.remove('error');
    //         inputs[1].classList.remove('error');
    //         select.classList.remove('error');
    
    //         if(inputs[0].value.length<3){
    //             hayError= true;
    //             inputs[0].classList.add('error');
    //         }
    //         if(inputs[1].value.length<3){
    //             hayError= true;
    //             inputs[1].classList.add('error');
    //         }
    //         if(year<2000 && year>2020){
    //             hayError= true;
    //             select.classList.add('error');
    //         }
    //         if(!hayError){
    //             var nuevaPersona = new Persona(inputs[0].value, inputs[1].value, year);
    //             guardarPersona(nuevaPersona);
    //             removerObjetos();
    //         }
        
    //     }
    
        // function eliminacionPersona() 
        // {
        //     var inputs = document.getElementsByClassName('inputForm');
        //     if(confirm("¿Desea eliminar a " + inputs[1].value +", " +inputs[2].value+"?"))
        //     {
        //         bajaPersona(inputs[0].value);
        //         removerObjetos();        
        //     }
        // }
    
    
        function cerrarForm()
        {
            document.body.removeChild(document.getElementsByClassName('contenedor')[0]);
        }
    
        function removerObjetos()
        {
            cerrarForm();
            // document.body.removeChild(document.getElementById('tablaLista'));    
        }
    
        // function eliminacionPersona() 
        // {
        //     var inputs = document.getElementsByClassName('inputForm');
        //     if(confirm("¿Desea eliminar a " + inputs[1].value +", " +inputs[2].value+"?"))
        //     {
        //         bajaPersona(inputs[0].value);
        //         removerObjetos();        
        //     }
        // }
    
        // function modificacionPersona(persona) 
        // {
        //     var turno = document.getElementById('turno');
    
        //     if (turno.checked == true){
        //         turno=true;
        //     }else{
        //         turno=false;
        //     }
    
        //     var casa;
        //     if (document.getElementById('Mañana').checked) {
        //         casa = "Mañana";
        //     }
        //     else if (document.getElementById('Tarde').checked) {
        //         casa = "Tarde";
        //     }
    
        //     var inputs = document.getElementsByClassName('inputForm');
        //     var persona = new Persona(inputs[1].value,inputs[2].value,inputs[3].value,casa, turno);
        //     persona.id = inputs[0].value;
        //     modificarPersona(persona);
        //     removerObjetos();
        // }

        // function guardarPersona(persona) 
        // {
        //     var body=
        //     {
        //         'make':persona.make,
        //         'model':persona.model,
        //         'year':persona.year
        //     };
            
        //     var url = "http://localhost:3000/nuevoAuto";
        //     xhr = new XMLHttpRequest();
        //     xhr.onreadystatechange = postManejador;
        //     xhr.open('POST',url,true);
        //     xhr.setRequestHeader("Content-Type", "application/json");
        //     xhr.send(JSON.stringify(body));
        // }
    
        // function bajaPersona(id) 
        // {
        //     var body=
        //     {
        //         'id':id
        //     }
        //     var url = "http://localhost:3000/eliminar";
        //     xhr = new XMLHttpRequest();
        //     xhr.onreadystatechange = postManejador;
        //     xhr.open('POST',url,true);
        //     xhr.setRequestHeader("Content-Type", "application/json");
        //     xhr.send(JSON.stringify(body));
        // }
    
        // function modificarPersona(persona) 
        // {
        //     var body=
        //     {
        //         'objeto':persona
        //     }
        //     var url = "http://localhost:3000/editarYear";
        //     xhr = new XMLHttpRequest();
        //     xhr.onreadystatechange = postManejador;
        //     xhr.open('POST',url,true);
        //     xhr.setRequestHeader("Content-Type", "application/json");
        //     xhr.send(JSON.stringify(body));
        // }

}