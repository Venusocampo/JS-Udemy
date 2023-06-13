// Objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

console.log(producto);

console.log(producto.precio);

// console.log(producto["precio"]); esta es otra forma de acceder a una propiedad

// Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';

console.log(producto);

// Eliminar propiedas
delete producto.disponible
console.log(producto);