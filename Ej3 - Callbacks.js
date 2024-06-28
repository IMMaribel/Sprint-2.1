'use strict'

// EJERCICIO 1.2: CALLBACKS

//  *EJ1- Callback básico

function procesar(number, Callback){
    Callback(number);

}

procesar(5, function(n){
    console.log(`El número es: ${n}.`);
});

