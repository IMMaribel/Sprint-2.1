'use strict'

// *EJ1 - Creación de una promesa

const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello, world');
    }, 2000);
});

