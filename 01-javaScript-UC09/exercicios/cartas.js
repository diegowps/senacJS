/**
 * jogo de cartas
 * exemplo de uso de um array
 */

const input = require('readline-sync')
console.clear()
console.log("Sorteio de cartas")
input.question("Pressione [enter] para sortear as cartas")
//            0    1    2    3
let nipes = ["♥", "♠", "♦", "♣"]
//            0   1   2   3   4   5   6   7   8    9   10  11  12
let faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
//apoio a logica
//az de ouros
console.log(`${faces[0]}${nipes[2]}`)
//Dama de copas
//console.log(`${faces[11]}${nipes[0]}`)

//Lógica para sortear uma carta

let = nipe = nipes[Math.floor(Math.random() * 4)]
let = face = faces[Math.floor(Math.random() * 13)]
console.log(`Sua carta é: ${face}${nipe}`)






