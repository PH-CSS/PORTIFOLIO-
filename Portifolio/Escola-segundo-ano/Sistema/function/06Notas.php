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
$res = '';
   if ( $num1 == null || $num2 == null    ) { return ;}
    else{
     
        if ($num1 >= 7 && $num2 >= 7) {
            if ($num1 + $num2 >= 19) {
                $booleano = 1;
                $res = "Passou, com tudo certo";
            } else {
                $res = "O valor da soma não atende o requisio, Não Passou";
                $booleano = 2;
            };
        } 
        else {
            $res = "Alguma das notas não atende o rquisito, Não passou";
            $booleano = 3;
        };
        if ($booleano == 1) {
            echo $res;
        } else {
            echo $res;
            
        }
        

    };
    
    
};


    
   
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">F1 </label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <label for="num2">F2 </label>
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