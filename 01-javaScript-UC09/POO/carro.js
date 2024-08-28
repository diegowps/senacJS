/**
 * Classe Carro
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
    constructor(marca, modelo, ano, cor, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.preco = preco;
