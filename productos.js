//Defino el Array de Vinilos disponibles en Tienda

const vinilosLista = [
    {id:1,nombre:'"Led Zeppelin-III"',precio:160, imagen:"./Imagenes/Discos/Led-Zeppelin-III.jpg"},
    {id:2,nombre:'"Led Zeppelin-Houses of the Holy"',precio:150, imagen:"./Imagenes/Discos/Led-Zeppelin_Houses-of-the-Holy.jpg" },
    {id:3,nombre:'"Black Sabbath-Black Sabbath"',precio:140, imagen:"./Imagenes/Discos/Black-Sabbath_Black-Sabbath.jpg" },
    {id:4,nombre:'"Black Sabbath-Sabbath Bloody Sabbath"',precio:130, imagen:"./Imagenes/Discos/Black-Sabbath_Sabbath-Bloody-Sabbath.jpg" },
    {id:5,nombre:'"Gun N Roses-Appetite For Destruction"',precio:160, imagen:"./Imagenes/Discos/Guns-and-roses_Appetite-for-destruction.jpg" },
    {id:6,nombre:'"Gun N Roses-Chinese Democracy"',precio:150, imagen:"./Imagenes/Discos/Guns-and-roses_Chinese-democracy.jpg" },
    {id:7,nombre:'"The Beatles-Let it Be"',precio:200, imagen:"./Imagenes/Discos/The-beatles_Let-it-be.jpg" },
    {id:8,nombre:'"The Beatles-Help"',precio:190, imagen:"./Imagenes/Discos/The-beatles_Help.jpg" },
    {id:9,nombre:'"Bryan Adams-Reckless"',precio:120, imagen:"./Imagenes/Discos/Bryan-Adams_Reckless.jpg" },
    {id:10,nombre:'"Bryan Adams-Cuts Like a Knife"',precio:110, imagen:"./Imagenes/Discos/Bryan-Adams_Cuts-like-a-knife.jpg" },
];

const contenedor = document.getElementById("container");
vinilosLista.forEach((producto,indice) => {
    let card = document.createElement("div");
    card.classList.add("col-12", "mb-2", "col-md-4");
    let html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);
});

let modalCarrito = document.getElementById("cart");
let total=0;
const dibujarCarrito = () =>{
    modalCarrito.className="cart";
    modalCarrito.innerHTML ="";
    if (cart.length >0){
        cart.forEach((producto,indice)=>{
            total = total + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className ="producto-carrito";
            carritoContainer.innerHTML = `<img class="car-img" src="${producto.imagen}"/><div class="product-details">${producto.nombre}</div><div class="product-details"> Cantidad: ${producto.cantidad}</div><div class="product-details"> Precio: S/.${producto.precio}</div><div class="product-details"> Subtotal: S/.${producto.precio*producto.cantidad}</div><button class="btn btn-outline-success fs-5" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>`;
        modalCarrito.appendChild(carritoContainer);
        });
        const totalContainer =document.createElement("div");
        totalContainer.className ="total-carrito";
        totalContainer.innerHTML = `<div class="total"> TOTAL: S/. ${total}</div><button class="btn btn-success finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
        modalCarrito.appendChild(totalContainer);

    } else {
        modalCarrito.classList.remove("cart");
    }
};



let cart=[];

const agregarAlcarrito=(indice)=>{
    const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
        return elemento.id ===vinilosLista[indice].id
    });
    if (indiceEncontradoCarrito ===-1){
        const productoAgregar = vinilosLista[indice];
        productoAgregar.cantidad=1;
        cart.push(productoAgregar);
        actualizarStorage(cart);
        dibujarCarrito()
    } else {
        cart[indiceEncontradoCarrito].cantidad += 1;
        actualizarStorage(cart);
        dibujarCarrito();
    }
};

const removeProduct =(indice)=>{
    cart.splice(indice, 1);
    actualizarStorage(cart);
    dibujarCarrito();
}

const finalizarCompra = () => {
    const total =document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = "";
    const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo">LA COMPRA ASCIENDE A UN MONTO ${total} </p><div class="datos-cliente"><p class="datos-parrafo">Complete el formulario con sus datos para coordinar la entrega</p><button class = "btn btn-success formulario-compra" id ="formulario" onClick="dibujarFormu()">FORMULARIO</button></div>`
    modalCarrito.innerHTML=compraFinalizada;
};

const dibujarFormu =()=>{
    modalCarrito.innerHTML = "";
const formulario = `<div class="formularioCompra"><h2> DATOS PARA EL ENVIO </h2><div><div class="contact__section__item"><label>Nombre</label><input type="text" id="nombre" placeholder="Nombre" /></div><div class="contact__section__item"><label>Email</label><input type="text" id="mail" placeholder="Email" /></div><div class="contact__section__item"><label>Telefono</label><input type="text" id="telefono" placeholder="Telefono" /></div><div class="contact__section__item"><label>Domicilio</label><input type="text" id="domicilio" placeholder="Domicilio" /></div><div class="contact-button"><button type="button" class="btn btn-success envio" onClick="mostrarMensaje()">Confirmar</button></div></div></div>`
modalCarrito.innerHTML=formulario;
}

const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const emailCliente =document.getElementById("mail").value;
    const telefonoCliente =document.getElementById("telefono").value;
    const domicilioCliente =document.getElementById("domicilio").value;
    if (nombreCliente==""){
        alert("Completa todos los campos!");
        return false;
    }
    if (emailCliente==""){
        alert("Completa todos los campos!");
        return false;
    }
    if (telefonoCliente==""){
        alert("Completa todos los campos!");
        return false;
    }
    if (domicilioCliente==""){
        alert("Completa todos los campos!");
        return false;
    }
    modalCarrito.innerHTML ="";
    let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en 72 hrs recibira su paquete en ${domicilioCliente}!</div>`
    modalCarrito.innerHTML = mensaje;
}

const actualizarStorage = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart));
};

//Defino el Array de Productos seleccionados

const productosSeleccionados = [];

//Definir la Clase Producto

class Producto {
    constructor(id, nombre, precio){
        this.id =id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.descuento = 5;
        this.igv=18;
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento)/100);
    }

    aplicarIGV() {
        this.precio = this.precio + ((this.precio * this.igv)/100);
    }
}



