function frutas(){
    var inFruta = document.getElementById("inFruta");
    var outSaida = document.getElementById("outSaida");
    var inNumero = document.getElementById("inNumero");
    //declarações de variaveis

    var saida="";
    //declaração da saida de dados
    var inFruta = "";
    var i = 1; 

    while(i <= inNumero ){
        saida = saida + inFruta + " , " ; i++;
    }
    outSaida.textContent = saida;

}
 var btRepetirFruta = document.getElementById("btRepetirFruta");
 btRepetirFruta.addEventListener("click", frutas);



