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
    if (isset($_GET['num1'])) {
        $num1 = $_GET['num1'];
        $res = '';
        for ($i = 1; $i <= $num1; $i++) {
            $res = $res . 
                "<label for = numInp$i>numero $i:</label>
                <br>
                <input type = number name = numInp$i id = numInp$i>
                <br><br>";
        }
        ;
        $res = $res . "
               <input type = submit value = Enviar name = enviar>
               <input type = reset value = Resetar>
        ";
        if (isset($_GET['enviar'])) {
            $maior = 0;
            for ($i = 1; $i <= $num1; $i++) {
                $numVerifi = $_GET["numInp$i"];
                $maior = ($numVerifi > $maior) ? $numVerifi : $maior ;
            }
            $res = $res . "<hr><p>O maior número é <strong>$maior</strong></p>";
        }
    }

    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for = "num1">Número 1:</label>
        <br>
        <input type = "number" name = "num1" id = "num1" value = <?php if (isset($_GET['num1'])) echo $num1 ?>>
            <br><br>
            <input type = "submit" value = "Enviar">
            <input type = "reset" value = "Resetar">
            <hr>
        <?php if ($res !== null)echo $res ?>
        </form>

    </body>

    </html>