//Defino el Array de Vinilos disponibles en Tienda

const vinilosLista = [
    {id:1,nombre:'"Led Zeppelin-IV"',precio:150},
    {id:2,nombre:'"Black Sabbath-Heaven and Hell"',precio:140},
    {id:3,nombre:'"Gun N Roses-Appetite For Destruction"',precio:160},
    {id:4,nombre:'"The Beatles-Let it Be"',precio:200},
    {id:5,nombre:'"Bryan Adams-Reckless"',precio:120},
];

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

//Busca en el Array el Producto con el ID enviado por parametro. Devuelve un Objeto con el ID

function buscarProducto(id) {
    for (let producto of vinilosLista) {
        if (producto.id == id) {
            return producto;
        }
    }

    return [];
}