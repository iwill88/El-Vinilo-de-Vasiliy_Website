cart = JSON.parse(localStorage.getItem("cart"));
let modalCarrito = document.getElementById("cart");
let total=0;
const dibujarCarrito = () =>{
    modalCarrito.className="cart";
    modalCarrito.innerHTML =`<div class="mensaje-vacio"><p class="text-center py-3 fs-4 bg-danger text-white">No se encontraron productos en el carrito!</p></div>`;
    if (cart.length >0){
        modalCarrito.innerHTML = "";
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

const removeProduct =(indice)=>{
    total=0;
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

function obtenerProductosCarrito () {
    JSON.parse(localStorage.getItem("cart"));
};


dibujarCarrito();