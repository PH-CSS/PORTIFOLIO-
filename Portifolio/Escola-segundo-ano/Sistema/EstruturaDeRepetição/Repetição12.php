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
        $primaryNum = $_GET['num1'];
        $secondyNum = $_GET['num2'];
        $resScreen = '';
        for ($i = 1; $i <= 20; $i++) { 
            $sum = $primaryNum + $secondyNum;
           $resScreen = $resScreen . "<p>${i}º) $secondyNum + $primaryNum = $sum</p>";
           $secondyNum = $primaryNum;
           $primaryNum = $sum;
        } 
    }
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">Primeiro número inicial</label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <label for="num2">Segundo número inicial</label>
        <br>
        <input type="number" name="num2" id="num2">
        <br><br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php if ($resScreen !== null) echo $resScreen ?>
</body>
</html>