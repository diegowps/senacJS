/**
 * Estudo das estruturas while e do-while
 * @author diego
 */

const input = require(`readline-sync`)

//modificar os valores para testar a diferença entre while e do-while
let x = 1
let y = 1

console.clear()

while (x < 11) {
    console.log("teste da estrutura while")
    x++
}

input.question("Pressione a tecla [Enter] para continuar")
console.clear()

do {
    console.log("teste estrutura do-while")
    y++
} while (y < 11)
