// Arreglos o Arrays

const numeros = [10,20,30,40,50];

console.table(numeros);

// modo constructor
// const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

// console.table(meses);

//Los arreglos pueden contener todo tipo de valores

//Acceder a los valores de un arreglo
// console.log(numeros[4]);
// console.log(numeros[200]); //undefined
//Si quiero verlos cada uno
// numeros.forEach( function(numero) {
//     console.log(numero);
// })

//Conocer la extenión de un arreglo
// console.log(numeros.length);

// Agregar valores
// numeros[5] =  60;  
// numeros[6] =  70;  
// numeros[7] =  80;  
numeros.push(60,70,80) //Ambos modos añadirán los números al final de la tabla

numeros.unshift(-10,-20,-30); // Añade filas arriba

// Eliminar valores
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// meses.pop() // Elimina el último elemento
// meses.shift() // Elimina el primer elemento
// meses.splice(2,1); // Elimina en cualquier posición 2<- desde cuál posición, 1<- cuántas
// console.table(meses);

// Rest Operator o Spread Operator (LA FORMA MÁS APROPIADA)

const nuevoArreglo = [...meses, 'Junio']; //Esta es la opción más recomendada y es similar al push.
// const nuevoArreglo = ['Junio', ...meses]; // Así será el equivalente a unshift
console.table(nuevoArreglo); 

//Ejemplo en freecode
const s = [5, 7, 2];
function editInPlace() { 
s.push(2, 5, 7);
s.splice(0, 3);

}
editInPlace();

// Ejercicio de un simple array sum en HackerRank
// Given an array of integers, find the sum of its elements.

function simpleArraySum(ar) {
    let sum = 0;
 for (let i = 0; i < ar.length; i++){
     sum += ar[i]
 }

 return sum; // Write your code here

}

