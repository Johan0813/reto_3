function enviarFormulario(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var identificacion = document.getElementById("identificacion").value;

    if (nombre == "" || correo == "" || identificacion == "") {
        alert("Complete todos los campos");
    } else {
        alert("Formulario enviado");
        document.forms[0].reset();
    }
}

document.getElementsByTagName("form")[0].onsubmit = enviarFormulario;