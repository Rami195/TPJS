//7. Introducción al DOM
//ej 1
function cambiarColor() {
    const elementosP = document.querySelectorAll('p');
    elementosP.forEach(elemento => {
      if (elemento.style.color === 'blue') {
        elemento.style.color = 'black';
      } else {
        elemento.style.color = 'blue';
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('boton');
    boton.addEventListener('click', cambiarColor);
  
    // ej 2
    const boton2 = document.getElementById('mostrarAlerta')
    boton2.addEventListener('click', function () {
      const valorIngresado = document.getElementById('texto').value;
      alert('Has ingresado: ' + valorIngresado);
    });
  
    //8. Eventos en DOM
    //ej 1
    const elementos = document.querySelectorAll('.elemento');
    elementos.forEach(elemento => {
      elemento.addEventListener('click', function () {
        console.log(elemento.textContent);
      });
    });
  
  
  
    const campoTexto = document.getElementById('miCampoTexto');
    const botonDeshabilitar = document.getElementById('deshabilitar');
    const botonHabilitar = document.getElementById('habilitar');
  
    botonDeshabilitar.addEventListener('click', function () {
      campoTexto.disabled = true;
    });
  
    botonHabilitar.addEventListener('click', function () {
      campoTexto.disabled = false;
    });
  
  
    //9. LocalStorage 
    function mostrarCorreo() {
      const correo = localStorage.getItem('correo');
      const correoText = document.getElementById('correoText');
      const eliminarCorreo = document.getElementById('eliminarCorreo');
      if (correo) {
        correoText.textContent = `Correo guardado: ${correo}`;
        eliminarCorreo.style.display = 'inline-block'; // Mostrar botón de eliminar
      } else {
        correoText.textContent = '';
        eliminarCorreo.style.display = 'none'; // Ocultar botón de eliminar
      }
    }
  
    // Evento para manejar el envío del formulario
    document.getElementById('miFormulario').addEventListener('submit', function (event) {
      event.preventDefault(); // Evitar el envío del formulario y recarga de página
      const emailInput = document.getElementById('email');
      localStorage.setItem('correo', emailInput.value); // Guardar correo en localStorage
      mostrarCorreo(); 
      emailInput.value = ''; 
    });
  
    // Evento para eliminar el correo guardado
    document.getElementById('eliminarCorreo').addEventListener('click', function () {
      localStorage.removeItem('correo'); 
      mostrarCorreo(); 
    });
  
    // Mostrar correo guardado al cargar la página
    mostrarCorreo();
  });
  
  