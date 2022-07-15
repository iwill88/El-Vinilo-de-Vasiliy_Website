//validarFormularioConsulta

let miFormulario = document.getElementById("form");
let botonEnviar = document.getElementById("boton-enviar");
botonEnviar.addEventListener("click",validarFormulario);

function validarFormulario() {
    let nombres = document.getElementById("nombres").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let mensajeEnvia = document.getElementById("mensajeEnvia").value;
 
    if (nombres==""){
        alert("Completa todos los campos!");
        return false;
    }

    if (apellidos==""){
        alert("Completa todos los campos!");
        return false;
    }

    if (email==""){
        alert("Completa todos los campos!");
        return false;
    }

    if (mensajeEnvia==""){
        alert("Completa todos los campos!");
        return false;
    }

    const nuevoClienteConsulta = new Cliente(nombres,apellidos,email,mensajeEnvia);
    baseClientesConsulta.push(nuevoClienteConsulta);
    console.log(baseClientesConsulta);

    let registroDatos = `Nombre: ${nombres} -Apellidos: ${apellidos} - Email: ${email} - Mensaje: ${mensajeEnvia}`;
    console.log(registroDatos);
    let segundaSeccionContacto = document.getElementById("segunda-seccion-contacto");
    const mensajeExito = document.createElement("div");
    mensajeExito.innerHTML = `<div class="d-flex justify-content-center text-light pb-5 fs-4 text-center"><div>Gracias "${nombres} ${apellidos}" . Su mensaje se ha enviado con éxito!<br>Nos contactaremos contigo en un plazo menor a 24 hrs! </div></div>`;
    segundaSeccionContacto.appendChild(mensajeExito);
    document.getElementById("nombres").value="";
    document.getElementById("apellidos").value="";
    document.getElementById("email").value="";
    document.getElementById("mensajeEnvia").value="";
    actualizarStorageCliente(baseClientesConsulta);
    //miFormulario.submit();

}