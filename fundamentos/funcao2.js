/**
 * 
 */

//importante funções atribuidas obrigatoriamente precisam ser criadas no inicip do código (antes de serem executadas)

//função literal com parametros
function somar(num1, num2) {
    return (console.log(num1 + num2))
}

somar(2, 5)

//função atribuida (função anonima) com parametros 
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(4, 9)

//função atribuida simplificada (arrow function) com parametros

let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}
somarAF(2, 2)

//função atribuida simplificada (arrow function) com parametros 1 linha de codigo (neste caso o return é implicito)

let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(3, 3)