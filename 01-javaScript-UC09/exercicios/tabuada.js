/**
 * tabuada
 * @author Diego
 */

const input = require ("readline-sync")
//variaveis
let valor

console.clear()
console.log("tabuada")
valor = Number(input.question("Digite o valor da tabuada"))

for(let i = 1; i < 11; i++ ) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}
