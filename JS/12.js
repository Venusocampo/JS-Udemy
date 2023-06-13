// "use strict"; // este evita que se presenten contradicciones en JS y mostrará un error cuando suceda

// Objetos 
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

// Object.freeze(producto); //congela los objetos, no se pueden modificar ni editar propiedades
// producto.imagen = 'imagen.jpg';
// console.log(Object.isFrozen(producto)); // descongela la función congelar

Object.seal(producto); //no permite agregar, pero si modificar
producto.precio = 'NUEVO PRECIO';
Object.isSealed(producto);

console.log(producto);
// Ejemplo en Freecode
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();