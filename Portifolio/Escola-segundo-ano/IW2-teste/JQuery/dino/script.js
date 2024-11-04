let posicaoPersona = $(".personagem").offset();
let spawnPlace = $(".background").offset();
let pontuacao = 1;
let jogoAtivo = true; // Variável para controlar o estado do jogo
let pressed = false; // verifica se o jogo já foi iniciado

// Definindo acerto do personagem
$(".personagem").css({
    "position": "absolute",
    "left": spawnPlace.left + "px",
    "z-index": "10"
});

$(".hitbox").css({
    "position": "absolute",
    "left": posicaoPersona.left - 20 + "px",
    "top": posicaoPersona.top + "px",
    "width": "120px",
    "height": "120px",
    "background-color": "transparent"
});

function startGame() {
    jogoAtivo = true; // Reinicia o jogo
    $(document).off('keydown');
    easy();
}

function easy() {
    let pulando = false;

    function pular() {
        if (!pulando) { 
            pulando = true;
            $(".personagem").animate({ top: posicaoPersona.top - $(".background")[0].clientHeight + 'px' });
            $(".hitbox").animate({ top: posicaoPersona.top - 200 + 'px' });
            
            $(".personagem").animate({ top: posicaoPersona.top + 'px' });
            $(".hitbox").animate({ top: posicaoPersona.top + 'px' }, {
                complete: function() {
                    pulando = false;
                }
            });                         
        }
    }

    let arrCountEnemies = [];
    let contador = 1;

    function spawn() {
        if (!jogoAtivo) return;
        
        let objeto = $('<div></div>').addClass("obstaculo");
        arrCountEnemies.push(`objeto ${contador++}`);

        objeto.css({
            "position": "absolute",
            "left": spawnPlace.left + $(".background")[0].clientWidth + "px"
        });

        $(".background").append(objeto);
        movement(objeto);
    }

    function movement(objeto) {
        if (!jogoAtivo) return;
        
        let duracao = pontuacao < 400 ? 2500 - (pontuacao / 50) : pontuacao < 700 ? 2500 - (pontuacao / 10) : pontuacao < 1000 ? 2000 - (pontuacao / 10) : 1000;

        objeto.animate({ "left": spawnPlace.left - 300 + "px" }, {
            duration: duracao,
            easing: "swing",
            step: function () {
                detectarColisao();
            },
            complete: function () {
                if (jogoAtivo) objeto.remove();
            }
        });
    }

    function reiniciar() {
    
        // Reseta variáveis para um novo jogo
        jogoAtivo = false;
        pressed = false;
    
        let reset = $('<div></div>').addClass("restart");
        $("body").append(reset);
        0
        let reini = $("<H1>PRESS ENTER PARA REINICIAR</H1>").addClass("restartTXT");
        $(".restart").append(reini);

        let consideracoes =$(`<div></div>`).addClass("consi");
        $(".restart").append(consideracoes);

        let pontuacaoFINAL = $(`<H2>pts. final: ${pontuacao-1}</H2>`).addClass("pontu");
        $(".consi").append(pontuacaoFINAL);

        let obstaculos_pulados = $(`<H2>Obstaculos pulados: ${arrCountEnemies.length-1}</H2>`).addClass("pulados");
        $(".consi").append(obstaculos_pulados);
    }
    

    function detectarColisao() {
        if (!jogoAtivo) return;

        let hitbox = $(".hitbox");
        let hitboxLeft = hitbox.offset().left;
        let hitboxRight = hitboxLeft + hitbox.width();
        let hitboxTop = hitbox.offset().top;
        let hitboxBottom = hitboxTop + hitbox.height();

        $(".obstaculo").each(function () {
            let obstaculo = $(this);
            let obstaculoLeft = obstaculo.offset().left;
            let obstaculoRight = obstaculoLeft + obstaculo.width();
            let obstaculoTop = obstaculo.offset().top;
            let obstaculoBottom = obstaculoTop + obstaculo.height();

            if (hitboxRight > obstaculoLeft && hitboxLeft < obstaculoRight && hitboxBottom > obstaculoTop && hitboxTop < obstaculoBottom) {
                console.log("Colisão detectada!");
                jogoAtivo = false; // Para o jogo
                $(".obstaculo").stop(); // Para todas as animações dos obstáculos
                // $(".personagem").stop(); // Para a animação de pulo do personagem
                clearInterval(spawnInterval);
                clearInterval(scoreInterval);
                // trocar imagem quando morre
                reiniciar();
            }
        });
    }

    let spawnInterval = setInterval(() => {
        if (jogoAtivo) {
            let chances_de_spawn = Math.floor(Math.random() * 11);
            if (chances_de_spawn >= 6) spawn();
        }
    }, 1500);

    let scoreInterval = setInterval(() => {
        if (jogoAtivo) $(".pontuacao").text(`${pontuacao++} pts.`);
    }, 100);

    $(document).on('keydown', function(e) {
        switch (e.key) {
            case "w":
            case "ArrowUp":
                pular();
                break;
            case "d":
            case "ArrowRight":
                console.log("direita");
                break;
            case "a":
            case "ArrowLeft":
                console.log("esquerda");
                break;
            case "s":
            case "ArrowDown":
                console.log("baixo");
                break;
        }
    });
}

$(document).on('keypress', (e) => {
    if (e.key == "Enter" && pressed == false) {
        pressed = true;
        pulando = false;
        pontuacao = 1;
        $(".preGame").detach();
        $(".obstaculo").detach();
        $(".restart").detach();
        startGame();
        // detach para voltar depois, já que remove teria que cria-lo novamente
    }
});
