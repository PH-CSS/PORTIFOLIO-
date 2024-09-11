let tabuada = parseFloat(prompt("Quantas tabuadas?: "))
let maxTabuada = parseFloat(prompt("Até que numero?: "))

for (let itb = 0; itb <= tabuada; itb++) {

let elementList = document.createElement("ul");
document.body.appendChild(elementList);

    let title = document.createElement("h2");
    title.textContent = `Tabuada do ${itb}`;
    elementList.appendChild(title);

let numb = document.createElement("div");
    elementList.appendChild(numb);
        numb.classList.add("numbers");

for (let i = 0; i <= maxTabuada; i++) {

    let lineTab = document.createElement("p");
        numb.appendChild(lineTab);
        let result = itb * i;
        lineTab.textContent = `${itb} * ${i} = ${result}`
    
}




    
}




