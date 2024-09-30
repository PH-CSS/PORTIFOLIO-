// console.log(Cookies.get("mode"));
const paragrafo = document.querySelector("p");

let contagem = 1;

for (let i = 1; i <= 5; i++) {
  console.log(Cookies.get(`Resp${Cookies.get("mode")}${i}`));
  console.log(Cookies.get(`gabarito${i-1}`));
  if (Cookies.get(`Resp${Cookies.get("mode")}${i}`) === Cookies.get(`Respsun${i}`)) {
    if (Cookies.get(`Resp${Cookies.get("mode")}${i}`) === Cookies.get(`gabaritoSun${i}`)) {
          const p = document.createElement("p");
    p.textContent = `${i})`;
    paragrafo.appendChild(p);
    const h1 = document.createElement("h1");
    p.appendChild(h1);
    h1.innerText = Cookies.get(`Resp${Cookies.get("mode")}${i}`);
    const img = document.createElement("img");
    img.setAttribute("src","./img/lista-de-controle.png");
    p.appendChild(img);
    contagem++
    }else{
    const p = document.createElement("p");
    p.textContent = `${i})`;
    paragrafo.appendChild(p);
    const h1 = document.createElement("h1");
    p.appendChild(h1);
    h1.innerText = Cookies.get(`Resp${Cookies.get("mode")}${i}`);
    const img = document.createElement("img");
    img.setAttribute("src","./img/cruz.png");
    p.appendChild(img);
    const br = document.createElement("br");
    p.appendChild(br);
    const correta = document.createElement("h5");
    correta.innerHTML = `Correta: <br> ${Cookies.get(`gabaritoSun${i}`)}`;
    p.appendChild(correta);
    console.log("errou");
    }
  }else if (Cookies.get(`Resp${Cookies.get("mode")}${i}`) === Cookies.get(`Respmoon${i}`)) {
    if (Cookies.get(`Resp${Cookies.get("mode")}${i}`) === Cookies.get(`gabaritoMoon${i}`)) {
          const p = document.createElement("p");
    p.textContent = `${i})`;
    paragrafo.appendChild(p);
    const h1 = document.createElement("h1");
    p.appendChild(h1);
    h1.innerText = Cookies.get(`Resp${Cookies.get("mode")}${i}`);
    const img = document.createElement("img");
    img.setAttribute("src","./img/lista-de-controle.png");
    p.appendChild(img);
    contagem++
    }else{
    const p = document.createElement("p");
    p.textContent = `${i})`;
    paragrafo.appendChild(p);
    const h1 = document.createElement("h1");
    p.appendChild(h1);
    h1.innerText = Cookies.get(`Resp${Cookies.get("mode")}${i}`);
    const img = document.createElement("img");
    img.setAttribute("src","./img/cruz.png");
    p.appendChild(img);
    const br = document.createElement("br");
    p.appendChild(br);
    const correta = document.createElement("h5");
    correta.innerHTML = `Correta: <br> ${Cookies.get(`gabaritoMoon${i}`)}`;
    p.appendChild(correta);
    console.log("errou");
    }
  }
};

const body = document.querySelector("body");
const a = document.createElement("a");
a.setAttribute("href", "./index.htm")
body.appendChild(a)
const voltar = document.createElement("input");
voltar.setAttribute("type", "button" );

if (contagem == 5) {
  voltar.setAttribute("value", "Tela inicial" );
}else{
  voltar.setAttribute("value", "Tentar de novo" );
};

a.appendChild(voltar);


  
  