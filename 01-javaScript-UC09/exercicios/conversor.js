/**
 * Conversor de moedas de Real para Euro ( Real - Euro )
 * @author Diego
 * 
 * 
 */

const input = require(`readline-sync`)

let real, euro, total

console.log(`Conversor de Real para Euro`)

//entrada
real = Number(input.question("Digite o total em reais a serem convertidos: "))
euro = Number(input.questio("Digite a cotação do valor do Euro: "))

//processamento
total = real / euro
//saida
console.log(`R$ ${real.toFixed(2)} equivalem a ${total.toFixed(2)} euros`)











