/**
 * 
 * @author Diego
 */


class Usuarios {
    //atributos
    constructor(login, senha) {
        this.login = login; // atributo publico
        //--------------------------------------------------------
        let _senha = senha; //atributo privado(encapsulamento)
        //metodo para obter a senha(get)
        this.getSenha = () => { 
    }
}






//metodos
Logar() {
    console.log(`Usuário: ${this.login} logado com sucesso!`);


}



//sistema
console.clear()
//criar um novo usuaario
const user1 = new Usuarios("admin, 123456")
user1.Logar()
user1.setSenha("123@S3n4c") // setar a senha do usuario
user1.logar()