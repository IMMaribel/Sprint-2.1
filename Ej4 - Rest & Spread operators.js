'use strict'

// *EJ1 - Operador Spread en Arrays

let array1 = [1,2,3,4];
let array2 = [3,2,1,0];
let array3 = [...array1, ...array2];

console.log(array3);

// *EJ2 - Operador Rest en Funciones

function suma(...num){
    let total = 0;
    for (const arg of num){
        total += arg;
    }
    return total;
}

console.log(suma(5,2,8,0,3,4,12));
console.log(suma(1,1,3));

// *EJ3 - Copiando objetos con Spread

let objeto1 = { nombre: 'Maribel', apellidos: 'Ibañez', edad:'34'};

let objeto2 = {...objeto1, nacionalidad:'Española'};

console.log(objeto2);
console.log(objeto1);

