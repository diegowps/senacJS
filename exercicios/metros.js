/**
 * Conversor Metros em Pés
 * @author Diego
 */

const input = require(`readline-sync`)
const divisor = 0.3048
console.clear()

let metros, valor
console.log(`Conversor de Metros(M) em Pés(ft)`)
console.log()

metros = Number(input.question(`Quantos metros deseja converter: `))

valor = metros / divisor

console.log(valor.toFixed(2))



