
const sonico = document.querySelector(".sonico");
const espinho = document.querySelector(".espinhos")
const game = document.querySelector(".game");

game.addEventListener("click", function(){
    pular()
})

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
        resetar()
    }
},10)

function resetar(){
    espinhoLeft = 570
    sonico.style.backgroundImage = `url("../img/sonic-esperando.png")`
}