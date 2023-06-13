// Diferencias entre el tipo de funciones

// Declaración de Función

function sumar() {
    console.log(10 + 10);
}

sumar() // El llamado a la función podría ponerse primero que la función como tal y aun funcionaría

// Expresión de la función
const sumar2 = function() {
    console.log(3 + 3)
}
sumar2() // La sintaxis es como una variable

// IIFE
(function()  {
    console.log('Esto es una función')
}) ();