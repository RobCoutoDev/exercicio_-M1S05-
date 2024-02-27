const prompt = require('prompt-sync')();


const numeros = [];


for (let i = 0; i < 5; i++) {
  numeros.push(parseInt(prompt(`Digite o ${i + 1}º número: `)));
}


const pares = numeros.filter((numero) => numero % 2 === 0);


console.log(pares);
