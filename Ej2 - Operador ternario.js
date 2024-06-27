'use strict'

// EJERCICIO 1.2: OPERADOR TERNARIO

// *Ej1 - Operador ternario básico

function potConduir(edad){
    if(edad >= 18){
        console.log(`Puedes conducir.`);
    }else{
        console.log(`No puedes conducir.`);
    }
}

potConduir(4);
potConduir(18);
potConduir(23);
