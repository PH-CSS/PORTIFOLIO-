const pontuacao = document.querySelectorAll(".Pontuacao h1")
let lua = pontuacao[0];
let sol = pontuacao[1];
if (!Cookies.get("pontuacaoLua") || !Cookies.get("pontuacaoSol")) {
  Cookies.set("pontuacaoLua", 0);
  Cookies.set("pontuacaoSol", 0);

}else{
lua.innerHTML = `Lua <br> ${Cookies.get("pontuacaoLua")}/5`;
sol.innerHTML = `Sol <br> ${Cookies.get("pontuacaoSol")}/5`;
}

let contadorSol = 0;
let contadorLua = 0;


const gabarito = {
  moon:["Lua Cheia","2","Marés","Rocha e poeira","Apollo 11"],
  sun:["Sol","Fusão nuclear","5.500 °C","8","Hidrogênio e hélio"]
}

for (let i = 0; i < 5; i++) {
  Cookies.set(`gabarito${i+1}`, gabarito[Cookies.get("mode")][i])
}

// console.log(gabarito[Cookies.get("mode")]);
// exp: output "moon[...]"
if (Cookies.get("mode") == "moon") {  
  for (let i = 1; i <= 5; i++) {
    console.log(Cookies.get(`Resp${Cookies.get("mode")}${i}`) === gabarito[Cookies.get("mode")][i-1]); 
    if (Cookies.get(`Resp${Cookies.get("mode")}${i}`) === gabarito[Cookies.get("mode")][i-1]) {
      contadorLua++
    }
  }
  Cookies.set("pontuacaoLua", contadorLua)

} else if (Cookies.get("mode") == "sun"){
  for (let i = 1; i <= 5; i++) {
    console.log(Cookies.get(`Resp${Cookies.get("mode")}${i}`) == gabarito[Cookies.get("mode")][i-1]); 
    console.log(Cookies.get(`Resp${Cookies.get("mode")}${i}`));
    console.log( gabarito[Cookies.get("mode")][i-1]);
    if (Cookies.get(`Resp${Cookies.get("mode")}${i}`) === gabarito[Cookies.get("mode")][i-1]) {
      contadorSol++
    }
  }
  
  Cookies.set("pontuacaoSol", contadorSol);

}
