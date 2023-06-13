// Funciones que retornan valores

// function sumar(n1, n2) {
//     return n1 + n2; // retorna resultado desde valores que se le asignan a una variable 
// }

// const resultado = sumar(2, 3);

// console.log(resultado);

let total = 0; // para que empiece desde allí su valor

function agregarCarrito(precio) {
    return total += precio; // tendrá un incremento según el precio
}

function calcularImpuesto(total) { 
    return 1.19 * total; //fórmula para calcular impuesto desde el total
}

total = agregarCarrito(200);
total = agregarCarrito(600);
total = agregarCarrito(400);


console.log(total);

const totalAPagar = calcularImpuesto(total); // variable igual al resultado de la función

console.log(`El total a pagar con impuestos es de: $${totalAPagar}`); //Siempre se usa el acento para escribir palabras