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