var altura = 0
var largura = 0

function alteraDimensionamento() {
    altura = window.innerHeight
    largura = window.innerWidth  
}

alteraDimensionamento()

function randomizaPosicao() {
    var posicaoX = Math.floor(Math.random() * largura) - 50
    var posicaoY = Math.floor(Math.random() * altura)  - 50

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    var mosquito = document.createElement("img")
    mosquito.src = "imagens/mosquito.png"
    mosquito.className = "mosquito1"
    mosquito.style.left = posicaoX + "px"
    mosquito.style.top = posicaoY + "px"
    mosquito.style.position = "absolute"
    document.body.appendChild(mosquito)
}