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

// *EJ3 - Uso enlazado de operadores ternarios

let resultado = (numero) => console.log((numero > 0) ? 'Positivo' : (numero < 0) ? 'Negativo' : 'Cero');

resultado(5);
resultado(-3);
resultado(0);

// *EJ3 - Operador ternario con funciones

function trobarMaxim(a,b,c){
    if(a > b && a > c){
        console.log(`${a} es el número mayor.`);
    } else if(b > a && b > c){
        console.log(`${b} es el número mayor.`); 
    }else{
    console.log(`${c} es el número mayor.`);
    }
}

trobarMaxim(8,5,1);
trobarMaxim(3,6,2);
trobarMaxim(2,5,9);

// *EJ4 - Operador ternario dentro de un bucle

function parOImpar(numbers){
    for(let i = 0; i < numbers.length; i++){
        let num = numbers[i];
        if(num % 2 === 0){
            console.log(`${num} es un número par.`);
        } else{
            console.log(`${num} es un número impar.`);
        }
    }
}

let num = [1,2,3,4,5];
parOImpar(num);
