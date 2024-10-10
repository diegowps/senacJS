/*
* Assincronismo com Promisses
* Fetch API
* @author Diego
*/

const input = require('readline-sync')

console.clear()
console.log('### Busca de CEP ###')
let cep = input.question('Digite o CEP para consulta: ')
//let urlAPI = `https://viacep.com.br/ws/' + cep + '/json/`
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
//teste da captura do cep
console.log(urlAPI)
//uso do promisse (fetch) para buscar dados em uma API
fetch(urlAPI).then(response => console.log(response))
//fetch(urlAPI).then(response => console.log(response.json()))
//fetch(urlAPI).then(response => response.json()).then(data => console.log(data))
//fetch(urlAPI).then(response => response.json()).then(data => console.log(data.logradouro))
fetch(urlAPI)
.then((response) => { //('Busca realizada com sucesso!'))
    return response.json()
})
.then((dados) => {
    console.log(dados.logradouro)
    console.log(dados.bairro)
    console.log(dados.localidade)
    console.log(dados.uf)
})
.catch((error) => {
    console.log(error)
})


