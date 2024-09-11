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
    $res = false ;

    $ePossivel = "<p>O ano esta entre 1900 e o atual ano ?:";
   if ( $one == null || $two == null || $tree == null   ) { return ;}
    else{
        if ($one > 9999 || $one < 0 || $two < 00 || $two > 12 || $tree < 0 || $tree > 31) {
            echo "<p>Insira o valor corretamente.";
        }else {
            if ($one >= 1900 && $one <= date("Y") ) {
                $res = true;
                $newRes = var_export($res, true);
                $ePossivel = "<p>O ano esta entre 1900 e o atual ano ?: $newRes";
                $datanew = "$one-$two-$tree";
                $data = new DateTime($datanew);
                echo "Data colocada: " . $data->format("Y-m-d ") . "\n"; 
            }else {
                $newRes = var_export($res, true);
                $ePossivel = "<p>O ano esta entre 1900 e o atual ano ?: $newRes";
                $datanew = "$one-$two-$tree";
                $data = new DateTime($datanew);
                echo "Data colocada: " . $data->format("Y-m-d ") . "\n"; 
            }
            echo $ePossivel;

        }
        
    }

    // echo "Valor: " . var_export($res, true) . " o valor é primo \n";  


    
};


    
   
    
    ?>
    <h1>Escreva o número da sequência</h1>
    <form action="" method="get">
        <label for="num1">Ano </label>
        <br>
        <input type="number" name="num1" id="num1">
        <br><br>
        <label for="num2">Mes </label>
        <br>
        <input type="number" name="num2" id="num2">
        <br><br>
        <label for="num3">Dia </label>
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