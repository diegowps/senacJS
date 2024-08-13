/**
 * Exemplo de uso da estrura do while
 */
const input = require("readline-sync");
let face;
let confirma = "n";

//alt+shift+f preety cod

do {
  console.clear();
  console.log("Jogo do dado");
  input.question("Pressione a tecla [Enter] para jogar o dado: ");
  face = Math.floor(Math.random() * 6 + 1);
  console.log(`Face do dado: ${face} `);
  confirma = input.question("Deseja jogar novamente? (s/n): ")
} while (confirma === "s");
