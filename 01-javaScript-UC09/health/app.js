/**
 * APP Health Calc
 * Calculadora de métricas de saúde
 * @author Diego
 * @version 1.0
 * @link https://github.com/professorjosedeassis/health
 */

// variáveis
let peso, altura, imc, idade, fcm, litros, get

function calcular() {
    //captura das variáveis idade, peso e altura
    idade = frmHealth.txtIdade.value
    peso = frmHealth.txtPeso.value
    altura = (frmHealth.txtAltura.value) / 100 //converter cm em m
    //validação de campos obrigatórios(todos)
    if (frmHealth.txtIdade.value === "") {
        alert("Preencha a sua idade")
        frmHealth.txtIdade.focus()
    } else if (frmHealth.txtPeso.value === "") {
        alert("Informe o seu peso")
        frmHealth.txtPeso.focus()
    } else if (frmHealth.txtAltura.value === "") {
        alert("Informe a sua altura em centímetros")
        frmHealth.txtAltura.focus()
    } else if (document.getElementById("m").checked === false && document.getElementById("f").checked === false) {
        alert("Selecione o sexo")
    } else if (frmHealth.nivel.value === "") {
        alert("Selecione o nível de atividade")
    } else {
        // lógica principal
        // Cálculo do IMC
        imc = peso / (altura * altura)
        document.getElementById("imc").innerHTML = `IMC: ${imc.toFixed(2)}`
        if (imc < 18.5) {
            document.getElementById("status").innerHTML = "Abaixo do peso"
            document.getElementById("grafico").src = "img/baixo.png"
        } else if (imc < 25) {
            document.getElementById("status").innerHTML = "Peso normal"
            document.getElementById("grafico").src = "img/normal.png"
        } else if (imc < 30) {
            document.getElementById("status").innerHTML = "Sobrepeso"
            document.getElementById("grafico").src = "img/sobrepeso.png"
        } else if (imc < 35) {
            document.getElementById("status").innerHTML = "Obesidade grau I"
            document.getElementById("grafico").src = "img/obesidade1.png"
        } else if (imc < 40) {
            document.getElementById("status").innerHTML = "Obesidade grau II"
            document.getElementById("grafico").src = "img/obesidade2.png"
        } else {
            document.getElementById("status").innerHTML = "Obesidade extrema"
            document.getElementById("grafico").src = "img/obesidadeExtrema.png"
        }
        // FCM
        fcm = 208 - (0.7 * idade)
        document.getElementById("freq").innerHTML = fcm
        // consumo de água
        litros = (peso * 35) / 1000
        document.getElementById("agua").innerHTML = `${litros.toFixed(1)} litros/dia`
        //get
        //peso 1: capturar o valoro valor da lista(combobox)
        let lista = document.getElementById("atividade")
        let valor = Number(lista.options[lista.selectedIndex].value)
        console.log(valor)
        //passo 2: executar uma formula diferente para o sexo selecionado


        if (document.getElementById("m").checked === true) {
            get = (66 + (13.7 * peso) + (5 * (altura * 100) - (6.8 * idade))) * valor
        } else {
            get = (655 + (9.6 * peso) + (1.8 * (altura * 100) - (4.7 * idade))) * valor
        }

        // passo 3: exibir o resultado
        //(Math.floor converte para número inteiro)
        document.getElementById("calorias").innerHTML = '${Math.floor(get)} calorias/dia'


    }
}

function limpar() {
    document.getElementById("imc").innerHTML = "IMC"
    document.getElementById("status").innerHTML = "Status"
    document.getElementById("freq").src = "FCM"
    document.getElementById("calorias").innerHTML = "Calorias/Dia"
    document.getElementById("agua").innerHTML = "Litros/Dia"
    document.getElementById("grafico").src = "img/reset.png" 

}