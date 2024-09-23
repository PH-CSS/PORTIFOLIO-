const colorTheme = document.querySelectorAll(".change");
const subTitle = document.querySelector(".sub")
const titleName = document.querySelector(".nameText span");
const bgImage = document.querySelector(".round img")
const secondarybgImage = document.querySelector(".otherMode img")
// console.dir(secondarybgImage.attributes[0].nodeValue);

const changeModeByIMG = document.querySelector(".otherMode")
let NodeValNomeBG = changeModeByIMG.attributes.name.nodeValue;
changeModeByIMG.addEventListener("click", () =>{
  changeMode(changeModeByIMG, NodeValNomeBG) 
  NodeValNomeBG = (NodeValNomeBG == "sun")? "moon": "sun" ;
})


console.log(titleName);

const root = document.documentElement;
// console.log(getComputedStyle(root).getPropertyValue("--bg-color"))
// sintaxe para a mudança de cor

colorTheme.forEach(mode => {
  mode.addEventListener("click", () => changeMode(mode, mode.name));
});

function changeMode(mode, NameNode) {
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

    let nomeDoEscolhido = NameNode;
    // propriedade para mudança de cor
    root.style.setProperty('--bg-color', dayNight[nomeDoEscolhido][0])
    root.style.setProperty('--bg-body', bgMode[nomeDoEscolhido])

    // identificação para qual palavra colocar no titulo
    subTitle.textContent = `The ${nomeDoEscolhido}`;
    let artigo = (nomeDoEscolhido == "moon")? "a lua": "o sol";

    if (titleName.textContent !== artigo) {
      
      titleName.classList.toggle('sairEntrar');
      secondarybgImage.classList.toggle('sairEntrar');
      bgImage.classList.toggle('sairEntrar');


      setTimeout(() => {
        titleName.textContent = `${artigo}`
        // animação de mudança para titulo principal
        if (nomeDoEscolhido == "moon") {
          secondarybgImage.attributes[0].nodeValue = "./img/sun-svgrepo-com.svg"
          bgImage.attributes[0].nodeValue = "./img/moon-white-svgrepo-com.svg"
        } else{
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




