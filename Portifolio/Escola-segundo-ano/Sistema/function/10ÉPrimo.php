<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raiz</title>
</head>
<body>
    <?php 

   function nameFuncao ($num1){
    $res = 0 ;
    $valor = false;
       echo "<p>Os ultimo primo antes de $num1 é:</p>";


   if ( $num1 == null    ) { return ;}
    else{

        for ($i = 2; $i <= $num1; $i++) {
            $divisores = false;




            for ($count = 2; $count < $i; $count++) {

                if ($i % $count == 0) $divisores = true;
            };
                $res = ($divisores != true) ? $res = $i : $res;  
            if ($res == $num1) {
                $valor = true;
            } 
        };
        echo "Valor: " . var_export($valor, true) . " o valor é primo \n";   
    }
    
    
};


    
   
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">Primeiro número </label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>

        <br><br>

        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php 
    if(ISSET($_GET["num1"]) )
    {  // verifica se é possivel pegar se for ai inicia
        $primaryNum = $_GET["num1"];

    }
    else {
        return '';
    };
    echo nameFuncao($primaryNum);
    ?>
</body>
</html>