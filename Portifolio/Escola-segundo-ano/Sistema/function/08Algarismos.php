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
       $res = null;
    echo "<p>As soma dos algaritimos é: </p>";



   if ( $num1 == null   ) { return ;}
    else{
        if ($num1 >= 1000) {
           $res = floor($num1 % 100 ) ;
           echo $res;
        } else {
            # code...
        }
        
    };
    
    
};


    
   
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1"> número </label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>

        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php 
    if(ISSET($_GET["num1"])  )
    {  // verifica se é possivel pegar se for ai inicia
        $primaryNum = $_GET["num1"];


    }
    else {
        return '';
    };
     nameFuncao($primaryNum);
    ?>
</body>
</html>