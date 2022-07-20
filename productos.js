

let contenedor = document.getElementById("container");
vinilosLista.forEach((producto,indice) => {
    let card = document.createElement("div");
    card.classList.add("col-12", "mb-2", "col-md-4");
    let html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);
});






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

console.log(JSON.parse(localStorage.getItem("cart")));