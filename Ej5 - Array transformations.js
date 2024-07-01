'use strict'

// *EJ1 - Map

let arrMap = [1, 2, 3, 4];
let alCuadrado = arrMap.map(function (x){
    return x * x;
});

console.log(arrMap);
console.log(alCuadrado);

// *EJ2 - Filter

let arrFilter = [1, 2, 3, 4];
let numPares = arrFilter.filter(function(y){
    return y % 2 === 0;
});

console.log(arrFilter);
console.log(numPares);

// *EJ3 - Find

let arrFind = [1, 10, 8, 11];

let mayorDiez = arrFind.find(function(z){
    return z > 10;
});

console.log(arrFind);
console.log(mayorDiez);

// *EJ4 - Reduce

const arrRed = [13, 7, 8, 21];

let suma = arrRed.reduce(function(accumulator, valorActual){
    return accumulator + valorActual;
});

console.log(arrRed);
console.log(suma);

// *EJ5 - Conjunto de funciones en Array

const arrMix = [1, 2, 7, 10, 15, 17, 11, 5, 8, 12, 9];

let calculate = arrMix.filter(arrMix => arrMix >= 10).map(arrMix => arrMix * 2).reduce((acc, arrMix) => acc + arrMix);

console.log(arrMix);
console.log(calculate);

// *EJ6 - Every/Some

const arrEverySome = [11, 12, 13, 14];

let numMayorDiez = (arrEverySome) => arrEverySome > 10;

console.log(arrEverySome);
console.log(arrEverySome.every(numMayorDiez));

