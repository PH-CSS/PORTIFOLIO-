function calculaTabuada(){
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    var numero = Number(inNumero.value);
    var saida = "";
    var i=1; 



do {
    saida=saida + numero + " x " + i + " = " + (numero * i) + "\n"; 
    i++;
} while(i <= 10)
outTabuada.textContent = saida;

}
 var btCalcular = document.getElementById("btCalcular");
 btCalcular.addEventListener("click", calculaTabuada);