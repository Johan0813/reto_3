// Espera a que cargue la página
document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita que se recargue la página

        // Obtener valores
        const nombre = document.querySelector('input[type="text"]').value;
        const correo = document.querySelector('input[type="email"]').value;
        const identificacion = document.querySelectorAll('input')[2].value;

        // Validación simple
        if (nombre === "" || correo === "" || identificacion === "") {
            alert("Todos los campos son obligatorios");
            return;
        }

        // Mostrar datos en consola
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Identificación:", identificacion);

        alert("Formulario enviado correctamente");

        // Limpiar formulario
        form.reset();
    });

});