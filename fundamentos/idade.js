/**
 * Estudor da estrutura de cotrole if-else
 * @author Diego
 */

const input = require('readline-sync')

let idade

console.clear()
console.log("Estudos da estrutura if-else")
console.log("validar maioridade")
idade = Number(input.question("Digite a sua idade: "))
// Uso da estrutura if-else para validar a idade

if (idade < 18) {
    console.log("Menor de idade")
} else {
    console.log("Maior de idade")
}
