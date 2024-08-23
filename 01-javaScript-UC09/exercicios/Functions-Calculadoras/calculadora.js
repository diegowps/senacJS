/**
 * Atividade 3 (Avaliação em dupla) Desenvolver uma calculadora no console usando funções
 * Calculadora "function" para terminal console
 * 
 * @author Diego Pontes
 * @author Emmanuel L. Nogueira
 */

const input = require("readline-sync");
let operacao;    
console.clear();

function somar(num1, num2) {
    return (console.log(num1 + num2));
}
function subtrair(num1, num2) {
    return (console.log(num1 - num2));
}
function multiplicar(num1, num2) {
    return (console.log(num1 * num2));
}
function dividir(num1, num2) {
    return (console.log(num1 / num2));
}
function porcentagem(num1, num2) {
    return (console.log(num1 * num2 / 100));
}

console.log("Calculadora")

num1 = Number(input.question("digite o primeiro numero: "))
num2 = Number(input.question("digite o segundo numero: "))
console.log("As operações disponíveis são: ")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 - Divisão")
console.log("5 - Porcentagem")
operacao = Number(input.question("Qual o numero da operacao matematica que deseja realizar?: "));

switch (operacao) {
    case 1: somar(num1, num2);
        break;
        case 2: subtrair(num1, num2);
        break;
        case 3: multiplicar(num1, num2);
        break;
        case 4: dividir(num1, num2);
        break;
        case 5: porcentagem(num1, num2);
        break;
    default: console.log("Operação inválida");
}
 


