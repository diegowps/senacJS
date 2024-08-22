/**
 * Atividade 3 (Avaliação em dupla) Desenvolver uma calculadora no console usando funções
 * Calculadora "function" para terminal console
 * 
 * @author Diego Pontes
 * @author Emmanuel L. Nogueira
 */

const input = require("readline-sync");

console.clear();

function somar(num1, num2, operacao) {
    return (console.log(num1 + num2));
}

console.log("Calculadora")

num1 = Number(input.question("digite o primeiro numero: "))
num2 = Number(input.question("digite o segundo numero: "))
console.log()
operacao = Number(input.question("Qual a operação matemática deseja realizar?: "));

 
somar();


