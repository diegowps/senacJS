/**
 * App flex
 * @author Diego
 */

// importação de pacotes
const colors = require('colors')
const input = require('readline-sync')

//variaveis
let etanol, gasolina

console.clear()
console.log("Etanol ou Gasolina?")

//entrada
etanol = Number(input.question("Digite o valor do etanol: "))
gasolina = Number(input.question("Digite o valor da Gasolina: "))

//processamento/saída
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol".bgGreen)
} else {
    console.log("Abastecer com Gasolina".bgRed)
}

