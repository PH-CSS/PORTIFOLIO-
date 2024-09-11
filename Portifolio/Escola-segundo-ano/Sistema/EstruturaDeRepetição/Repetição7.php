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
        

        for ($i = 2; $i <= $num1; $i++) {
            $divisores = false;


            for ($count = 2; $count < $i; $count++) {


                if ($i % $count == 0) $divisores = true;
                
            };


           
        }
        
        $res = ($divisores != true) ? $res . ($i - 1) . " é primo <br>" : $res . ($i - 1) . " não é primo <br>" ;
    };


    ?>
    <form action="" method="get">
        <h1>Escreva o número limite</h1>
        <label for="num1">Número 1:</label>
        <input type="number" name="num1" id="num1">
        <br>
        <br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
        <hr>
        <?php
         if ($res !== true){
            echo $res;
        }
           
            // esse echo passara de um por um assim usando o indice que o resto da divisão for diferente de zero
        ?>
        </form>
    </body>

    </html>