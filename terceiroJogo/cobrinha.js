
window.onload = function(){
    var pontos = document.querySelector("#pontos");
    var stage = document.querySelector("#stage");
    var context = stage.getContext("2d");

    document.addEventListener("keydown", movimento);
    var pontoAtual = 0
    var morto = false

    setInterval(game, 65);

    const velocidade = 1

    var vx = vy = 0;
    var px = py = 10;
    var py = 15

    var frutaY
    var tamanho = 20;
    var quantidade = 20;
    var frutaX = frutaY = 15;


    var rastro = []
    cauda = 5

    function game(){

        px += vx
        py += vy

        if(px < 0){
            px = quantidade - 1
        };
        if(px > quantidade - 1){
            px = 0
        }
        if(py < 0){
            py = quantidade - 1
        };
        if(py > quantidade - 1){
            py = 0
        }

        context.fillStyle = "black";
        context.fillRect(0,0,stage.clientWidth, stage.height);

        context.fillStyle = "red"
        context.fillRect(frutaX * tamanho, frutaY * tamanho, tamanho, tamanho)

        context.fillStyle = "gray"
        for(var i = 0; i < rastro.length; i++){
            context.fillRect(rastro[i].x*tamanho,rastro[i].y*tamanho,tamanho,tamanho);
            //GameOver
            if(rastro[i].x == px && rastro[i].y == py){
                
                if(pontos.textContent < 400){
                    pontos.textContent = 0
                }else{
                    morto = true
                    pontoAtual = pontos.textContent
                }
                cauda = 5
                vx = vy = 0;
            }
        };

        rastro.push({
            x:px,
            y:py
        });

        while(rastro.length > cauda){
            rastro.shift();
        };

        //Pegando a fruta
        if(frutaX == px && frutaY == py){
            cauda++

            frutaX = Math.floor(Math.random() * quantidade);
            frutaY = Math.floor(Math.random() * quantidade);

            pontos.textContent = Number(pontos.textContent)  + 20
        }

        if(pontos.textContent >= 400){
            var btnAvancar = document.querySelector(".btn-final");
            btnAvancar.textContent = "Prosseguir";

            btnAvancar.addEventListener("click", ()=>{
               location.href = "../index.html"
            })
        }
    };
    
    function movimento(event){
        if(morto){
            pontos.textContent = 0
            morto = false
        }
        switch(event.keyCode){
            case 37: //esquerda
                vx = -velocidade
                vy = 0
            break;
            case 38: //cima
            vx = 0
            vy = - velocidade
            break;
            case 39: //direita
            vx = velocidade
            vy = 0
            break;
            case 40: //baixo
            vx = 0
            vy = velocidade
            break;
        }
    }
}