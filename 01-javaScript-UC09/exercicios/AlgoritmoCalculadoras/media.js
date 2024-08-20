/**
 * Cálculo da média de 2 notas
 * @author Diego
 */

//importar pacte readline-sync (input no console)
const input = require('readline-sync')

//variaveis
let nota1, nota2, media

console.clear()
console.log("Cálculo da média")
//Captura da nota pelo pacote readline-sync
//entrada
nota1 = Number(input.question("digite a nota 1: "))
nota2 = Number(input.question("Digite a nota 2: "))
//processamento
media = (nota1 + nota2) / 2
//saida
console.log(`Média: ${media.toFixed(1)}`)


