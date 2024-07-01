'use strict'

// *EJ1 - forEach

const nombres = ['Anna', 'Bernat', 'Clara'];

nombres.forEach((element) => console.log(element));

// *EJ2 - for-of

for (let value of nombres) {console.log(value)};

// *EJ3 - Filter

const numeros = [1, 2, 3, 4, 5, 6];

let pares = numeros.filter ((numeros) => numeros % 2 === 0);

console.log(pares);

// *Ej4 - For-in

const obj = {nombre: 'Ona', edad: 25, ciudad: 'Barcelona'};

for (const property in obj) {
    console.log(`${property}: ${obj[property]}`);
}

// *EJ5 - For-of con break

for (const valor of numeros) {
    console.log(valor);
    if(valor === 5){
        break;
    }
}