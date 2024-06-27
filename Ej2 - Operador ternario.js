'use strict'

// EJERCICIO 1.2: OPERADOR TERNARIO

// *EJ1 - Operador ternario básico

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

// *EJ2 - Operadores de comparación

function numeroMayor(num1, num2){
    if(num1 > num2){
        console.log(`${num1} es más grande que ${num2}.`);
    }else{
        console.log(`${num2} es más grande que ${num1}.`);
    }
}

numeroMayor(12, 5);
numeroMayor(10, 33);