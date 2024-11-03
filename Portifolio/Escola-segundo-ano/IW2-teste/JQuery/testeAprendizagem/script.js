let pessoa = {
    titulo: "Meu primeiro JQuery",
    nome: "PH",
    nota: ["R", "B", "MB", "MB++"]
};

let test = 0; 
const {titulo, nome, nota} = pessoa;

// "document.querySelector()"
$("#clicar").on("click",  () => {
    if (test >= 5) return;
    $(".titulo").text(titulo);
    $(".nome").text(nome);
    $(".nota").text(nota[test]);
    test++
});

$("#alterar").on("click", () => {
    let color = (test <= 2)? "red": "green";   
    $(".titulo, .nota, .nome").css("color", color)
});

