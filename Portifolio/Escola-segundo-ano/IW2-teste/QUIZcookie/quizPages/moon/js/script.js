const resps = document.querySelectorAll(".respostas div");
const verify = document.querySelector(".verificar");




let chose = "";
resps.forEach(resp => {
  resp.addEventListener("click", (e) => {



    if (chose !== "") {
      if (e.target.className !== chose.className) {
        chose.style.backgroundColor = "#B3E5FC"
        chose.style.color = "black";

      }
    }

    chose = e.target;
    verify.style.opacity = "1";
    chose.style.backgroundColor = "green";
    // console.dir(chose);
    // resposta
    let answer = chose.outerText.replace("questão do sol\n", "").replace("questão da lua\n", "");



    verify.addEventListener("click", () => {
      if (Cookies.get("Contagem")) {
        Cookies.get("Contagem")
        let count = Number(Cookies.get("Contagem")) + 1;
        Cookies.set("Contagem", count)


      } else {
        Cookies.set("Contagem", 1)
      }

      let arrayNomes = ["Respmoon1", "Respmoon2", "Respmoon3", "Respmoon4", "Respmoon5"]
      Cookies.set(`${arrayNomes[Cookies.get("Contagem") - 1]}`, answer)

      if (Cookies.get("Contagem") >= arrayNomes.length) {
      window.open(`../../index.htm`, "_self")
      Cookies.set("Contagem", 0)
      }else{
      window.open(`./${Number(Cookies.get("Contagem"))+1}.htm`, "_self")
      }

    });

    chose.style.color = "white";

  })
});