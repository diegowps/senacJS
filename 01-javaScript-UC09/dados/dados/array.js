

/*
*   @author Diego
*/


//array multidimensional (matriz)
let boletim = [[8,7,9,3], [4,5,8,6]] // *linhas de ma tabela
console.log(boletim)
console.table(boletim)
console.log(boletim[0][1]) // [linhas][colunas]

//estruturas de dados >>>>>>>>>>>
let alunosEM1 = ['Diego', 'Lucas', 'Maria', 'José', 'Carlos']

//exibindo o tamanho do vetor
console.log(alunosEM1.length)

// CRUD (create read update delete) - são as operações básicas de um sistema com dados
// CRUD read
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD (create read update delete)

//CRUD create (adicionando dados ao vetor)
alunosEM1.push('João') //adiciona um elemento ao final do vetor
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD update (alterando um elemento do vetor)
alunosEM1[1] = "Ana"
console.log(alunosEM1)
console.table(alunosEM1)

//CRUD delete (removendo um elemento do vetor)
delete alunosEM1[3] //remove o elemento, mas mantém o índice

//alunosEM1.pop() //remove o último elemento do vetor
console.log(alunosEM1)
console.table(alunosEM1)

//percorrendo um vetor >>>>>>
let notas = [3, 8, 5, 9, 2]
console.log(notas)
console.table(notas)

//percorrendo um vetor com o laço FOR
for(let i = 0; i < notas.length; i++){
    console.log(`Nota: ${notas[i]}`)
}

// forEACH (simplifica o laço FOR para percorrer um vetor)
notas.forEach((n) => {
    console.log(`Nota: ${n}`)
})

//percorrendo um vetor com o laço FOR OF    (para cada) >>>>>>>>    (não é necessário o índice)     (não é possível alterar o vetor)    (não é possível percorrer um objeto)
for(let nota of notas){
    console.log(`Nota: ${nota}`)
}

//percorrendo um vetor com o laço FOR IN    (para cada) >>>>>>>>    (é possível percorrer um objeto)    (é possível alterar o vetor)        (é possível percorrer um objeto)    (não é possível percorrer um objeto)
for(let i in notas){
    console.log(`Nota: ${notas[i]}`)
}

//exemplo de vetor de objetos   >>>>>>>>                            (array de objetos)  (cada objeto é um aluno)    (cada aluno tem nome e nota)
let alunos = [
    {nome: 'Diego', nota: 8},
    {nome: 'Lucas', nota: 7},
    {nome: 'Maria', nota: 9},
    {nome: 'José', nota: 3},
    {nome: 'Carlos', nota: 5}
]

//map() - percorre um vetor e retorna um novo vetor modificado 
//map() - não altera o vetor original
//map() - retorna um novo vetor com a mesma quantidade de elementos
//map() - recebe uma função de callback com um parâmetro que é o elemento do vetor
//map() - pode receber um segundo parâmetro que é o índice do elemento
//map() - pode receber um terceiro parâmetro que é o vetor original
//map() - é uma função de alta ordem
//map() - é uma função de transformação
//map() - é uma função pura
//map() - é uma função imutável
//map() - é uma função que não altera o vetor original
//map() - é uma função que retorna um novo vetor
//map() - mapeamento de dados de um vetor (percorrer e mapear)
//Exemplo: aumentar a nota de cada aluno em 1 ponto
let notasAtualizadas = alunos.map((na) => {
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)
//exemplo 2: Conversão do sistema de pontos para letras
//NA (não atendeu) - nota < 5
//PA (parcialmente atendeu) - nota >= 5 e < 7
//AT (atendeu) - nota >= 7 e < 9
let notasConvertidas = notas.map((nc) => {
    if(nc < 5){
        return 'NA'
    }else if(nc >= 5 && nc < 7){
        return 'PA'
    }else if(nc >= 7 && nc < 9){
        return 'AT'
    }else{
        return 'AC'
    }
})

// let notasAtualizadas = alunos.map((aluno) => {
//     return aluno.nota + 1
// })
console.log(notas)
console.log(notasConvertidas)

//iniciando(criando) um vetor como objeto
let alunoEM2 = new Array('Diego', 'Lucas', 'Maria', 'José', 'Carlos')
console.log(alunoEM2)
console.table(alunoEM2)

// estrutura de dados usando array e objetos
let alunoEM3 = [
    {
        nome: "Bruce",
        idade: 16,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 37,
        bolsista: true
    },
    {
        nome: "Clark",
        idade: 16,
        bolsista: true
    },
    {
        nome: "Barry",
        idade: 45,
        bolsista: false
    }
]

console.log(alunoEM3)
console.table(alunoEM3)

//filtros
//exemplo 1: ordenar de a-z
alunoEM3.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})

console.table(alunoEM3)
// ordenar de z-a
alunoEM3.sort((a, z) => {
    return (z.nome.localeCompare(a.nome))
})

// exemplo 2: ordenar por idade
alunoEM3.sort((x, y) => {
    return x.idade - y.idade
})
console.table(alunoEM3)

// ATENÇÂO !!!
//na filtragem criar uma cópia para exibição (... cópia do array)
let alunosOrdenados = [...alunoEM3]
console.table(alunosOrdenados)
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)

//buscas personalizadas
//exemplo 1: buscar alunos bolsistas
console.log(alunoEM3.filter((b) => {
    return b.bolsista == true
}))
//Exemplo 2: buscar alunos com idade maior ou igual a 18 anos
console.log(alunoEM3.filter((i) => {
    return i.idade >= 18
}))

//JSON / SQL / NoSQL / MongoDB / Firebase / Firestore / MySQL / PostgreSQL / Oracle / SQL Server / SQLite / MariaDB / MongoDB Atlas / MongoDB Compass / MongoDB Shell



