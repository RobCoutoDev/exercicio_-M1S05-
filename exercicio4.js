const prompt = require('prompt-sync')();


const numeros = [];


for (let i = 0; i < 5; i++) {
  numeros.push(parseInt(prompt(`Digite o ${i + 1}º número: `)));
}


const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

console.log(`A soma dos números é: ${soma}`);
