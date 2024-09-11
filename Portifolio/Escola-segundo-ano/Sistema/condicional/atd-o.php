<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calc preços</title>
</head>
<body>

    <?php   

    $res = null;

    if (ISSET($_GET['num1']) && ISSET($_GET['num2']) && ISSET($_GET['num3']) ) {
        $num1 = $_GET['num1'];
        $num2 = $_GET['num2'];
        $num3 = $_GET['num3'];

        if ($num1 > $num2 && $num1 > $num3) {
            # num1 maior
            $res = $num1;
        } else if ($num2 > $num1 && $num2 > $num3) {
            # num2 maior
            $res = $num2;
        }else {
            # num3 maior
            $res = $num3;
        }
        
    }

    ?>
    
    <h1>Calculo de 3 preços</h1>
    <form action="" method="get">
        <label for="num1">terceiro numero</label>
        <input type="text" name="num1" required>
<br><br>
        <label for="num2">segundo numero</label>
        <input type="text" name="num2" required>
        <br><br>
        <label for="num3">Primeiro numero</label>
        <input type="text" name="num3" required>
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