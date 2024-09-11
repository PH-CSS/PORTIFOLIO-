//declara variavez globais para o script 
var numContas = 0
var valTotal = 0
//aplica variaveis string q acumula as contas
var resposta = "";

function registrarContas(){
    //Criar referencias aos elementos da pg manipulados pela function
    var inDescricao = document.getElementById("inDescricao");
    var inValor = document.getElementById ("inValor");
    var outListaContas = document.getElementById ("outListaContas");
    var outTotal = document.getElementById("outTotal");

//obtem cont das cotas

var descricao = inDescricao.value;
var valor = Number (inValor.value);

//verificar preeenchimento dos campos

if(descricao == "" || valor == 0 || isNaN(valor)){
    alert("Informe os dados corretamente...");
    inDescricao.focus();
    return;

}
 
//add a conta
numContas++;
valTotal = valTotal + valor;


resposta = resposta + descricao + "- R$: " + valor.toFixed(2) + "\n";

outListaContas.textContent = resposta + "______________________________";
outTotal.textContent = numContas + "Conta(s) - Total R$: " + valTotal.toFixed(2);

inDescricao.value = "";
inValor.value = "";
inDescricao.focus();

}

var btRegistrar = document.getElementById("btRegistrar");
btRegistrar.addEventListener("click",  registrarContas);