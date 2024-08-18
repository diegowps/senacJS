/**
 * APP para verificar em função da idade a obrigação de votar ou não
 * @author Diego
 */


const input = require('readline-sync')
console.clear

//variaveis
let idade

idade = Number(input.question("digite a sua idade: "))
if (idade < 16) {
    console.log("Sem direito a votar")
  } else if (idade >= 18 && idade < 71){
    console.log("Voto obrigatorio")
  } else {
    console.log("voto falcultativo")
  }
