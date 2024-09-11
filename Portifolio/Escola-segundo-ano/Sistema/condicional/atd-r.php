<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php   

    $res = null;
    $resul = null;
    $set = 0.75 ;
    $um = 1.05 ;

    if (ISSET($_GET['num1']) ) {
        $num1 = $_GET['num1'];

        if ($num1 <= 100) {
            $resul = $num1 * $set ;
           $res = $resul;
        } else {
            $resul = $num1 * $um ;
            $res = $resul;
        }
        
        
    }

    ?>
    
    <h1>Coloque seu valor da conta de luz em Kwh</h1>
    <form action="" method="get">
        <label for="num1">terceiro numero</label>
        <input type="text" name="num1" required>
<br><br>

<hr>

<input type="submit" value="Enviar">
<input type="reset" value="Reset">

    <p>
        <?php if ($res !== null) echo $res ?>
    </p>

    </form>

</body>
</html>
