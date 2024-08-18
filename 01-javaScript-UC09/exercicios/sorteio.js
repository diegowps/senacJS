/**
 * 
 */

const input = require("readline-sync")

let sorteio

console.clear()

input.question(`Pressione a tecla [Enter] para sortear um numero: `)

sorteio = Number(Math.floor(Math.random() * 16 + 1))

console.log(sorteio)
