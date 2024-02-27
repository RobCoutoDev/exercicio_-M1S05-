const prompt = require('prompt-sync')();


const numeros = [];

for (let i = 0; i < 5; i++) {
  numeros.push(parseInt(prompt(`Digite o ${i + 1}º número: `)));
}


for (let i = 0; i < numeros.length; i++) {
  console.log(`Número ${i + 1}: ${numeros[i]}`);
}
