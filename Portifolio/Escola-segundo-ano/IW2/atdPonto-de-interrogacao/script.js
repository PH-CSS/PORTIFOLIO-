const addOther = document.querySelector(".bb");
const infoNome = document.querySelector(".infoNome");
const infoAltura = document.querySelectorAll(".infoAltura");
const infoPeso = document.querySelectorAll(".infoPeso");
const infoIMC = document.querySelectorAll(".infoImc");
const Corpotabela = document.querySelector("tbody");
const tab = document.querySelector("table");
const excluir = document.querySelectorAll(".sui");



function atualizar() {

  let paciente = document.querySelectorAll('#paciente');
  
  paciente.forEach((tr) => {

  tr.children[2].children[0].addEventListener("focusout", () => {

    const pacienteObj = {
      Nome:tr.children[0].children[0],
      altura: Number(tr.children[1].children[0].value),
      peso: Number(tr.children[2].children[0].value),
      imc: tr.children[3],
      excluir: tr.children[4]
    }


    
    if (pacienteObj.altura > 100) {
          let altura = pacienteObj.altura / 100 ;

          let conta = (pacienteObj.peso / (altura ** 2)).toFixed(2);
    tr.children[3].textContent = conta;
    }else {

      let conta = (pacienteObj.peso / (pacienteObj.altura ** 2)).toFixed(2);
      tr.children[3].textContent = conta;
    }
   
    console.log(pacienteObj);

    
// funções de exclusão de tr's







  });



  tr.children[4].addEventListener("click", () =>{
          
    // remove o tr da tabela
    Corpotabela
    .removeChild(tr);
            // Corpotabela.parentNode.removeChild(tr);
            console.log("aa");
  });



});
};

atualizar()
// Atualiza variaveis

// };



addOther.addEventListener('click', () => {
  //   var divNova = document.createElement("div");
  //   var conteudoNovo = document.createTextNode("Olá, cumprimentos!");

  let trForm = document.createElement("tr");
  Corpotabela.appendChild(trForm);
  trForm.setAttribute('id', 'paciente');
  //colocar a nova linha no final da tabela

  // Inserir nome
  let tdFormNome = document.createElement("td");
  trForm.appendChild(tdFormNome);
  let inserirNome = document.createElement("input");
  inserirNome.setAttribute("type", "text");
  inserirNome.setAttribute("class", "infoNome");
  inserirNome.setAttribute("placeholder", "insira o Nome..");
  tdFormNome.appendChild(inserirNome);
  // Inserir altura
  let tdFormAltura = document.createElement("td");
  trForm.appendChild(tdFormAltura);
  let inserirAltura = document.createElement("input");
  inserirAltura.setAttribute("type", "text");
  inserirAltura.setAttribute("class", "infoAltura");
  inserirAltura.setAttribute("value", "");
  inserirAltura.setAttribute("placeholder", "insira a altura..");
  tdFormAltura.appendChild(inserirAltura);
  // Inserir peso
  let tdFormPeso = document.createElement("td");
  trForm.appendChild(tdFormPeso);
  let inserirPeso = document.createElement("input");
  inserirPeso.setAttribute("type", "text");
  inserirPeso.setAttribute("class", "infoPeso");
  inserirPeso.setAttribute("value", "");
  inserirPeso.setAttribute("placeholder", "insira o peso..");
  tdFormPeso.appendChild(inserirPeso); 
   let tdImc = document.createElement('td');
  trForm.appendChild(tdImc);
// botão excluir
  let excluir = document.createElement("td");
  trForm.appendChild(excluir);
  excluir.setAttribute("class", "sui");
  let spanC = document.createElement("span")
  spanC.setAttribute("class", "material-symbols-outlined");
  excluir.appendChild(spanC);
  spanC.textContent = "close";




atualizar();
console.dir(paciente)   



});



