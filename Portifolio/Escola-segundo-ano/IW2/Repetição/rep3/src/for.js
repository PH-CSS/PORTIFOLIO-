let select = parseFloat(prompt("Qual numero fatorar ?:"));

let result = select;
for (let i = 1; i < select; i++) {
    
     result = result * i;

    console.log(result);
}

alert(`o resultado da fatoração é ${result}`)


