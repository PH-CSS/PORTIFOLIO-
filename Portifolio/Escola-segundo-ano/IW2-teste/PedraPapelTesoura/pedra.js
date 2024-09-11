let facaOpcaoTexto = document.querySelector(".escolha");
let escolha = document.querySelectorAll("button");

const opcoesDeJogo = {
    pedra: (opcoesMaquina) =>{
         if(opcoesMaquina === "pedra")  return "Empate";
         if(opcoesMaquina === "papel")  return "Perdeu";
         if(opcoesMaquina === "tesoura")  return "Ganhou";

    },
    papel: (opcoesMaquina) =>{
        if(opcoesMaquina === "pedra")  return "Ganhou";
        if(opcoesMaquina === "papel")  return "Empate";
        if(opcoesMaquina === "tesoura")  return "Perdeu";

   },
   tesoura: (opcoesMaquina) =>{
    if(opcoesMaquina === "pedra")  return "Perdeu";
    if(opcoesMaquina === "papel")  return "Ganhou";
    if(opcoesMaquina === "tesoura")  return "Empate";

},
}
function maquinaEscolha() {
    let opcoes = [{id: "pedra", icon: "👊"  }, {id: "papel", icon: "✋"  }, {id: "tesoura", icon: "✌"  }];
    let aleatoria = Math.floor(Math.random()*3);
    return opcoes[aleatoria];
}
facaOpcaoTexto.innerHTML = "🤖Faça sua escolha!";

escolha.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        console.log(e);
        let selectedFromUser = e.target.id;
        selecionada = maquinaEscolha();
        console.log(selecionada.id);
        facaOpcaoTexto.innerHTML = "🤖" + selecionada.icon +"<p>"+ opcoesDeJogo[selectedFromUser](selecionada.id);


    })  
}); 

