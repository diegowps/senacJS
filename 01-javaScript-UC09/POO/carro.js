/**
 * Classe Carro / aviao
 * @author Diego
 */

class Carro {
    constructor(ano, cor, modelo, marca) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
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