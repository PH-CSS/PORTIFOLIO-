<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 

$altura = (ISSET($_GET['altura'])) ? $_GET['altura'] : null;
$alturaDois = (ISSET($_GET['alturaDois'])) ? $_GET['alturaDois'] : null;

$resposta = ($altura > $alturaDois) ?  " $altura é maior" : "$alturaDois é maior" ;

?>

<form id="maioraltura" name="maioraltura" action="" target="_self" method="GET">
    <p>
        <label for="altura">primeira altura: </label>
        <input id="altura" name="altura" type="text" required>

<br><br>

        <label for="alturaDois">segunda altura: </label>
        <input id="alturaDois" name="alturaDois" type="text" required>
    </p>

    <input type="reset" value="limpar" id="limpar">
    <input type="submit" value="Verificar maior de altura">
<p></p>

<?php 
   if ($altura !== null || $alturaDois !== null ) echo $resposta;
?>
</form>
    
</body>
</html>