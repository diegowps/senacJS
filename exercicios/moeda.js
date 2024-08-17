/**
 * converter real para euro
 * @author joao vitor souto
 */


console.clear()
const input = require('readline-sync')

console.log('conveter real para euro')
let real, euro, valor

real = Number(input.question('digite o valor do real:'))
euro = Number(input.question("digite o valor do euro:"))
valor = real / euro

console.log(`${valor.toFixed(2)}Euros`)
