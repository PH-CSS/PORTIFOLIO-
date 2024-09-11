<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    $resScreen = null;
    if(ISSET($_GET['num1'])){
        $max = $_GET['num1'];
        $razao = $_GET['num2'];
        $sum = 0;
        for ($i = 0; $i <= $max; $i++) { 
            $sum = $sum + $razao;
            $resScreen = "$resScreen - $sum";
        } 
    }
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">Máximo:</label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <label for="num2">Razão:</label>
        <br>
        <input type="number" name="num2" id="num2">
        <br><br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php if ($resScreen !== null) echo $resScreen?>
</body>
</html>