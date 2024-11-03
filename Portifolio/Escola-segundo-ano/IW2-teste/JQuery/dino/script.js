// colocar os movimentos em uma função e desativar quando tocar em algo 
// tocar em algo => x obj = x alvo

let posicaoPersona = $(".personagem").offset();
let spawnPlace = $(".background").offset();
let pontuação = 1;


// definindo acerto do personagem
$(".personagem").css({
    "position": "absolute",
    "left": (spawnPlace.left) + "px",
    "z-index": "10"
});

$(".hitbox").css({
    "position": "absolute",
    "left": (posicaoPersona.left - 20) + "px",
    "top": (posicaoPersona.top) + "px",
    "width": "120px",
    "height": "120px",
    "background-color": "transparent"
});

let pulando = false; // Variável para verificar se o personagem está pulando

function pular() {
    if (!pulando) { // Verifica se o personagem não está pulando
        pulando = true; // Define que o personagem está pulando

        $(".personagem").animate({ top: (posicaoPersona.top - $(".background")[0].clientHeight)+ 'px'  })
        $(".hitbox").animate({ top: (posicaoPersona.top - 200) + 'px' })
        // Volta para a posição original
        $(".personagem").animate({ top: posicaoPersona.top + 'px'})
        $(".hitbox").animate({ top: posicaoPersona.top + 'px' }, {
            complete: function() {
                pulando = false; // Permite novo pulo
            }
        });                         
    }
}

let arrCountEnemies = [];
let contador = 1;

function spawn() {
    arrCountEnemies.push(`objeto ${contador++}`);
    let objeto = $('<div></div>').addClass("obstaculo");

    objeto.css({
        "position": "absolute",
        "left": (spawnPlace.left + $(".background")[0].clientWidth) + "px"
    })

    $(".background").append(objeto);

    movement(objeto)
    detectarColisao(objeto)
}   

function movement(objeto) {
    objeto.animate({"left": spawnPlace.left - 300 + "px"}, {
        duration: 2000,
        easing: "swing",
        step: function () {
            detectarColisao()
        },
        complete: function () {
            // console.log($(".hitbox").offset().left );
            // console.log(objeto.offset().left );
            objeto.remove(); // Remove o objeto após a animação
        }
    });
}

function detectarColisao() {
    // Obtém as posições da hitbox
    let hitbox = $(".hitbox");
    let hitboxLeft = hitbox.offset().left;
    let hitboxRight = hitboxLeft + hitbox.width();
    let hitboxTop = hitbox.offset().top;
    let hitboxBottom = hitboxTop + hitbox.height();

    // Itera sobre cada obstáculo para verificar a colisão
    $(".obstaculo").each(function () {
        let obstaculo = $(this);
        let obstaculoLeft = obstaculo.offset().left;
        let obstaculoRight = obstaculoLeft + obstaculo.width();
        let obstaculoTop = obstaculo.offset().top;
        let obstaculoBottom = obstaculoTop + obstaculo.height();

        // Verifica se há interseção entre a hitbox e o obstáculo
        if (hitboxRight > obstaculoLeft &&
            hitboxLeft < obstaculoRight &&
            hitboxBottom > obstaculoTop &&
            hitboxTop < obstaculoBottom) {
            // Se houver colisão
            console.log("Colisão detectada!");
        }
    });
}


setInterval(() => {
    let chances_de_spawn = Math.floor(Math.random() * (10 + 1));
    if (chances_de_spawn >= 6) {
        spawn();
    }
}, 1500);

$(document).on('keydown', function(e) {
    switch (e.key) {
        case "w":
        case "ArrowUp":
            pular(); // Chama a função de pulo
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

setInterval(() => {
    $(".pontuacao").text(`${pontuação++} pts.`)
}, 100);