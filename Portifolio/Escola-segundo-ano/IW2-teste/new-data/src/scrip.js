const mili = document.querySelector(".mili");
const seg = document.querySelector(".seg");
const min = document.querySelector(".min");
const hr = document.querySelector(".hr");
// dia mes ano
const dia = document.querySelector(".day");
const mes = document.querySelector(".month");
const ano = document.querySelector(".year");
const button = document.querySelector(".temp");
const crono = document.querySelector(".cronometro");
const infTime = document.getElementById("newInf");
let haha = true;


    const newTime = new Date();

    let newmili = newTime.getMilliseconds() ;
    mili.innerHTML = newmili;

    let newSegundo = newTime.getSeconds() ;
    seg.innerHTML = newSegundo;

    let newMinute = newTime.getMinutes() ;
    min.innerHTML = newMinute;

    let newHora = newTime.getHours() ;
    hr.innerHTML = newHora;

    let newD = newTime.getDate() ;
    dia.innerHTML = newD;

    let newM = newTime.getMonth() + 1 ;
    mes.innerHTML = `/ ${newM} /`;

    let newY = newTime.getFullYear() ;
    ano.innerHTML = newY;



// start inicial 

    setInterval(() => {
    const newMili = new Date();
    let newmili = newMili.getMilliseconds() ;
    mili.innerHTML = newmili;
}, 100);

setInterval(() => {
    const newSeg = new Date();
    let newSegundo = newSeg.getSeconds() ;
    seg.innerHTML = newSegundo;
}, 100);

setInterval(() => {
    const newmin = new Date();
    let newMinute = newmin.getMinutes() ;
    min.innerHTML = newMinute;
}, 1000);

setInterval(() => {
    const newhour = new Date();
    let newHora = newhour.getHours() ;
    hr.innerHTML = newHora;
}, 1000);
// até aqui é o cronometro do dia








button.addEventListener('click', () =>{
if (haha == true) {
    haha = false;
    button.setAttribute("id", "whhat") ;

    infTime.style.animation = ` newLocation 0.4s ease forwards 0.3s`;

} else if (haha == false) {
    haha = true;
    button.removeAttribute("id", "whhat");
    infTime.style.animation = "newLocationBack 0.3s ease forwards 0s";
} 
});



