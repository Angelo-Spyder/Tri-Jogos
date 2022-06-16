
window.onload = function(){
    var stage = document.querySelector("#stage");
    var context = stage.getContext("2d");

    document.addEventListener("keydown", movimento);

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

            if(rastro[i].x == px && rastro[i].y == py){
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

        if(frutaX == px && frutaY == py){
            cauda++

            frutaX = Math.floor(Math.random() * quantidade);
            frutaY = Math.floor(Math.random() * quantidade);
        }

    };

    function movimento(event){
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