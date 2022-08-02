function buscarGenero(genero){
  contenedor.innerHTML = `<div class="d-flex justify-content-center align-items-center cargador mb-5" ><div class="spinner-border text-success " style="width: 3rem; height: 3rem; role="status">
  <span class="visually-hidden">Loading...</span></div></div>`;
  setTimeout(()=>{
    contenedor.innerHTML=  `<div class="row" id="container"></div>`;
  (genero=="rock")&&(
      vinilosLista.forEach((producto,indice) => { 
          (producto.gender == "rock")&&(
            card = document.createElement("div"),
            card.classList.add("col-12", "mb-2", "col-md-4"),
            html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`,
            card.innerHTML = html,
            contenedor.appendChild(card)
            );
    })
    );
    (genero=="blues")&&(
      vinilosLista.forEach((producto,indice) => { 
          (producto.gender == "blues")&&(
            card = document.createElement("div"),
            card.classList.add("col-12", "mb-2", "col-md-4"),
            html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`,
            card.innerHTML = html,
            contenedor.appendChild(card)
            );
    })
    );
    (genero=="classic")&&(
      vinilosLista.forEach((producto,indice) => { 
          (producto.gender == "classic")&&(
            card = document.createElement("div"),
            card.classList.add("col-12", "mb-2", "col-md-4"),
            html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`,
            card.innerHTML = html,
            contenedor.appendChild(card)
            );
    })
    );
  },1500)
  
}

function buscadorNombre() {
  contenedor.innerHTML = `<div class="d-flex justify-content-center align-items-center cargador mb-5"><div class="spinner-border text-success " style="width: 3rem; height: 3rem; role="status">
  <span class="visually-hidden">Loading...</span></div></div>`;
  setTimeout(()=>
  {contenedor.innerHTML=  `<div class="row" id="container"></div>`;
  nombreVinilo = document.getElementById("nombreVinilo").value;
  vinilosLista.forEach((producto,indice) => { 
    (producto.nombre.includes(nombreVinilo))&&(
      card = document.createElement("div"),
      card.classList.add("col-12", "mb-2", "col-md-4"),
      html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`,
      card.innerHTML = html,
      contenedor.appendChild(card)
      );
})},1500);
  
};