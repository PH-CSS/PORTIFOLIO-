<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 
// pega o primeiro e ultimo valor e faça a soma
// esse numero é = $valor
//  formula = $num/2 
//divida esse numero pela metade para sebre quantas vezes sera necessario-
// -repetir a soma
$resp = 0;
    for ($i=1; $i <= 100 ; $i++) { 
        $resp = $resp + $i;
        
         echo "O valor da repetição: ".$i." é de: ".($resp)."<br>";
    }


?>
    
</body>
</html>