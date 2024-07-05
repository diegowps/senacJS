/**
 * 
 * 
 * @author Diego
 * 
 */

//

const input = require(`readline-sync`)

let comprimento, largura, altura, litros 

console.clear()
console.log("Cálculo do volume de um aquário")

//entrada
comprimento = Number(input.question("Digite o comprimento em cm do aquario: "))
largura = Number(input.question("Digite a largura em cm do aquario: "))
altura = Number(input.question("Digite a altura em cm do aquario: "))

//processamento
litros = (comprimento * largura * altura) / 1000

//saida
console.log(`No aquário cabem ${litros.toFixed(1)} litros`)
