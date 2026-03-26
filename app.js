function enviarFormulario(event) {
    event.preventDefault();
// Evita que el formulario se envíe de forma predeterminada
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var identificacion = document.getElementById("identificacion").value;

    if (nombre == "" || correo == "" || identificacion == "") {
        alert("Complete todos los campos"); //valida que no haya campos vacíos
    } else {
        alert("Formulario enviado");//mensaje de confirmación
        document.forms[0].reset(); //resetea el formulario después de enviarlo
    }
}
// formulario de contacto
document.getElementsByTagName("form")[0].onsubmit = enviarFormulario;