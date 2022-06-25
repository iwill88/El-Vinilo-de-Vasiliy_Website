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

//Funciones de Validacion Registro

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

//Insertamos los datos del Nuevo Cliente al Array baseClientes

const nuevoCliente = new Cliente(nombres,apellidos,correoElectronico);
baseClientes.push(nuevoCliente);
console.log(baseClientes);

let seleccion ="";
let salida = "Hola " + nombres + " " + apellidos + "!" + " Elige cualquiera de nuestros vinilos:\n\n";

for (let producto of vinilosLista) {
    salida +=  producto.id + " - Nombre: " + producto.nombre + " - Precio: S/." + producto.precio + "\n";
}

salida += "6 - Finalizar compra \n7 - Cancelar compra";

let total_pagar = 0;

while (seleccion != 6 || 7) {
    seleccion = prompt(salida);

    if ((seleccion ===null)||(seleccion == 6)) {
        
        break;
        
    }


    let producto_encontrado = buscarProducto(seleccion);

    if (producto_encontrado != 0) {
        let producto_lista = new Producto(producto_encontrado.id, producto_encontrado.nombre, producto_encontrado.precio);
        productosSeleccionados.push(producto_lista);
        console.log("Agregarse al Carrito: " + producto_lista.nombre + " (S/." + producto_lista.precio + ")");
    }

    if (seleccion == 7){
        alert("Se ha cancelado la compra");
        alert("Usted esta saliendo de la pagina");
        break;
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

    if (productosSeleccionados.length > 3) {
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

if (seleccion == 6) {
    alert("Los productos que ha seleccionado son: \n\n" +  mensaje);
    alert("El Total a Pagar es: S/." + total_pagar);
    alert("Muchas gracias por su compra!")
} 

  
//Git
