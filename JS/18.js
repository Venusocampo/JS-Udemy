// Funciones con parámetros y argumentos
//forma 1
function sumar(numero1 = 0 , numero2 = 0) { //número 1 y 2 son parámetros
    console.log(numero1 + numero2);
}

sumar(5,9); // argumentos o los valores reales
sumar(3,3);  
sumar(1);  // Por default el result sería NaN pero por eso agrego = 0 en parámetro
sumar(0); // Ahora por default se agrega 0 si no hay valores

// forma 2
const sumar2 = function(n1, n2) {
    console.log(n1 + n2)
}
sumar2(5, 10)