/**
 * Estrutura de dados
 * Objetos
 * @author Diego
 */

const funcionario1 = {}
console.log(typeof(funcionario1))
console.log(funcionario1)

//adicionando atributos ao objeto - dados a estrutura(CRUD create)
funcionario1.nome = 'Diego'
funcionario1.cargo = 'Professor'
funcionario1.salario = 5000
funcionario1.ativo = true
funcionario1['data de admissão'] = '01/01/2019'
funcionario1.email = "ads@tables.com"

//listar os dados da estrutura (CRUD Read)
console.log(funcionario1)
console.log(funcionario1.cargo)
console.table(funcionario1)

//alterando um atributo do objeto (CRUD Update)
funcionario1.salario = 6000
console.log(funcionario1)
funcionario1.ativo = false
console.table(funcionario1)

//removendo um atributo do objeto (CRUD Delete)
delete funcionario1.email
console.log(funcionario1)

const funcionario2 = {
    nome: 'Maria',
    cargo: 'Gerente',
    salario: 8000,
    ativo: true,
    'data de admissão': '01/01/2015'
}
console.log(funcionario2)

const endereco1 = {
    logradouro: 'Rua das Flores',
    cidade: 'Ghotan City',
    estado: 'New Jersey',
}
console.log(endereco1)

const funcionario3 = {
    nome: 'Alfred Pennyworth',
    cargo: 'Diretor residencial',
    email: "alfredinho@wayne.corp.nj",
    salario: 12000,
    ativo: true,
    'data de admissão': '01/01/2010',
    ...endereco1 //...spread operator (une dois objetos ou estruturas de dados)
}
console.log(funcionario3)

const funcionario4 = {
    nome: 'Bruce Wayne',
    cargo: 'CEO',
    email: "b@wayne.com",
    salario: 20000.00,
    ativo: true,
    armadura: {
        versao: 'Batman',
        ano: 2021,
        cor: 'preta',
        reator: 'rsx-7',
        armas: ['batarang', 'batgancho', 'batcinto']
    },
    switUp: () => {
        console.log('I am Batman🤖 🦇' )
    }
}
console.log(funcionario4)
console.log(funcionario4.armadura)
console.log(funcionario4.armadura.versao)
console.log(funcionario4.armadura.armas)
console.log(funcionario4.armadura.armas[1])
funcionario4.switUp()
