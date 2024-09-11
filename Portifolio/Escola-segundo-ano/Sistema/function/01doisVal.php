<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 




   function nameFuncao ($num1, $num2){

   if ( $num1 == null || $num2 == null  ) { return ;}
    else{
    $resScreen = $num1 + $num2 ;
   }

           if ($resScreen >= 1) {

            return "$resScreen";

           } elseif ($resScreen < 0) {

            $resScreen = 0;

            return "$resScreen";

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
    <?php 
    if(ISSET($_GET["num1"]) && ISSET($_GET["num2"])){  // verifica se é possivel pegar se for ai inicia
        $primaryNum = $_GET["num1"];
        $secundaryNum = $_GET["num2"];
    }
    else {
        return '';
    };
    echo nameFuncao($primaryNum, $secundaryNum);
    ?>
</body>
</html>