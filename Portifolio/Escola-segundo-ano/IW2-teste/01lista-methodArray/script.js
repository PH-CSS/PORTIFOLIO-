let corpo = document.querySelector("body");

let um = document.querySelector(".UM");
let dois = document.querySelector(".dois");

let push = document.querySelector(".push");
let pop = document.querySelector(".pop");
let unshift = document.querySelector(".unshift");
let shift = document.querySelector(".shift");
let sort = document.querySelector(".sort");



let nums = [1,2,3,4,5,6,7,8,124];

let late = ["PH", "ST", "alguem", "DonNo", "Tobo"];

function Paragrafo(e, a) {
    console.log(a);
    let paragrafo  = document.createElement("p")
    paragrafo.textContent = e ;
    corpo.appendChild(a);
    a.appendChild(paragrafo);

};

Paragrafo("Visualização de números");
nums.forEach((num) => {
     Paragrafo (num, um)
     console.log(um);

});

Paragrafo("Visualização de palavras");
late.forEach((late) => { 
    Paragrafo (late, dois)

});

