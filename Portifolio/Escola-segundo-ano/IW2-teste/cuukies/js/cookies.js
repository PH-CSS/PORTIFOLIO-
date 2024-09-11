const getCO = document.querySelector(".getCookies");
const Nome = document.querySelector(".NomeInp");
const content = document.querySelector(".submitHow");
const modo = document.getElementById("modo");
const aga = document.querySelector("h1");
const corpo = document.querySelector("body");


getCO.addEventListener( "click", () =>{
    // console.log(modo.value); 
    // console.log(Nome.value);
    // valores
    content.style.animation = "animacaofd 0.3s ease forwards" ;
    Cookies.set('Nome', `${Nome.value}`)
    Cookies.set('bg', `${modo.value}`)
    // configurar o nome e valor de um cookie
}) 
// console.log(Cookies.get('Nome'));
// pegar valor de um cookie
function alterarInfo() {
    
    console.log(Cookies.get('bg')   );
    
    if (Cookies.get('Nome') !== "") {
        aga.innerHTML = `Você quer mudar seu nome de usurário <strong>${Cookies.get('Nome')}</strong> ?`;
    };
    
    if (Cookies.get('bg') == "diurno" ) {
        corpo.style.backgroundColor = "#fff"
    } else {
        corpo.style.backgroundColor = "#000"
    };
}

alterarInfo()