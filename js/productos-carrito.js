function mensajeError() {
    Toastify({
        text: "Completa todos los campos!",
        className: "info",
        duration: 2000,
        style: {
          background: "linear-gradient(90deg, rgba(217,13,13,1) 0%, rgba(212,72,44,1) 42%, rgba(255,43,0,1) 73%)",
        }
      }).showToast();
}


let modalCarrito = document.getElementById("cart");

const dibujarCarrito = () =>{
    cart = JSON.parse(localStorage.getItem("cart"));
    let total=0;
    modalCarrito.innerHTML =`<div class="mensaje-vacio"><p class="text-center py-3 fs-4 bg-danger text-white">No se encontraron productos en el carrito!</p></div>`;
    modalCarrito.className="cart";
    if (cart.length >0){
        modalCarrito.innerHTML = "";
        modalCarrito.innerHTML = `<div class="d-flex pe-5 pt-5 vaciar-carrito"><button class="btn btn-danger fs-5 vaciar-carrito-btn " onClick="vaciarCarrito()">Vaciar Carrito<i class="fa-solid fa-trash-can ps-2"></i></button></div>`;
        cart.forEach((producto,indice)=>{
            total = total + producto.precio * producto.cantidad;
            const carritoContainer = document.createElement("div");
            carritoContainer.className ="producto-carrito";
            carritoContainer.innerHTML = `<img class="car-img" src="${producto.imagen}"/><div class="product-details">${producto.nombre}</div><div class="product-details"><a hred="#" class="btn btn-success me-2 botonCantidad" onClick="agregarItem(${producto.id})">+</a>${producto.cantidad}<a hred="#" class="btn btn-success ms-2 botonCantidad" onClick="eliminarItem(${producto.id})">-</a></div><div class="product-details"> Precio: S/.${producto.precio}</div><div class="product-details"> Subtotal: S/.${producto.precio*producto.cantidad}</div><button class="btn btn-outline-success fs-5 boton-eliminar" id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>`;
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
    actualizarBotonCarrito();
   
}

const finalizarCompra = () => {
    const total =document.getElementsByClassName("total")[0].innerHTML;
    modalCarrito.innerHTML = `<div class="d-flex justify-content-center align-items-center cargador-black" ><div class="spinner-border text-success " style="width: 3rem; height: 3rem; role="status">
    <span class="visually-hidden">Loading...</span></div></div>`;
    setTimeout(()=>{
        modalCarrito.innerHTML = "";
        const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo">LA COMPRA ASCIENDE A UN MONTO ${total} </p><div class="datos-cliente"><p class="datos-parrafo">Complete el formulario con sus datos para coordinar la entrega</p><button class = "btn btn-success formulario-compra" id ="formulario" onClick="dibujarFormu()">FORMULARIO</button></div>`
        modalCarrito.innerHTML=compraFinalizada;
    },1000);
    
};

const dibujarFormu =()=>{
    modalCarrito.innerHTML = `<div class="d-flex justify-content-center align-items-center cargador-black" ><div class="spinner-border text-success " style="width: 3rem; height: 3rem; role="status">
    <span class="visually-hidden">Loading...</span></div></div>`;
    setTimeout(()=>{
        modalCarrito.innerHTML = "";
        const formulario = `<div class="formularioCompra"><h2> DATOS PARA EL ENVIO </h2><div><div class="contact__section__item"><label>Nombre</label><input type="text" id="nombre" placeholder="Nombre" /></div><div class="contact__section__item"><label>Email</label><input type="text" id="mail" placeholder="Email" /></div><div class="contact__section__item"><label>Telefono</label><input type="text" id="telefono" placeholder="Telefono" /></div><div class="contact__section__item"><label>Domicilio</label><input type="text" id="domicilio" placeholder="Domicilio" /></div><div class="contact-button"><button type="button" class="btn btn-success envio" onClick="mostrarMensaje()">Confirmar</button></div></div></div>`
        modalCarrito.innerHTML=formulario;
    },1000);

}

const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const emailCliente =document.getElementById("mail").value;
    const telefonoCliente =document.getElementById("telefono").value;
    const domicilioCliente =document.getElementById("domicilio").value;
    if (nombreCliente==""){
        mensajeError();
        return false;
    }
    if (emailCliente==""){
        mensajeError();
        return false;
    }
    if (telefonoCliente==""){
        mensajeError();
        return false;
    }
    if (domicilioCliente==""){
        mensajeError();
        return false;
    }
    modalCarrito.innerHTML = `<div class="d-flex justify-content-center align-items-center cargador-black" ><div class="spinner-border text-success " style="width: 3rem; height: 3rem; role="status">
    <span class="visually-hidden">Loading...</span></div></div>`;
    setTimeout(()=>{
        modalCarrito.innerHTML ="";
        let mensaje = `<div class="mensaje-final"><p>Gracias ${nombreCliente} por su compra! en 72 hrs recibira su paquete en ${domicilioCliente}!</p></div>`
        modalCarrito.innerHTML = mensaje;
    },1000);
    vaciarCarritoFinal();
}


function buscarProducto(id){
    let productos = obtenerProductosCarrito();
    return productos.find(x=> x.id == id);
}

function agregarItem(id){
    let cart = obtenerProductosCarrito();
    let pos = cart.findIndex(x=> x.id == id);

    (pos>-1)?(
        cart[pos].cantidad += 1
        
        ):(
        producto =buscarProducto(id),
        producto.cantidad =1,
        cart.push(producto),
        producto.id=indice
       
        )
    actualizarStorage(cart);
    actualizarBotonCarrito();
    dibujarCarrito();
    
}

function eliminarItem(id){
    let cart = obtenerProductosCarrito();
    let pos = cart.findIndex(x=> x.id == id);
    cart[pos].cantidad -=1;
    (cart[pos].cantidad==0)&&(
        cart.splice(pos,1)); 
    actualizarStorage(cart);
    actualizarBotonCarrito();
    dibujarCarrito();
    }
    
    




dibujarCarrito();
actualizarBotonCarrito();