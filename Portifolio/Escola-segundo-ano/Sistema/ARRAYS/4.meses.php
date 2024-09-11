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
    $lista = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    $algo = null;

    if (ISSET($_GET["enviar"])) {
        $numb = (ISSET($_GET["num1"])) ? $_GET["num1"] : 0;
        $numb = $numb - 1;
            $algo = $lista[$numb];
        $res = "<br>" . $algo;

    };

    ?>
    <form action="" method="get">
        <fieldset>
            <legend><h1>Escreva números para o seu mês</h1></legend>
        <label for="num1">Número do mês desejado </label>
        <br>
        <input type="number" name="num1" id="num1" value="<?php if (isset($_GET['num1']))echo $_GET['num1'] ?>" required>

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