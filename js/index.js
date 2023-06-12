AOS.init();

function mostrarFormulario() {
  var formularioContainer = document.getElementById("formularioContainer");
  formularioContainer.style.display = "flex";
}

function cerrarFormulario() {
  var formularioContainer = document.getElementById("formularioContainer");
  formularioContainer.style.display = "none";
}

function mostrarTabla() {
    var tabla = document.getElementById("tablaCalificaciones");
    tabla.style.display = "block";
  }
  function cerrarTabla() {
    var tabla = document.getElementById("tablaCalificaciones");
    tabla.style.display = "none";
  } 
  
  function guardarCalificaciones() {
    var calificacion1 = document.getElementById("calificacion1").value;
    var calificacion2 = document.getElementById("calificacion2").value;
    var calificacion3 = document.getElementById("calificacion3").value;
    console.log("Calificación 1: " + calificacion1);
    console.log("Calificación 2: " + calificacion2);
    console.log("Calificación 3: " + calificacion3);
  
    var tabla = document.getElementById("tablaCalificaciones");
    tabla.style.display = "none";
  }
  

function mostrarAlerta() {
  var confirmacion = confirm("¿Estás seguro de que deseas eliminar este elemento?");
  if (confirmacion) {
    alert("El elemento ha sido eliminado.");
  }
}
