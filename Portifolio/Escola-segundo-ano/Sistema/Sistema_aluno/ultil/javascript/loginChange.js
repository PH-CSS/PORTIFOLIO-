const change = document.querySelector(".login");
const inputIdent = document.querySelectorAll(".cadastro");
const logSec = document.querySelector(".sameArea");
const cadastroBNT = document.querySelector(".cad");

let condicao = true;
change.addEventListener("click", () =>{
    if (condicao) {
    inputIdent.forEach(button => {
        button.style.display = "none";
        button.required = false;
    });
    logSec.style.flexDirection = "column";
    logSec.style.width = "30dvw"
    change.textContent = "cadastrar"
    change.name = "cadastro" ;
    cadastroBNT.textContent = "Entrar"
    condicao = false;

    } else if (!condicao){
        inputIdent.forEach(button => {
            button.style.display = "flex";
            button.required = true;
        });
        logSec.style.flexDirection = "row";
        logSec.style.width = "100%"
        change.textContent = "já possui uma conta?"
        change.name = "login" ;
        cadastroBNT.textContent = "Cadastrar"
        condicao = true;
    };

});