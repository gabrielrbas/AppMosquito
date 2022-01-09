var altura = 0
var largura = 0
vidas = 1

function alteraDimensionamento() {
    altura = window.innerHeight
    largura = window.innerWidth  
}

alteraDimensionamento()

function randomizaPosicao() {
    
    if (document.getElementById("mosquito")) {
        document.getElementById("mosquito").remove()

        if (vidas > 3) {
            window.location.href = "game_over.html"               
        }
        else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"            
            vidas ++
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura)  - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement("img")
    mosquito.src = "imagens/mosquito.png"
    mosquito.className = randomizaTamanho() + " " + randomizaLado()
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function randomizaTamanho() {
    var mudaAltura = Math.floor(Math.random() * 3)

    switch (mudaAltura) {
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

function randomizaLado() {

    var mudaLado = Math.floor(Math.random() * 2)

    switch (mudaLado) {
        case 0:
            return "ladoA"
            
        case 1:
            return "ladoB"
    }

}