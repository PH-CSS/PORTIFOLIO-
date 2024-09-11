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
        $num1 = $_GET['num1'];
        $primaryNum = 1;
        $secondyNum = 1;
        $resScreen = '';
        for ($i = 0; $i < $num1; $i++) { 
            $res = $primaryNum + $secondyNum;
           $resScreen = $resScreen . "<p>$secondyNum + $primaryNum = $res</p>";
           $secondyNum = $primaryNum;
           $primaryNum = $res;
        } 
    }
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">Número 1:</label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php if ($resScreen !== null) echo $resScreen ?>
</body>
</html>