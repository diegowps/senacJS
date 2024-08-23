/**
 * Classe Carro
 * @author Diego
 */

class Carro {
    constructor(marca, modelo, ano, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
    }
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getAno() {
        return this.ano;
    }
    getCor() {
        return this.cor;
    }
    getPreco() {
        return this.preco;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setAno(ano) {
        this.ano = ano;
    }
    setCor(cor) {
        this.cor = cor;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    imprimir() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Preço: ${this.preco}`);
    }
}