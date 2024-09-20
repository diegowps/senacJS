/* simples carrossel de imagens */
                [0]             [1]            [2]
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"];
let intervalo = 3000; // ajuste do tempo de troca de imagem
let indice = 0; //apoio a logica

show()

function show() {
    //setTimeout gera um temporizador
    setTimeout() => {
        document.getElementById("slide").className += 'fadeOut'
        
        /*.src = (`img/${slides
            [indice]}`)
        }), 1000       
        indice++*/
        setTimeout(() => {
            document.getElementById('slide').src = (`img/${slides
                [indice]}`)
            document.getElementById('slide').className = ''    
        }, 1000)
        indice++
        if (indice === slides.length) {
        //.length (tamanho maximo)
            indice = 0
        }
        setTimeout(show, intervalo) //repete a função a cada 3s
}
}