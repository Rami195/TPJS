
//5. Objetos en JavaScript
//Ej 1

let persona = {
    nombre: "Ramiro",
    edad: 21,
    ciudad: "Buenos Aires",
  
  
    cambiarCiudad: function (nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }
  };
  console.log("Antes de cambiar la ciudad:", persona);
  persona.cambiarCiudad("Mendoza");
  console.log("Después de cambiar la ciudad:", persona);
  
  //EJ 2
  
  let libro = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    año: 1605,
  
    esAntiguo: function () {
      const añoActual = new Date().getFullYear();
      const añosDesdePublicacion = añoActual - this.año;
  
      const esAntiguo = añosDesdePublicacion > 10;
      console.log(`El libro "${this.titulo}" es antiguo: ${esAntiguo}`);
    }
  };
  libro.esAntiguo();