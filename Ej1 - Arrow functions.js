'use strict'

// Regular Function

// function add(a,b){
//     return a + b;
// }

// console.log(add(5,4));


// *EJ1 - conversión de funciones
// Arrow function 

let add = (a,b) => a + b;

console.log(add(6,13));



// * Ej2 - Arrow function sin parámetros

const randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber());


// *EJ3 - Uso de 'this'

class Person{
    constructor(name){
        this.name = name;
    }


   greet = () => console.log(`Hola, ${this.name}.`);

}

    const person = new Person('Maribel');
    person.greet()