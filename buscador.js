function buscarGenero(genero){
  contenedor.innerHTML=  `<div class="row" id="container"></div>`;
  if (genero=="rock"){
      vinilosLista.forEach((producto,indice) => { 
          if (producto.gender == "rock") {
            let card = document.createElement("div");
            card.classList.add("col-12", "mb-2", "col-md-4");
            let html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`;
            card.innerHTML = html;
            contenedor.appendChild(card);
          };  
    });
  }
  if (genero=="blues"){
      vinilosLista.forEach((producto,indice) => { 
          if (producto.gender == "blues") {
            let card = document.createElement("div");
            card.classList.add("col-12", "mb-2", "col-md-4");
            let html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`;
            card.innerHTML = html;
            contenedor.appendChild(card);
          };  
    });
  };
  if (genero=="classic"){
      vinilosLista.forEach((producto,indice) => { 
          if (producto.gender == "classic") {
            let card = document.createElement("div");
            card.classList.add("col-12", "mb-2", "col-md-4");
            let html = `<div class="card"><img src="${producto.imagen}" alt="img card" class="img-card"><div class="card-body"><h3>${producto.nombre}</h3><p>S/.${producto.precio}</p><button class="btn btn-dark" data-id="1" onClick="agregarAlcarrito(${indice})">Comprar</button></div></div>`;
            card.innerHTML = html;
            contenedor.appendChild(card);
          };  
    });
  };
}