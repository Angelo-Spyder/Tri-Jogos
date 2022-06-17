
console.log(window.screen.width);

var gameTela = document.querySelector(".game");



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

    //Versão mobile do jogo

    if(window.screen.width < 768){

        //divisoes
        var divisaoCima = document.createElement("div");
        divisaoCima.classList.add("cima");

        var divisaoLateral = document.createElement("div");
        divisaoLateral.classList.add("lados");

        var divisaoBaixo = document.createElement("div");
        divisaoBaixo.classList.add("baixo");

        //criando botao
        var botaoDireita = document.createElement("button");
        botaoDireita.innerHTML = "&#8594;";

        var botaoEsquerda = document.createElement("button");
        botaoEsquerda.innerHTML = "&#8592;";

        var botaoCima = document.createElement("button");
        botaoCima.innerHTML = "&#8593;";

        var botaoBaixo = document.createElement("button");
        botaoBaixo.innerHTML = "&#8595;";
    
        //Evento dos botoes
        botaoDireita.addEventListener("click", ()=>{
            vx = velocidade
            vy = 0
        })
        botaoEsquerda.addEventListener("click", ()=>{
            vx = -velocidade
            vy = 0
        })
        botaoCima.addEventListener("click", ()=>{
            vx = 0
            vy = -velocidade
        })
        botaoBaixo.addEventListener("click", ()=>{
            vx = 0
            vy = velocidade
        })

        //Adicionando classes
        botaoDireita.classList.add("botao-jogo");
        botaoEsquerda.classList.add("botao-jogo");
        botaoCima.classList.add("botao-jogo");
        botaoBaixo.classList.add("botao-jogo");
        //Adicionando botoes na tela
        divisaoCima.appendChild(botaoCima);
        divisaoLateral.appendChild(botaoEsquerda);
        divisaoLateral.appendChild(botaoDireita);
        divisaoBaixo.appendChild(botaoBaixo);

        gameTela.appendChild(divisaoCima);
        gameTela.appendChild(divisaoLateral);
        gameTela.appendChild(divisaoBaixo);

    }

}