const colorTheme = document.querySelectorAll(".change");
const subTitle = document.querySelector(".sub")
const titleName = document.querySelector(".nameText span");
const bgImage = document.querySelector(".round img")
const secondarybgImage = document.querySelector(".otherMode img")
const linkToPage = document.querySelector(".round a")
// console.dir(secondarybgImage.attributes[0].nodeValue);

const changeModeByIMG = document.querySelector(".otherMode")
let NodeValNomeBG = changeModeByIMG.attributes.name.nodeValue;
changeModeByIMG.addEventListener("click", () =>{
  changeMode(NodeValNomeBG) 
  NodeValNomeBG = (NodeValNomeBG == "sun")? "moon": "sun" ;

})

window.addEventListener('pageshow', (e) => {
  if (!Cookies.get("mode")) {
    Cookies.set("mode", "sun") ;
  }else{
    changeMode(Cookies.get("mode"))
    const pontuacao = document.querySelectorAll(".Pontuacao h1")
    let lua = pontuacao[0];
    lua.innerHTML = `Lua <br> ${Cookies.get("pontuacaoLua")}/5`;
      
    let sol = pontuacao[1];
    sol.innerHTML = `Sol <br> ${Cookies.get("pontuacaoSol")}/5`;
  }
});




const root = document.documentElement;
// console.log(getComputedStyle(root).getPropertyValue("--bg-color"))
// sintaxe para a mudança de cor

colorTheme.forEach(mode => {
  console.dir(mode);
  mode.addEventListener("click", () => changeMode(mode.name));
});

function changeMode(NameNode) {
  Cookies.set("mode", NameNode)

  // console.dir(secondarybgImage.attributes.name.nodeValue);

    // paleta de cores da mudança de quiz
    const dayNight = {
      sun:[
      "#0288D1",
       "background-image: url(../img/sun-svgrepo-white-com.svg);"
      ],
      moon:[
        "rgb(2, 68, 68)",
        "background-image: url(../img/moon-svgrepo-com.svg);"
      ]
    };
    const bgMode = {
      sun:"#B3E5FC",
      moon:"rgb(134, 185, 185)"
    }

    // propriedade para mudança de cor
    root.style.setProperty('--bg-color', dayNight[NameNode][0])
    root.style.setProperty('--bg-body', bgMode[NameNode])

    // identificação para qual palavra colocar no titulo
    subTitle.textContent = `The ${NameNode}`;
    let artigo = (NameNode == "moon")? "a lua": "o sol";

    if (titleName.textContent !== artigo) {

        titleName.classList.toggle('sairEntrar');
        secondarybgImage.classList.toggle('sairEntrar');
        bgImage.classList.toggle('sairEntrar');

        linkToPage.href = `./quizPages/${NameNode}/1.htm` ;



  setTimeout(() => {
    titleName.textContent = `${artigo}`
    // animação de mudança para titulo principal
    if (NameNode == "moon") {
      secondarybgImage.attributes[0].nodeValue = "./img/sun-svgrepo-com.svg"
      bgImage.attributes[0].nodeValue = "./img/moon-white-svgrepo-com.svg"
    } else if(NameNode == "sun"){
      bgImage.attributes[0].nodeValue = "./img/sun-svgrepo-white-com.svg"
      secondarybgImage.attributes[0].nodeValue = "./img/moon-svgrepo-com.svg"
    }
  }, 500);

  setTimeout(() => {
    titleName.classList.toggle('sairEntrar');
    secondarybgImage.classList.toggle('sairEntrar');
    bgImage.classList.toggle('sairEntrar');
  }, 1000);

  

    }
}




