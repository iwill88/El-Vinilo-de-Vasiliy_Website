//Defino el Array de Vinilos disponibles en Tienda

const vinilosLista = [
    {id:1,nombre:'"Led Zeppelin-III"',precio:160},
    {id:2,nombre:'"Led Zeppelin-IV"',precio:150},
    {id:3,nombre:'"Black Sabbath-Heaven and Hell"',precio:140},
    {id:4,nombre:'"Black Sabbath-Paranoid"',precio:130},
    {id:5,nombre:'"Gun N Roses-Appetite For Destruction"',precio:160},
    {id:6,nombre:'"Gun N Roses-Chinese Democracy"',precio:150},
    {id:7,nombre:'"The Beatles-Let it Be"',precio:200},
    {id:8,nombre:'"The Beatles-Help"',precio:190},
    {id:9,nombre:'"Bryan Adams-Reckless"',precio:120},
    {id:10,nombre:'"Bryan Adams-Cuts Like a Knife"',precio:110},
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



