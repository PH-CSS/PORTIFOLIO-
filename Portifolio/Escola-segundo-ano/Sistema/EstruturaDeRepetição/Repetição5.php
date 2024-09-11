<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <title>Repetição 6</title>
    </head>
<body>
    <?php
    // neste exemplo se ultiliza outra formula
    // dividi-se o numero de termos por dois
    // e multiplica pela soma do primeiro e ultimo termo
    // n = (l-a)/d + 1
     // n == numero de termos
    // l == ultimo termo
    // a == primeiro termo
    // n = (200 - 26)/2 +1 = 88 
    // a função aritimetica sobraria
    //  S = n/2 * (l+a)
    //  S = 88/2 = 44 * 226
    $resposta = 0;
    $num1 = 226;
    for ($i=1; $i <= 44 ; $i++) { 

        $resposta = $resposta + $num1;
         echo "o valor da soma é: " .$resposta. " repetição num ". $i ."<br> ";

       
    };


    ?>
</body>
</HTML>