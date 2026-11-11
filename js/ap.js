
// 1. Acceder a los elementos del DOM

const nombre = document.querySelector("#nombre");
const boton = document.querySelector("#botonSaludar");
const mensaje = document.querySelector("#mensaje");
const fecha = document.querySelector("#fecha");


// 2. Mostrar la fecha actual

const fechaActual = new Date();

fecha.textContent = "Fecha actual: " + fechaActual.toLocaleDateString("es-EC");


// 3. Crear una función

function saludar() {

    // Obtener el valor ingresado
    const nombreUsuario = nombre.value.trim();

    // 4. Validar que el nombre tenga al menos 5 caracteres

    if (nombreUsuario.length < 5) {
        mensaje.textContent = "Error: El nombre debe tener al menos 5 caracteres.";
        return;
    }

    // 5. Actualizar el contenido del DOM

    mensaje.textContent =
        "¡Hola, " + nombreUsuario +
        "! Qué gusto tenerte aquí. Bienvenido a nuestra aplicación.";

}


// 6. Escuchar el evento del botón

boton.addEventListener("click", saludar);
