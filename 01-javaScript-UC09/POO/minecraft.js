/**
 *
 * @author Diego
 */

//Classe modelo (abstração)

class Bloco {
  //atributos
  constructor(resistencia, textura) {
    this.resistencia = resistencia;
    this.textura = textura;
  }
  //metodos
  criarBloco() {
    console.log("------------------------------------");
    console.log("┍━┑");
    console.log("┕━┙");

    console.log(`Bloco de ${this.textura}`);
    console.log(`Resistencia: ${this.resistencia}`);
  }
  construir() {
    console.log(`Bloco de ${this.textura} colocado.`);
  }
  minerar() {
    console.log("☐ ☐ ☐ Recursos obtidos!");
  }
  //polimorfismo (sobrescrita de um metodo existente)
  minerar() {
    console.log("☐ ☐ ☐ Recursos obtidos!");
  }
}

//Classe modelo com herança (extends)

class Enxada extends Bloco {
  //atributos
  constructor(resistencia, textura, conquista) {
    super(resistencia, textura);
    this.conquista = conquista;
  }

  //metodos
  criarEnxada() {
    console.log("---------------------------------------------");
    console.log("-_");
    console.log(" /");
    console.log(`Enxada de ${this.resistencia}`);
  }
  arar() {
    console.log("._._._. Terra arada!");
    if (this.conquista === true) {
      console.log("*** Conquista obtida!");
    }
    //Polimorfismo (sobrescrita de um metodo)
  }
  minerar() {
      console.log("xxx Dano atribuido XXX");
    }
  }

//criação do mundo

console.clear();
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ");
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|");
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | | ");
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|");
console.log("");

//criando um objeto (bloco de terra)
const bloco1 = new Bloco(1, "terra");
//console.log(typeof (bloco1))
bloco1.criarBloco();

//criando bloco de madeira
const bloco2 = new Bloco(2, "Madeira");
bloco2.criarBloco();
bloco2.construir();

//Criando um bloco de pedra
const bloco3 = new Bloco(5, "pedra");
bloco3.criarBloco();
bloco3.minerar();

//criando enxada de madeira
const enxada1 = new Enxada(2, "madeira", false);
enxada1.criarEnxada();
enxada1.arar();

//criando enxada de ferro
const enxada2 = new Enxada(5, "Ferro", true);
enxada2.criarEnxada();
enxada2.arar();

//criando uma enxada de diamante (polimorfismo)
const enxada3 = new Enxada(10, "diamante", false);
enxada3.minerar()

//https://professorjosedeassis.github.io/javaSE/#/62
