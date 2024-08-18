/**
 * *Desconto
 * @author Diego
 * 
 */
const input = require(`readline-sync`)
console.clear()

// let x, y, z

// x = Number(input.question(`Digite o valor de desconto: `))
// y = Number(input.question(`Digite o valor total da compra: `))

// z = ((x * y) / 100 - y) * (-1)

// console.log(`${x}% de ${y} = ${z.toFixed(0)}`)

let total, desconto, totaldesconto
total = Number(input.question("Digite o valor total: "))

//processamento 2
totalDesconto = total - valor

//saida 2
console.log(`Total com desconto: R$ ${totaldesconto}` )