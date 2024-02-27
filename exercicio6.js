const prompt = require('prompt-sync')();


const frutas = ['Maçã', 'Banana', 'Laranja'];

frutas.push(prompt('Digite o nome da nova fruta: '));

frutas.shift();

console.log(frutas);
