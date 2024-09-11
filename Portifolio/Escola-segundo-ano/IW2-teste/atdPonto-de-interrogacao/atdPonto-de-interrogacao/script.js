let paciente = document.querySelectorAll('#paciente');
let addNewForm = document.querySelector('.material-symbols-outlined');
let tabela = document.querySelector('tbody');

addNewForm.addEventListener('click', () => {
//   var divNova = document.createElement("div");
//   var conteudoNovo = document.createTextNode("Olá, cumprimentos!");

let trForm = document.createElement("tr");
tabela.appendChild(trForm); 
trForm.setAttribute('id','paciente');  
//colocar a nova linha no final da tabela
let Formula = document.createElement('form');
Formula.setAttribute('method','get');




// Inserir nome
let tdFormNome = document.createElement("td");
Formula.appendChild(tdFormNome);
let inserirNome = document.createElement("input");
inserirNome.setAttribute("type", "text");
inserirNome.setAttribute("class","infoNome");
inserirNome.setAttribute("placeholder","insira o Nome..");
tdFormNome.appendChild(inserirNome);
// Inserir altura
let tdFormAltura = document.createElement("td");
Formula.appendChild(tdFormAltura);
let inserirAltura = document.createElement("input");
inserirAltura.setAttribute("type", "text");
inserirAltura.setAttribute("class","infoAltura");
inserirAltura.setAttribute("placeholder","insira a altura..");
tdFormAltura.appendChild(inserirAltura);
// Inserir peso
let tdFormPeso = document.createElement("td");
Formula.appendChild(tdFormPeso);
let inserirPeso = document.createElement("input");
inserirPeso.setAttribute("type", "text");
inserirPeso.setAttribute("class","infoAltura");
inserirPeso.setAttribute("placeholder","insira a altura..");
tdFormPeso.appendChild(inserirPeso);
//   divNova.appendChild(conteudoNovo); 
paciente.length + 1;
});



paciente.forEach((paci) => {
    
    const pacientes = {
        Nome: paci.children[0].textContent,
        Altura: paci.children[1].textContent.replace(",", '.'),
        Peso : paci.children[2].textContent.replace(",", '.'),
        IMC :paci.children[3], //Replace()
    };

    if (pacientes.Peso <= 0 || pacientes.Peso >= 350  ) {
        element.focus(paci.children[2]);
        paci.children[2].classList.add('invalido');
    } else if (pacientes.Altura >= 3 || pacientes.Altura <= 0) {
        element.focus(paci.children[3]);
        paci.children[3].classList.add('invalido');   
    }

    let continea = (pacientes.Peso / (pacientes.Altura*pacientes.Altura)).toFixed(2);
    pacientes.IMC.textContent = continea;
    




});

