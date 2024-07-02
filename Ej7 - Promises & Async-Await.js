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

// *EJ4 - Uso de Async/Await

function imprimirEnDosSeg(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, world');
        }, 2000);
    });
}

async function llamadaAsync(){
    const result = await imprimirEnDosSeg();
    console.log(result);
}

llamadaAsync()

// *EJ5 - Gestión de errores con Async/Await

async function llamadaAsync() {
    try {
        const result = await imprimirEnDosSeg();
        console.log(result);
    } catch (error) {
        console.error('Error:', error);
    }
}

llamadaAsync();

// *EJ6 - Promise.all

let promise1 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 2000, 'Hola');
});

let promise2 = new Promise ((resolve, reject) => {
    setTimeout(resolve, 3000, 'Adiós');
});

Promise.all([promise1, promise2])
    .then((values) => {
        console.log(values);
    })
    .catch((reason) => {
        console.log(reason);
    });