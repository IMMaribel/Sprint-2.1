'use strict'

// EJERCICIO 1.2: CALLBACKS

//  *EJ1 - Callback básico

function procesar(number, Callback){
    Callback(number);
}

procesar(5, function(n){
    console.log(`El número es: ${n}.`);
});

// *EJ2 - Callbacks con operaciones matemáticas

function calculadora(num1, num2, Callback){
    Callback(num1, num2);
}

calculadora(2, 8, function(num1, num2){
    let suma = num1 + num2;
    console.log(`La suma de ${num1} y ${num2} es: ${suma}.`)
});

// *EJ3 - Uso de callbacks en funciones asíncronas

function esperarISaludar(name,Callback){
    setTimeout(() => {
        Callback(name);
    }, 2000);
}

esperarISaludar('Maribel', function(n){
    console.log(`${n}.`);
});

// *EJ4 - Callbacks con arrays

function procesarElementos(array, Callback){
    for(let i = 0; i < array.length; i++){
        Callback(array[i]);
    }
}

let array = [1,2,3,4,5];

procesarElementos(array, function(a){
    console.log(`${a}`);
});

// *EJ5 - Callbacks con toUpperCase

function procesarCadena(cadena, Callback){
    Callback(cadena.toUpperCase());
}

let cadena = 'bootcamp de react en it academy';

procesarCadena(cadena, function(c){
    console.log(`${c}`);
});