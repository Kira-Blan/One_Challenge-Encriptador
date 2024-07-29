
let texto = document.querySelector(".texto")
let mensaje = document.querySelector(".mensaje")

/* "llaves" de encriptación a usar
La letra "e" es convertida para "enter"  
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


function cifrar() {
  let texto = document.querySelector("#ingreso").value;
  let mensaje = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector("#mensaje").value = mensaje;
  document.querySelector("#ingreso").value;
}

let boton1 = document.querySelector(".cifrador");
boton1.onclick = cifrar;

function descifrar() {
  let texto = document.querySelector("#ingreso").value;
  let mensaje = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector("#mensaje").value = mensaje;
  document.querySelector("#ingreso").value;
}

let boton2 = document.querySelector(".descifrador");
boton2.onclick = descifrar;

async function copiarMensaje() {    
    try {
        await navigator.clipboard.writeText(mensaje.value);
        alert("Copiado al portapapeles");
    } catch(err) {
        alert("Error al copiar: ", err)
    }
}
/*function copiarMensaje() {
    let copiarMensajeDevuelto = getElementById("mensaje");

    copiarMensajeDevuelto.select();
    copiarMensajeDevuelto.selectionRange(0, 99999);

    try {

    await navigator.clipboard.writeText(copiarMensajeDevuelto.value);
    alert("Copiado al portapapeles");
    }catch(err) {
        alert("Error al copiar: ", err)
    }
    }

    alert("Copiado al portapapeles: " + copiarMensajeDevuelto.value);
}*/
