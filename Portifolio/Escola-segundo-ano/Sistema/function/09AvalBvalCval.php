<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raiz</title>
</head>
<body>
    <?php 

   function nameFuncao ($one, $two, $tree){
    $sequencia = '';
    $res = "Falso" ;


   if ( $one == null || $two == null || $tree == null   ) { return ;}
    else{

        if ($one > $two && $two > $tree) {
            $res = "verdadeiro";
        };
        
    }

    echo $sequencia = "<p> essa sequencia é decrescente?: $res";
    
    
};


    
   
    
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

        <br><br>

        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
    </form>
    <?php 
    if(ISSET($_GET["num1"]) && ISSET($_GET["num2"]) && ISSET($_GET["num3"]) )
    {  // verifica se é possivel pegar se for ai inicia
        $primaryNum = $_GET["num1"];
        $SecNum = $_GET["num2"];
        $TreNum = $_GET["num3"];


    }
    else {
        return '';
    };
    echo nameFuncao($primaryNum, $SecNum, $TreNum );
    ?>
</body>
</html>