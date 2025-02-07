function calculaTabuada(){
    var inNumero = document.getElementById("inNumero");
    var outTabuada = document.getElementById("outTabuada");

    var numero = Number(inNumero.value);
    var saida = "";
    var i=1; 



    while(i <= 10) {
    saida=saida + numero + " x " + i + " = " + (numero * i) + "\n"; 
    i++;
} 
outTabuada.textContent = saida;

}
 var btCalcular = document.getElementById("btCalcular");
 btCalcular.addEventListener("click", calculaTabuada);