let paciente = document.querySelectorAll('#paciente');
const addOther = document.querySelector(".material-symbols-outlined");
 let infoNome = document.querySelector(".infoNome");
 let infoAltura = document.querySelectorAll(".infoAltura");
 let infoPeso = document.querySelectorAll(".infoPeso");
 let infoIMC = document.querySelectorAll(".infoImc");
 let Corpotabela = document.querySelector("tbody");
 let tab = document.querySelector("table");
 let TR = document.querySelectorAll('tr')


TR.forEach(tr => {

    infoPeso.forEach(peso => {
        peso.addEventListener("focusout", () => {


       // if (infoIMC == null) {
       //     infoIMC.textContent = "Preencha todos os campos!";
       //     console.log("aaa");
       // } else  {
           let conta = (infoPeso.value / (infoAltura.value * infoAltura.value)).toFixed(2);
           
           infoIMC.textContent = conta;

           console.log(infoIMC.value);
       // }
    });

});
});


 


function AtualizarElementos() {
   infoAltura = document.querySelector(".infoAltura");
   infoPeso = document.querySelector(".infoPeso");
}




addOther.addEventListener('click', () => {
   //   var divNova = document.createElement("div");
   //   var conteudoNovo = document.createTextNode("Olá, cumprimentos!");


   
   let trForm = document.createElement("tr");
   Corpotabela.appendChild(trForm); 
   trForm.setAttribute('id','paciente');  
   //colocar a nova linha no final da tabela
   let Formula = document.createElement('form');
   Formula.setAttribute('method','get');
   trForm.appendChild(Formula); 
   
   
   
   // Inserir nome
   let tdFormNome = document.createElement("td");
   trForm.appendChild(tdFormNome);
   let inserirNome = document.createElement("input");
   inserirNome.setAttribute("type", "text");
   inserirNome.setAttribute("class","infoNome");
   inserirNome.setAttribute("placeholder","insira o Nome..");
   tdFormNome.appendChild(inserirNome);
   // Inserir altura
   let tdFormAltura = document.createElement("td");
   trForm.appendChild(tdFormAltura);
   let inserirAltura = document.createElement("input");
   inserirAltura.setAttribute("type", "text");
   inserirAltura.setAttribute("class","infoAltura");
   inserirAltura.setAttribute("placeholder","insira a altura..");
   tdFormAltura.appendChild(inserirAltura);
   // Inserir peso
   let tdFormPeso = document.createElement("td");
   trForm.appendChild(tdFormPeso);
   let inserirPeso = document.createElement("input");
   inserirPeso.setAttribute("type", "text");
   inserirPeso.setAttribute("class","infoPeso");
   inserirPeso.setAttribute("placeholder","insira o peso..");
   tdFormPeso.appendChild(inserirPeso);
   // (elementos.length + 1);
   //   divNova.appendChild(conteudoNovo); 
   infoAltura.length + 1;
   infoPeso.length + 1;

   let tdImc = document.createElement( 'td' );
   trForm.appendChild( tdImc );

   paciente.length+1;

  AtualizarElementos()
   });

   // https://chat.openai.com/c/bc890a63-ec4a-4f54-a445-b8d8d6aafc75

