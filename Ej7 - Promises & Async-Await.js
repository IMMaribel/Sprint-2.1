'use strict'

// *EJ1 - Creación de una promesa

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello, world');
    }, 2000);
});

// *EJ2 - Uso de una promesa

myPromise.then((message) => {
    console.log(message);  // Esto imprimirá 'Hola, món' después de 2 segundos
});

// *EJ3 - Promesa con reject

function validInput(input){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (input === 'Hello'){
                resolve('Hello');
            } else {
                reject('Error');
            }
        }, 2000);
    });
}

validInput('Hello')
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });