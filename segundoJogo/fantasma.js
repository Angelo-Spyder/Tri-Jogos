
const game = document.querySelector(".game");
const fantasma = document.querySelector(".fantasma");
let tempo = document.querySelector(".tempo");

let comecou = false

game.addEventListener("click", () =>{
    comecou = true
    if(fantasma.classList != "fantasma-movimento-1"){
        fantasma.classList.add("fantasma-movimento-1")
    }
    if(fantasma.classList != "fantasma-movimento-2"){
        fantasma.classList.add("fantasma-movimento-2")
    }
    
})

//Tempo
setInterval(()=>{
    calcularTempo()
},1000)

function calcularTempo(){
    if(comecou){
        tempo.textContent = Number(tempo.textContent) - 1
    }
}

//Aplicando desaparecimento
setInterval(()=>{
    fantasma.classList.add("desaparecer")
},500)

setInterval(()=>{
    fantasma.classList.remove("desaparecer")
},1000)

//Troca de classes
setInterval(()=>{
    fantasma.classList.add("fantasma-movimento-2")
},5000)
setInterval(()=>{
    fantasma.classList.remove("fantasma-movimento-2")
},10000)