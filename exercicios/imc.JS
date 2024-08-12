/**
 * calculo do IMC
 * @author JOÃO vitor
 */

const colors = require('colors')
const input = require('readline-sync')

console.clear()

// variaveis
let nome, peso, idade, altura, imc

console.log("  ___ __  __  ___ ")
console.log(" |_ _|  \\/  |/ __|")
console.log("  | ||||\\/| | (__ ")
console.log(" |___|_|  |_|\\___|")
                 
//entrada
console.log("")
nome = input.question("digite o seu nome:")
idade = Number(input.question("Digite a sua idade "))
peso = Number(input.question("digite o seu peso em KG: ").replace(",", "."))
altura = Number(input.question("digite sua altura em cm").replace(",", "."))

//processamento

imc= peso / ((altura  / 100) * (altura / 100))


//saida

console.log("")
console.log("---------------------------------------------")
console.log("ficha do aluno".italic.bold)
console.log(`nome: ${nome}`)
console.log(`ídade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log (`IMC: ${imc.toFixed(2)}`)
if (imc < 18.5) {
    console.log("abaixo do peso".cyan)    
} else if (imc < 25) {
    console.log("peso normal".green)
} else if (imc < 30) {
    console.log("acima do peso".yellow)
} else if (imc < 35) {
    console.log("obesidade I".yellow)
} else if (imc < 40) {
    console.log("Obesidade Grau II".red);
} else {
    console.log("Obesidade Grau III".red.bold);
}
console.log("");
console.log("----------------------------------");
