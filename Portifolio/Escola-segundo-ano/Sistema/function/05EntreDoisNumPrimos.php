<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raiz</title>
</head>
<body>
    <?php 
   function nameFuncao ($num1, $num2){
       $res = null;
    echo "<p>Os números primos de $num1 à $num2 são:</p>";



   if ( $num1 == null || $num2 == null    ) { return ;}
    else{
        if ($num1 > $num2) {
            return "Você inseriu um numero incorretamente";
        }
        else {
            for ($i = $num1; $i <= $num2; $i++) {
                $divisores = false;
                
                for ($count = 2; $count < $i; $count++) {
                    
                    if ($i % $count == 0) $divisores = true;
                };
                $res = ($divisores != true) ? $res . "_($i)_<br>" : "$res";  
            };

            echo $res;

        };
    };
    
    
};


    
   
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">menor número </label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <label for="num2">maior número </label>
        <br>
        <input type="number" name="num2" id="num2">
        <br><br>

        <br><br>

        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php 
    if(ISSET($_GET["num1"]) && ISSET($_GET["num2"]) )
    {  // verifica se é possivel pegar se for ai inicia
        $primaryNum = $_GET["num1"];
        $SecNum = $_GET["num2"];


    }
    else {
        return '';
    };
     nameFuncao($primaryNum, $SecNum);
    ?>
</body>
</html>