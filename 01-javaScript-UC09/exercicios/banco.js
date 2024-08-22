/**
 * Exercicios de fixação dos conceitos de POO
 * Agencia bancária
 * @author Diego
 */

const colors = require("colors")

//classe modelo
class Conta {
    //atributos encapsulados
    constructor(titular, numero, saldo) {
        this._titular = titular
        this._numero = numero
        this._saldo = saldo
    }
    //metodos acessores
        getNumero() {
            return this._numero
        }
        getTitular() {
            return this._titular
        }
        getSaldo() {
            return this._saldo
        }
        exibirSaldo() {
            console.log(`Saldo atual da conta ${this.getTitular()} é R$ ${this.getSaldo().toFixed(2)}`)
        }
        depositar(valor) {
            this._saldo += valor
            console.log(`Deposito de R$ ${valor.toFixed(2)}`.green)
        }
        sacar(valor) {
            if (valor <= this._saldo) {
                this._saldo -= valor
                console.log(`Saque de R$ ${valor.toFixed(2)}`.red)
            } else {
                console.log(`Saldo insuficiente para saque de R$ ${valor.toFixed(2)}`.red)
            }
        }
        pix(valor, destino) {
            if (valor > this._saldo) {

            } else {
                
        
        }



    }

    console.clear();
    console.log('BANCO')

    console.log('')    
    console.log('██████   █████  ███    ██  ██████  ██████  '.blue) 
    console.log('██   ██ ██   ██ ████   ██ ██      ██    ██ '.blue) 
    console.log('██████  ███████ ██ ██  ██ ██      ██    ██ '.blue) 
    console.log('██   ██ ██   ██ ██  ██ ██ ██      ██    ██ '.red) 
    console.log('██████  ██   ██ ██   ████  ██████  ██████  '.red) 
    console.log('') 
    console.log('') 
                                           
                                           


    let cc1 = new Conta(1, "Robson Vasco", 3000)
    console.log(`Cliente: ${cc1.getTitular()} | conta: ${cc1.getNumero()}`.green)
    cc1.exibirSaldo()
    cc1.depositar(1000)
    cc1.exibirSaldo()

    let cc2 = new Conta(2, "Leandro Sanchez", 75000);
    console.log(`Cliente: ${cc2.getTitular()} | conta: ${cc2.getNumero()}`.green)
    cc2.exibirSaldo()
    cc2.depositar(5000)
    cc2.exibirSaldo()
    cc2.sacar(1000)
    cc2.exibirSaldo()

    let cc3 = new Conta(3, "Sierlene Ramos", 80000);
    console.log(`Cliente: ${cc3.getTitular()} | conta: ${cc3.getNumero()}`.green)
    cc3.exibirSaldo()
    cc3.depositar(10000)
    cc3.exibirSaldo()
    cc3.sacar(90000)
    cc3.exibirSaldo()


