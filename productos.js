///Defino el Array de Vinilos disponibles en Tienda

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

function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("cart")) || [];
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
        
    } else {
        cart[indiceEncontradoCarrito].cantidad += 1;
        actualizarStorage(cart);
       
    }
};

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

console.log(JSON.parse(localStorage.getItem("cart")));