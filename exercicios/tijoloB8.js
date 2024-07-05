/**
 * Cálculo da quantidade de tijolos baianos 8 furos por metro quadrado (M²), sabendo que 1m² = 28 tijolos
 * @author Diego
 */

const input = require('readline-sync')

let m2, tijolos

console.clear()
console.log("Cálculo da quantidade de tijolos por metro quadrado (tijolo baiano 8 furos)")

// entrada
m2 = Number(input.question("Quantos metros quadrados(M2) voce precisa? "))

// processamento
tijolos = m2 * 28

//saida
console.log(`Você precisará de ${tijolos} tijolos`)

