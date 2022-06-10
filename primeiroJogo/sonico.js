
const sonico = document.querySelector(".sonico");
const game = document.querySelector(".game");

game.addEventListener("click", function(event){
    pular()
})

function pular(){
    if(sonico.classList != "pulo"){
        sonico.classList.add("pulo")

        setTimeout(()=>{
            sonico.classList.remove("pulo")
        },400)
    }
}