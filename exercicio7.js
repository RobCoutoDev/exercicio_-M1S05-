const prompt = require('prompt-sync')();


const frutas = [];

for (let i = 0; i < 3; i++) {
  frutas.push(prompt(`Digite o nome da ${i + 1}ª fruta: `));
}

console.log(`A segunda fruta é: ${frutas[1]}`);
