<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 

   function nameFuncao ($num1, $num2, $num3){

   if ( $num1 == null && $num2 == null && $num3 == null  ) { return ;}
    else{
    
        
        if ($num1 > $num2 && $num1 > $num3) {
            return "Primeiro numero é o maior : $num1";

        } else if($num2 > $num1 && $num2 > $num3) {
            return "Segundo numero é o maior : $num2";

        }
        else {
            return "Terceiro numero é o maior : $num3";
        }
        

   };


    
   }
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">Primeiro número </label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <label for="num2">Segundo número </label>
        <br>
        <input type="number" name="num2" id="num2">
        <br><br>
        <label for="num3">Terceiro número </label>
        <br>
        <input type="number" name="num3" id="num3">
        <br><br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php 
    if(ISSET($_GET["num1"]) && ISSET($_GET["num2"]) && ISSET($_GET["num3"]))
    {  // verifica se é possivel pegar se for ai inicia
        $primaryNum = $_GET["num1"];
        $secundaryNum = $_GET["num2"];
        $terciariNum = $_GET["num3"];
    }
    else {
        return '';
    };
    echo nameFuncao($primaryNum, $secundaryNum, $terciariNum);
    ?>
</body>
</html>