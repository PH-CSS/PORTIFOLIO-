<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculo de imc</title>
</head>
<body>

<?php

ISSET($_GET['var1'])?$altura = $_GET["var1"] : $altura = 1  ;
ISSET($_GET['var2'])?$peso = $_GET["var2"] : $peso = 1 ; 

if($altura > 100) $altura = $altura/100 ;  

$resp = $peso / ($altura * $altura) ; 
$res = round($resp, 2);
if ($res == 1) $res = "";    
// Abaixo de 18.5: Abaixo do peso
// Entre 18.5 e 24.9: Peso normal
// Entre 25 e 29.9: Sobrepeso
// 30 ou mais: Obesidade
if ($res < 18.5) {
$correcaoIMC = "Abaixo do peso";
}else if ($res > 18.5 && $res < 24.9 ) {
$correcaoIMC = "Peso normal";
}else if ($res > 25 && $res < 29.9 ) {
$correcaoIMC = "Sobrepeso";
}else if ($res > 30 ) {
$correcaoIMC = "Obesidade";
}

?>



<form action="" target="_self" method="GET" >
  <fieldset>
    <legend><h1 >Calculadora de peso ideal</h1></legend>

  <div class="calc">
      <section>
      <label for="var1">altura</label>  
      <input name ="var1" type="text" placeholder="Coloque sua altura" required><br>
      <br>
          

      <label for="var2">peso</label>  
      <input name ="var2" type="text" placeholder="Coloque seu peso" required><br>
        

      </section>
      <br>
      <br>

   <section>
      <span class="Lip"> <input type="reset" value="Limpar"></span>
       <span class="plus"><input type="submit" value="Somar"></span>
   </section>
   <hr>
   <label for="respo">Resposta</label>
   <input style="text-align: center" type="text" value = "<?php echo $res ."   ".$correcaoIMC ?>" disabled>
  </fieldset>
        </div>

</body>
</html>