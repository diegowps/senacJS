/**
 * jogo do dado 
 * @author joão vitor
 */

const input = require('readline-sync')

let face

console.clear()
console.log("jogo do dado")
input.question("pressione a tecla enter para mudar o dado:")
// sorteio da face de um dado
// Math classe matematica
// floor conversão para numeros inteiros
// random () * (gerador de numero aleatorios)
face = Math.floor(Math.random() * 6)
switch(face) {
    case 0: 
    console.log("⚀")
    break
    case 2: 
    console.log("⚁")
    break
    case 3: 
    console.log("⚂")
    break
    case 4: 
    console.log("⚃")
    break
    case 5: 
    console.log("⚄")
    break
}

