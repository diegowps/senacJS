/**
 * Estudo das variáveis - tipagem dinâmica
 * Const / Var / Let
 * @author Diego
 */
console.clear()
console.log("strings______________________________________")
let nome = "Diego"
console.log(typeof(nome))
console.log(nome)
//concatenação (unir um texto com o conteúdo de uma variável)
console.log("Aluno: " + nome) //evitar concatenar desta forma
console.log(` aluno: ${nome}`)
console.log("números______________________________________")
let peso = 80
let altura = 1.65
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //toFixed(2) arredondar 2 casas decimais
//ATENÇÃO !!
console.log(10/0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log("3x" - 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2) //float ou double
console.log("booleanos__________________________________________")
let chave = true
console.log(typeof(chave))
let lampada = false
console.log(typeof(lampada))
console.log(`Chave: ${chave} Lâmpada: ${lampada}`)
