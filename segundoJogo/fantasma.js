
const game = document.querySelector(".game");
const fantasma = document.querySelector(".fantasma");

game.addEventListener("click", () =>{
    if(fantasma.classList != "fantasma-movimento-1"){
        fantasma.classList.add("fantasma-movimento-1")
    }
    if(fantasma.classList != "fantasma-movimento-2"){
        fantasma.classList.add("fantasma-movimento-2")
    }
    
})



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