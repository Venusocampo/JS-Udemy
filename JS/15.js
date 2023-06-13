//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor de 20 pulgadas', precio: 500},
    { nombre: 'Televisión de 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// For each
meses.forEach(function(mes){
    if(mes == 'Marzo') {
        console.log('Marzo si existe')
    }
})

// Includes 
const resultado = meses.includes('Marzo');
console.log(resultado);

//Some <- ideal para arreglo de objetos
resultadouno = carrito.some(function(producto){
    return producto.nombre === 'Celular'
})
console.log(resultadouno);

// resultado2 = carrito.some(producto => producto.nombre === 'Celular');
// console.log(resultado2);

// Reduce //sirve para sumar los precios de la lista
resultadotres = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);

console.log(resultadotres);

// filter
resultadocuatro = carrito.filter(function(producto){
    // return producto.precio > 400
    return producto.nombre === 'Celular' // También se puede buscar texo
})
console.log(resultadocuatro)