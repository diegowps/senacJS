/**
 * Classe Carro / aviao
 * @author Diego
 * 
 * 1 - criar classe modelo (abstração)
 * 2 - criar atributos
 * 3 - criar metodos
 * 4 - criar objetos
 * 5 - adicionar um metodo construtor que gere um numero de chassi aleatorio +2 carros
 * 6 - extend classe carro criar objeto aviao
 * 7 - modificar metodo acelerar para aviao(polimorfismo)
 * 
 */

class Carro {
    constructor(ano, cor, modelo, marca) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
<<<<<<< HEAD
    }
    
    //metodos
    //criarCarro ligarCarro desligarCarro acelerar frear
    //criarAviao aterrizar acelerar decolar 



    criarCarro() {
        console.log("________________________");
        console.log("Carro criado!");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
    }
    dirigir() {
        console.log("Vrum Vrum!");
    }



    
}
=======
        this.preco = preco;
>>>>>>> 8b7eee29c0a6d320ce9f361461874bc3b904d728
