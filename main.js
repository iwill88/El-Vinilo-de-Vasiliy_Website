//Funcion de Bienvenida

function bienvenida(){
    alert('Bienvenido a "El Vinilo de Vasiliy"!');
    alert("Te invitamos a registrarte para que puedas empezar esta aventura!");
}

bienvenida();

//Registro y validaciones

let nombres=prompt("Ingrese sus nombres: ");
validarNombres();
let apellidos=prompt("Ingrese sus apellidos: ");
validarApellidos();
let correoElectronico=prompt("Ingrese su correo electronico: ");
validarCorreo();
const cliente1 = new Cliente(nombres,apellidos,correoElectronico);
console.log(cliente1);

//Funciones de Validacion 

function validarNombres() {
    while (nombres ==""){
        alert("No ha ingresado sus nombres!");
        nombres=prompt("Ingrese sus nombres: ");
}
}

function validarApellidos() {
    while (apellidos ==""){
        alert("No ha ingresado sus apellidos!");
        apellidos=prompt("Ingrese sus apellidos: ");
    }
}

function validarCorreo() {
    while (correoElectronico ==""){
        alert("No ha ingresado su correo electronico!");
        correoElectronico=prompt("Ingrese su correo eletronico: ");
    }
}

function validarIngreso() {
    while ((seleccion1 ===null)||(seleccion1 == "")){
        alert("Ingrese una opcion valida!");
        seleccion1 = prompt(salida1);
    }
}

function validarIngreso3() {
    while ((seleccion ===null)||(seleccion == "")){
        alert("Ingrese una opcion valida!");
        seleccion = prompt(salida);
    }
}

function validarIngreso2() {
    while ((respuestaBuscador ===null)||(respuestaBuscador == "")){
        alert("El campo esta vacio!");
        respuestaBuscador = prompt("Escriba el nombre del vinilo que quiera comprar");
    }
}

//Insertamos los datos del Nuevo Cliente al Array baseClientes

const nuevoCliente = new Cliente(nombres,apellidos,correoElectronico);
baseClientes.push(nuevoCliente);
console.log(baseClientes);

let seleccion ="";
let seleccion1 ="";
let salida1 = "Hola " + nombres + " " + apellidos + "!" + "Elige una de las siguientes opciones: \n\n 1. Ir al buscador (solo podras comprar lo que encuentres en la búsqueda) \n 2. Ir al menu principal"
function mensajeDescuento () {
    alert("Promocion especial! \n\nTendrás un descuento del 5% por la compra de 3 vinilos o más!");
}
    

//Solicitamos ingresar una opcion de "buscar productos" o "menu principal"

seleccion1 = prompt(salida1);
validarIngreso();
if (seleccion1 ==1) {
    respuestaBuscador = prompt("Escriba el nombre del vinilo que quiera comprar");
    validarIngreso2();
    arrayBusqueda = vinilosLista.filter((valor) => valor.nombre.includes(respuestaBuscador));
    console.log(arrayBusqueda);
    
  
} 

let salida = "Hola " + nombres + " " + apellidos + "!" + " Elige cualquiera de nuestros vinilos:\n\n";

if(seleccion1==1){
    mensajeDescuento();
    for (let producto of arrayBusqueda) {
        salida += "Id: " + producto.id + "- Nombre: " + producto.nombre + "- Precio: S/." + producto.precio + "\n";
    } 
    salida += "a - Finalizar compra \nb - Cancelar compra";
    compraViniloBusqueda();
} else if (seleccion1==2){
    mensajeDescuento();
    for (let producto of vinilosLista) {
        salida +=  "Id: " + producto.id + "- Nombre: " + producto.nombre + "- Precio: S/." + producto.precio + "\n";
    }
    salida += "a - Finalizar compra \nb - Cancelar compra";
    compraVinilo();
}

    



let total_pagar = 0;

//Funcion de compra de vinilos menu principal

function compraVinilo() {
    while (seleccion != "a"||"b") {
        seleccion = prompt(salida);
        validarIngreso3();
        if ((seleccion ===null)||(seleccion == "a")) {
            break;
        }
    
        if (seleccion !="b"){
            producto_encontrado = vinilosLista.find((valor) => valor.id == seleccion);
            if (producto_encontrado != 0) {
                let producto_lista = new Producto(producto_encontrado.id, producto_encontrado.nombre, producto_encontrado.precio);
                productosSeleccionados.push(producto_lista);
                console.log("Agregarse al Carrito: " + producto_lista.nombre + " (S/." + producto_lista.precio + ")");
            }
        }
        if (seleccion == "b"){
            alert("Se ha cancelado la compra");
            alert("Usted esta saliendo de la pagina");
            break;
        }
            
    }
}

//Funcion de compra de vinilos por busqueda

function compraViniloBusqueda() {
    while (seleccion != "a"||"b") {
        seleccion = prompt(salida);
        validarIngreso3();
        if ((seleccion ===null)||(seleccion == "a")) {
            break;
        }
    
        if (seleccion !="b"){
            producto_encontrado = arrayBusqueda.find((valor) => valor.id == seleccion);
            if (producto_encontrado != 0) {
                let producto_lista = new Producto(producto_encontrado.id, producto_encontrado.nombre, producto_encontrado.precio);
                productosSeleccionados.push(producto_lista);
                console.log("Agregarse al Carrito: " + producto_lista.nombre + " (S/." + producto_lista.precio + ")");
            }
        }
        if (seleccion == "b"){
            alert("Se ha cancelado la compra");
            alert("Usted esta saliendo de la pagina");
            break;
        }
            
    }
}

console.log(productosSeleccionados);



//Calcular el Total a Pagar

for (let producto of productosSeleccionados) {
    console.log("Producto: " + producto.nombre);
    console.log("Precio original: S/." + producto.precio);
    producto.aplicarIGV();
    console.log("Precio con IGV: S/." + producto.precio);
    

    // Si la compra es mayor a 3 productos se aplicara un descuento

    if (productosSeleccionados.length > 2) {
        producto.aplicarDescuento();
        console.log("Precio con Descuento: S/." + producto.precio);
    }

    total_pagar += producto.precio;
}

//Se elabora el mensaje final de Compra

let mensaje = "";
let numero_compra=0;

for (let producto of productosSeleccionados) {
    numero_compra+=1
    mensaje +=  numero_compra + " - Nombre: " + producto.nombre + " - Precio: S/." + producto.precio + "\n";
}

if (seleccion == "a") {
    alert("Los productos que ha seleccionado son: \n\n" +  mensaje);
    alert("El Total a Pagar es: S/." + total_pagar);
    alert("Muchas gracias por su compra!")
} 

  
//Git
