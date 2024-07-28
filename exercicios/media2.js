/**
 * media com resposta aprovado
 * @author Diego
 */

//Importar readline-sync

const input = require('readline-sync')

//Variaveis
let nota1, nota2, media

console.clear()
console.log('Calculo média para aprovação: ')
nota1 = Number(input.question("Digite a nota 1: "))
nota2 = Number(input.question("Digite a nota 2: "))
//processamento
media = (nota1 + nota2) / 2
//Saida
console.log(`Média: ${media.toFixed(1)}`)
if (media >= 5.0) {
    console.log("Aprovado! Parabéns ;)")
} else {
    console.log("Reprovado! Tente novamente :)")
}