
const sonico = document.querySelector(".sonico");
const espinho = document.querySelector(".espinhos")
const game = document.querySelector(".game");
const btnAvancar = document.querySelector(".btn-avancar")
let pontosTelaSonic = document.querySelector(".pontos");

btnAvancar.classList.add("sumir")

let pontos = 0
let validaPontos = "Pausado"

game.addEventListener("click", function(){
    pular()
    espinho.classList.add("iniciar");
    if(pontos >= 300){
        espinho.classList.remove("iniciar");
        espinho.classList.add("velocidade-aumentada")
    }
    validaPontos = "EmJogo"
})

function PontuacaoTotal(){
    if(validaPontos == "EmJogo"){
        pontos = pontos + 10
        pontosTelaSonic.textContent = pontos
    }
    if(pontos >= 600){
        btnAvancar.classList.remove("sumir")
    }
}

setInterval(()=>{
    PontuacaoTotal()
},500)

function pular(){
    if(sonico.classList != "pulo"){
        sonico.classList.add("pulo")
        sonico.style.backgroundImage = `url("../img/sonic-correndo.gif")`
        setTimeout(()=>{
            sonico.classList.remove("pulo")
        },400)
    }
}

let estaVivo = setInterval(() =>{
    //EIXO Y
    let sonicoTop = parseInt(window.getComputedStyle(sonico).getPropertyValue("top"));
    //EIXO X
    let espinhoLeft = parseInt(window.getComputedStyle(espinho).getPropertyValue("left"));

    if(espinhoLeft < 60 && espinhoLeft > 0 && sonicoTop >= 240){
        alert("Tente novamente")
        validaPontos = false
        resetar()
    }
},10)

function resetar(){
    pontos = 0
    pontosTelaSonic.textContent = pontos
    espinhoLeft = 570
    espinho.classList.remove("iniciar")
    espinho.classList.remove("velocidade-aumentada")
    sonico.style.backgroundImage = `url("../img/sonic-esperando.png")`
}

//Próximo jogo
btnAvancar.addEventListener("click", function(){
    location.href = "../segundoJogo/fantasma.html"
})