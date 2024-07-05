/**
 * *Regra de 3
 * @author Diego
 * 
 */

const input = require(`readline-sync`)

console.clear()
console.log("Cálculo do valor da porcentagem:")
console.log("X% de Y = valor")

//variaveis
let x, y, valor

//entrada
x = Number(input.question(`Digite o valor de X: `))
y = Number(input.question(`Digite o valor de Y: `))
//processamento
valor = (x * y) / 100
//saida 
console.log(`${x}% de ${y} = ${valor.toFixed(0)}`)

