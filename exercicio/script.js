const prompt = require('prompt-sync')();

const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(parseInt(prompt(`Digite o ${i + 1}º número: `)));
}

const quadrados = numeros.map((numero) => numero * numero);


console.log(quadrados);


