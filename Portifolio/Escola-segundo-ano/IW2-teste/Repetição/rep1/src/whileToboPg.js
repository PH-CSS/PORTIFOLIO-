const button = document.getElementById('#BT')
const text = document.getElementById('#change')

    

let container = document.querySelector('body')



function tobo(params) {

    let cont = 1;

while (cont <= 100) {
    
    let pargrafo = document.createElement('p');
    
    pargrafo.textContent = `${cont} - ${text.value}`;

    container.appendChild(pargrafo);
    
    cont ++;

}

}
    






