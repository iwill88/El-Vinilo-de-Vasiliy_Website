///Defino el Array de Vinilos disponibles en Tienda

const vinilosLista = [
    {id:1,gender:"rock",nombre:'"Led Zeppelin-III"',precio:160, imagen:"./Imagenes/Discos/Led-Zeppelin-III.jpg", masVendido:1},
    {id:2,gender:"rock",nombre:'"Led Zeppelin-Houses of the Holy"',precio:150, imagen:"./Imagenes/Discos/Led-Zeppelin_Houses-of-the-Holy.jpg", masVendido:0 },
    {id:3,gender:"rock",nombre:'"Black Sabbath-Black Sabbath"',precio:140, imagen:"./Imagenes/Discos/Black-Sabbath_Black-Sabbath.jpg", masVendido:0 },
    {id:4,gender:"rock",nombre:'"Black Sabbath-Sabbath Bloody Sabbath"',precio:130, imagen:"./Imagenes/Discos/Black-Sabbath_Sabbath-Bloody-Sabbath.jpg", masVendido:0 },
    {id:5,gender:"rock",nombre:'"Gun N Roses-Appetite For Destruction"',precio:160, imagen:"./Imagenes/Discos/Guns-and-roses_Appetite-for-destruction.jpg", masVendido:0 },
    {id:6,gender:"rock",nombre:'"Gun N Roses-Chinese Democracy"',precio:150, imagen:"./Imagenes/Discos/Guns-and-roses_Chinese-democracy.jpg", masVendido:1 },
    {id:7,gender:"rock",nombre:'"The Beatles-Let it Be"',precio:200, imagen:"./Imagenes/Discos/The-beatles_Let-it-be.jpg", masVendido:0 },
    {id:8,gender:"rock",nombre:'"The Beatles-Help"',precio:190, imagen:"./Imagenes/Discos/The-beatles_Help.jpg", masVendido:0 },
    {id:9,gender:"rock",nombre:'"Bryan Adams-Reckless"',precio:120, imagen:"./Imagenes/Discos/Bryan-Adams_Reckless.jpg", masVendido:0 },
    {id:10,gender:"rock",nombre:'"Bryan Adams-Cuts Like a Knife"',precio:110, imagen:"./Imagenes/Discos/Bryan-Adams_Cuts-like-a-knife.jpg", masVendido:1 },
    {id:11,gender:"classic",nombre:'"Sebastian Bachs-Greatest Hits Vol-2"',precio:110, imagen:"./Imagenes/Discos/Classic/Johann-Sebastian-Bachs-Bach-Greatest-Hits-Vol-2.jpg", masVendido:0 },
    {id:12,gender:"classic",nombre:'"Ludovico Einaudi-Cinema"',precio:120, imagen:"./Imagenes/Discos/Classic/Ludovico-Einaudi-Cinema.jpg", masVendido:0 },
    {id:13,gender:"classic",nombre:'"Ludovico Einaudi-La Scala Concert"',precio:140, imagen:"./Imagenes/Discos/Classic/Ludovico-Einaudi-La-Scala-Concert-03-03-03.jpg", masVendido:0 },
    {id:14,gender:"classic",nombre:'"Richard Wagner-Overturas-II"',precio:120, imagen:"./Imagenes/Discos/Classic/Richard-Wagner-Overturas-II.jpg", masVendido:0 },
    {id:15,gender:"classic",nombre:'"Wolfgang Amadeus Mozart-Mozart"',precio:150, imagen:"./Imagenes/Discos/Classic/Wolfgang-Amadeus-Mozart-Wolfgang-Amadeus-Mozart.jpg", masVendido:0 },
    {id:16,gender:"blues",nombre:'"BB King-Remastered From The Archives"',precio:150, imagen:"./Imagenes/Discos/Blues/BB-King-Remastered-From-The-Archives.jpg", masVendido:0 },
    {id:17,gender:"blues",nombre:'"Eric Clapton-Nothing But The Blues"',precio:160, imagen:"./Imagenes/Discos/Blues/Eric-Clapton-Nothing-But-The-Blues.jpg", masVendido:0 },
    {id:18,gender:"blues",nombre:'"Gary Moore-Blues Alive"',precio:120, imagen:"./Imagenes/Discos/Blues/Gary-Moore-Blues-Alive.jpg", masVendido:0 },
    {id:19,gender:"blues",nombre:'"Muddy Waters-At Newport 1960"',precio:130, imagen:"./Imagenes/Discos/Blues/Muddy-Waters-Muddy-Watters-At-Newport-1960.jpg", masVendido:0 },
];


let cart=[];

const actualizarStorage = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart));
};

function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("cart")) || [];
};

const agregarAlcarrito=(indice)=>{
    const indiceEncontradoCarrito = cart.findIndex((elemento)=>{
        return elemento.id ===vinilosLista[indice].id
    });
    if (indiceEncontradoCarrito ===-1){
        const productoAgregar = vinilosLista[indice];
        productoAgregar.cantidad=1;
        cart=obtenerProductosCarrito();
        cart.push(productoAgregar);
  
        
        
    } else {
        cart=obtenerProductosCarrito();
        cart[indiceEncontradoCarrito].cantidad += 1;

    }
    actualizarStorage(cart);
};

/*Merge*/