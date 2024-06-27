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
    person.greet();


// *EJ4 - Arrow function dentro de un loop

const printNumbers = (num) => {
    
    for (let i = 0; i < num.length; i++){
        ((num) => {
            console.log(num);
        })(num[i]);
    }
}

const num = [1,2,3,4,5];

printNumbers(num);

// *EJ5 - Arrow function con 'setTimeout'

setTimeout(() => 
    {console.log('Estamos usando setTimeout.');
    }, "3000");