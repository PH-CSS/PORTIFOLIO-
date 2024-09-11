<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Divisão</title>
</head>
<body>

<?php 

$num = (ISSET($_GET['num'])) ? $_GET['num'] : null;
$num2 = (ISSET($_GET['num2'])) ? $_GET['num2'] : null;

// $resposta = ($num > $num2) ?  " $num é maior" : "$num2 é maior" ;

$resposta = ($num > $num2 ) ? 
     $num2 / $num
   : 
    $num / $num2
;

?>

<form id="maiornum" name="maiornum" action="" target="_self" method="GET">
    <p>
        <label for="num">primeiro num: </label>
        <input id="num" name="num" type="text" required>

<br><br>

        <label for="num2">segunda num: </label>
        <input id="num2" name="num2" type="text" required>
    </p>

    <input type="reset" value="limpar" id="limpar">
    <input type="submit" value="Verificar maior de num">
<p></p>

<?php 
   if ($num !== null || $num2 !== null ) echo $resposta;
?>
</form>
    
</body>
</html>