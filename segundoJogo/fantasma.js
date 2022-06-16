
const game = document.querySelector(".game");
const fantasma = document.querySelector("#fantasma");
let tempo = document.querySelector(".tempo");

var jogoComecou
let fantasmaComecou

game.addEventListener("click",function(){
    jogoComecou = true
})

fantasma.addEventListener("click",function(){

    if(fantasmaComecou){
        alert("BOO ME ACERTOU")

        location.href = "../terceiroJogo/cobrinha.html"

        console.log(Number(tempo.textContent) * 20)
    }

})

setInterval(() =>{
    temporizador()
},1000)

setInterval(() =>{
    movimento()
},700)

function movimento(){
    if(jogoComecou){
        setTimeout(()=>{
            fantasma.classList.add("desaparecer")

        },200)
        
        setTimeout(()=>{
            fantasmaComecou = true
            fantasma.classList.remove("desaparecer")
            let randomLeft = parseInt(Math.random() * 700)
            let randomTop = parseInt(Math.random() * 300)
        
            fantasma.style.left = `${randomLeft}px`
            fantasma.style.top = `${randomTop}px`
        },500)
    }
}

function temporizador(){
    if(jogoComecou){
        tempo.textContent = Number(tempo.textContent) - 1
    }
}