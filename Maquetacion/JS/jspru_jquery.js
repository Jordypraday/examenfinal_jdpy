var formulario  = $("#formulario").val();
var nombre      = $("#nombre").val();
var correo      = $("#email").val();
var apellido    = $("#apellido").val(); 


var validarNombre = function(e){
    if(nombre == null || nombre == ""){
        alert("Completa el campo nombre");
        e.preventDefault();
    }
}
var validarRadio = function(e){
    if($("#hombre").checked == true || $("#mujer").checked == true){  
    }else{
        alert("Completa el campo sexo")
        e.preventDefault();
    }
}
var validarApellido = function(e){
    if(apellido == null || apellido == ""){
        alert("completa el campo nombre");
        e.preventDefault();
    }
}

var validar = function(e){
    validarNombre(e);
    validarApellido(e);
    validarRadio(e);
}
formulario.addEventListener(submit,validar);

$(document).ready(function() {
    $("#guardar").validate({
      rules: {
        nombre: {
          required: true,
          minlength: 2
        },
        apellido: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        nombre: {
          required: "Por favor ingresa tu nombre",
          minlength: "Tu nombre debe tener al menos 2 caracteres"
        },
        apellido: { 
          required: "Por favor ingresa tu apellido",
          minlength: "Tu apellido debe tener al menos 2 caracteres"
        },
        email: {
          required: "Por favor ingresa tu correo electrónico",
          email: "Por favor ingresa una dirección de correo electrónico válida"
        }
      }
    })
  })
