




const input = require(`readline-sync`)

let face

console.clear()
console.log("jogo do dado")
input.question("Pressione a tecla [Enter] par jogar o dado: ")
//sorteio face do dado
// Math (classe mateatica)
// .floor (conversao numeros inteiros
//random() * 6 (gerador de numeros aleatorios))
face = Math.floor(Math.random() * 6 + 1)
console.log(`Face do dado: ${face}`)

switch(face) {
    case 0:
        console.log("\u{2680}")
        break
    case 1:
            console.log("\u{2680}")
            break    
    case 2:
                console.log("\u{2680}")
                break
    case 3:
                    console.log("\u{2680}")
                    break   
    case 4:
                        console.log("\u{2680}")
                        break
    case 5:
                            console.log("\u{2680}")
                            break  
    
}
