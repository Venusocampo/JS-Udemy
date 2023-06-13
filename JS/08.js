
const nombre = 'Laura';
const email = 'correo@correo.com';

// la función de suma en números los adiciona, pero en el string cumple la función de concatenar, también se pueden usar comas en vez de suma y sería lo mismo, sin embargo debemos agregar " " si queremos adicionar espacio. 

//Concatenación de variables
console.log( "Nombre Cliente: " + nombre + " Email: " + email);
console.log( "Nombre Cliente: " , nombre , " Email: " , email);

// Template Strings - String Literals

console.log(`Nombre Cliente: ${nombre} Email: ${email}`);