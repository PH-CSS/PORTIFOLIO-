<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $lista = [];
    $algo = null;
    $ePar = 0;
    $eImpar = 0;
    $positivo = 0;
    $negativo = 0;
    if (ISSET($_GET["enviar"])) {
        for ($i=1; $i <= 10 ; $i++) { 
        $numb = (ISSET($_GET["num$i"])) ? $_GET["num$i"] : 0;
        array_push($lista, $numb);
        }
       
    };
    foreach ($lista as $key => $value) {

        $algo = $algo . $value;
         
    };

    $res = "
    <input type='number' name='numnew' id='numnew' >
    <input type='submit' name='enviar2' value='Enviar'>
    <input type='reset' value='Resetar'>";

    if (ISSET($_GET['enviar2'])) {
        $numnew = ISSET($_GET['numnew'])? $_GET['numnew']: 1 ;
        foreach ($lista as $key => $value) {
            $value = $value * $numnew;
        }

    }

    ?>
    <form action="" method="get">
        <fieldset>
            <legend><h1>Escreva 10 números para a sequência</h1></legend>
        <label for="num1">Números </label>
        <br>
        <input type="number" name="num1" id="num1" value=<?php if (isset($_GET['num1']))echo $_GET['num1'] ?>>
        <br><br>
        <input type="number" name="num2" id="num2" value=<?php if (isset($_GET['num2']))echo $_GET['num2'] ?>>
        <br><br>
        <input type="number" name="num3" id="num1" value=<?php if (isset($_GET['num3']))echo $_GET['num3'] ?>>
        <br><br>
        <input type="number" name="num4" id="num1" value=<?php if (isset($_GET['num4']))echo $_GET['num4'] ?>>
        <br><br>
        <input type="number" name="num5" id="num1" value=<?php if (isset($_GET['num5']))echo $_GET['num5'] ?>>
        <br><br>
        <input type="number" name="num6" id="num1" value=<?php if (isset($_GET['num6']))echo $_GET['num6'] ?>>
        <br><br>
        <input type="number" name="num7" id="num2" value=<?php if (isset($_GET['num7']))echo $_GET['num7'] ?>>
        <br><br>
        <input type="number" name="num8" id="num1" value=<?php if (isset($_GET['num8']))echo $_GET['num8'] ?>>
        <br><br>
        <input type="number" name="num9" id="num1" value=<?php if (isset($_GET['num9']))echo $_GET['num9'] ?>>
        <br><br>
        <input type="number" name="num10" id="num1" value=<?php if(isset($_GET['num1']))echo $_GET['num10'] ?>>
        <br><br>
        <input type="submit" name="enviar" value="Enviar">
        <input type="reset" value="Resetar">

        <input type="number" name="num10" id="num1" value=<?php if(isset($_GET['num1']))echo $_GET['num10'] ?>>
        <input type="submit" name="enviar" value="Enviar">
        <input type="reset" value="Resetar">
        <hr>
        <?php
         if ($res !== null){
        echo $res;
        }
             if ($res2 !== null) {
                echo $res2;
            }
             ?>
            </fieldset>
        </form>

    </body>

    </html>