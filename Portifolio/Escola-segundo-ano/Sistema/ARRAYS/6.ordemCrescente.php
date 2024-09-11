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
    $lista = [];
    $algo = null;

    if (ISSET($_GET["enviar"])) {
        $numnew = ISSET($_GET['numnew'])? $_GET['numnew']: 1 ;
        for ($i=1; $i <= 10 ; $i++) { 
        $numb = (ISSET($_GET["num$i"])) ? $_GET["num$i"] : 0;
        array_push($lista, $numb);
        }

        sort($lista);

        foreach ($lista as $key => $value) {
          $algo = $algo . "<br>" .$value; 
        }

        $res = "<br>" . $algo ;

    };

    ?>
    <form action="" method="get">
        <fieldset>
            <legend><h1>Escreva 10 números para arrumar em orem crescente</h1></legend>
        <label for="num1">Números </label>
        <br>
        <input type="number" name="num1" id="num1" value="<?php if (isset($_GET['num1']))echo $_GET['num1'] ?>" required>
        <br><br>
        <input type="number" name="num2" id="num2" value="<?php if (isset($_GET['num2']))echo $_GET['num2'] ?>" required>
        <br><br>
        <input type="number" name="num3" id="num1" value="<?php if (isset($_GET['num3']))echo $_GET['num3'] ?>" required>
        <br><br>
        <input type="number" name="num4" id="num1" value="<?php if (isset($_GET['num4']))echo $_GET['num4'] ?>" required>
        <br><br>
        <input type="number" name="num5" id="num1" value="<?php if (isset($_GET['num5']))echo $_GET['num5'] ?>" required>
        <br><br>
        <input type="number" name="num6" id="num1" value="<?php if (isset($_GET['num6']))echo $_GET['num6'] ?>" required>
        <br><br>
        <input type="number" name="num7" id="num2" value="<?php if (isset($_GET['num7']))echo $_GET['num7'] ?>" required>
        <br><br>
        <input type="number" name="num8" id="num1" value="<?php if (isset($_GET['num8']))echo $_GET['num8'] ?>" required>
        <br><br>
        <input type="number" name="num9" id="num1" value="<?php if (isset($_GET['num9']))echo $_GET['num9'] ?>"  required>
        <br><br>
        <input type="number" name="num10" id="num1" value="<?php if(isset($_GET['num1']))echo $_GET['num10'] ?>"  required>
        <br><br>


        <hr>

        <input type="submit" name="enviar" value="Enviar" >
        <input type="reset" value="Resetar">
        <?php
            if ($res !== null) {
               echo $res;
           }
        ?>
            </fieldset>
        </form>

    </body>

    </html>