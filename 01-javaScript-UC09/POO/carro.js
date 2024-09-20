


/**
 * Exercício 4 / POO / carros
 * @author Diego
 */


const colors = require('colors')


//Classe modelo (abstração)//




class Carro {
    
    
    //Atributos//
    
    constructor(ano, cor, modelo, chassi) {
        this.ano = ano
        this.cor = cor
        this.modelo = modelo
        this.chassi = chassi
    }
    
    //Métodos//


    criarCarro() {
        console.log("    ______");
        console.log(" __//  ||\\__");
        console.log("|  _     _``-.");
        console.log("'-(_)---(_)--'");
        console.log(`Ano do carro: ${this.ano}`)
        console.log(`Cor do carro: ${this.cor}`)
        console.log(`Modelo do carro: ${this.modelo}`)
        console.log(`Chassi do carro: ${this.chassi}`)
    }
    ligarCarro() {
        console.log(`Ligando ${this.modelo}`.blue)
    }
    desligarCarro() {
        console.log(`Desligando ${this.modelo}`)
    }    
    acelerarCarro() {
        console.log('Vruuuuuuuuuuuuuuuum'.bgBlack)
        console.log('🚗')
    }
}


//Classe modelo com herança



class Aviao extends Carro {
    
    
    
    //Atributos
    constructor(ano, cor, modelo, chassi, envergadura) {
        super(ano, cor, modelo, chassi)
        this.envergadura = envergadura
    }
    
    
    
    
    //Métodos
    criarAviao() {
        console.log(`Ano do avião: ${this.ano}`)
        console.log(`Cor do avião: ${this.cor}`)
        console.log(`Modelo do avião: ${this.modelo}`)
        console.log(`Chassi do avião: ${this.chassi}`)
        console.log(`Envergadura(Cumprimento de uma extremidade a outra) do avião: ${this.envergadura}`)
    }
    ligarAviao() {
        console.log(`Ligando ${this.modelo}`.blue)
    }
    acelerarAviao() {
        console.log(' Vruuuuuuuuuuuuuuuum '.bgRed)
        console.log('       ✈️'.bgBlue)
    }
    fazerPouso() {
        console.log('                      ✈️ '.bgGrey)
    }
}

const carro1 = new Carro(2003, 'Branco', 'Hyunday', '4bfc5896gt9655')
carro1.criarCarro()
carro1.ligarCarro()
carro1.acelerarCarro()
carro1.desligarCarro()
console.log('')
const carro2 = new Carro(2023, 'Amarelo', 'Hyunday', '8TFT7855BR2323')
carro2.criarCarro()
carro2.ligarCarro()
carro2.acelerarCarro()
carro2.desligarCarro()
console.log('')
const aviao1 = new Aviao(2020, 'Verde', 'Boeing 777', 'BR-785', '60.90')
aviao1.criarAviao()
aviao1.ligarAviao()
aviao1.acelerarAviao()
aviao1.fazerPouso()
console.log('')
const aviao2 = new Aviao(2024, 'Branco', 'Novo 777', 'BR-912', '65.80')
aviao2.criarAviao()
aviao2.ligarAviao()
aviao2.acelerarAviao()
aviao2.fazerPouso()

