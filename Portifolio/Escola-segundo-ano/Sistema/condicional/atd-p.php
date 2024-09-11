<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>verificar segunda maior nota</title>
    
</head>
<body>
    <?php
    $res = null;
        if(ISSET($_GET['Nota1']) && ISSET($_GET['Nota2']) && ISSET($_GET['Nota3']) && ISSET($_GET['Nota4']) && ISSET($_GET['Nota5'])){
            $Nota1 = $_GET['Nota1'];
            $Nota2 = $_GET['Nota2']; 
            $Nota3 = $_GET['Nota3']; 
            $Nota4 = $_GET['Nota4']; 
            $Nota5 = $_GET['Nota5']; 
            
            if($Nota1 >= $Nota2 && $Nota1 >= $Nota3 && $Nota1 >= $Nota4 && $Nota1 >= $Nota5){
                if($Nota2 >= $Nota3 && $Nota2 >= $Nota4 && $Nota2 >= $Nota5){
                    //Nota2 é o maior
                    $res = $Nota2;
                }
                else if($Nota3 >= $Nota2 && $Nota3 >= $Nota4 && $Nota3 >= $Nota5){
                    //Nota3 é o maior
                    $res = $Nota3;
                }
                else if($Nota4 >= $Nota3 && $Nota4 >= $Nota2 && $Nota4 >= $Nota5){
                    //Nota4 é o maior
                    $res = $Nota4;
                }
                else if($Nota5 >= $Nota3 && $Nota5 >= $Nota4 && $Nota5 >= $Nota2){
                    //Nota5 é o maior
                    $res = $Nota5;
                }
                else {
                    $res = $Nota1;
                };
            }
            else if($Nota2 >= $Nota1 && $Nota2 >= $Nota3 && $Nota2 >= $Nota4 && $Nota2 >= $Nota5){
                //Nota2 é o maior
                if($Nota1 >= $Nota3 && $Nota1 >= $Nota4 && $Nota1 >= $Nota5){
                    //Num1 é o maior
                    $res = $Nota1;
                }
                else if($Nota3 >= $Nota1 && $Nota3 >= $Nota4 && $Nota3 >= $Nota5){
                    //Nota3 é o maior
                    $res = $Nota3;
                }
                else if($Nota4 >= $Nota3 && $Nota4 >= $Nota1 && $Nota4 >= $Nota5){
                    //Nota4 é o maior
                    $res = $Nota4;
                }
                else if($Nota5 >= $Nota3 && $Nota5 >= $Nota4 && $Nota5 >= $Nota1){
                    //Nota5 é o maior
                    $res = $Nota5;
                }
                else {
                    $res = $Nota2;
                };
            }
            else if($Nota3 >= $Nota2 && $Nota3 >= $Nota3 && $Nota3 >= $Nota4 && $Nota3 >= $Nota5){
                //Nota3 é o maior
                if($Nota2 >= $Nota1 && $Nota2 >= $Nota4 && $Nota2 >= $Nota5){
                    //Nota2 é o maior
                    $res = $Nota2;
                }
                else if($Nota1 >= $Nota2 && $Nota1 >= $Nota4 && $Nota1 >= $Nota5){
                    //Nota1 é o maior
                    $res = $Nota1;
                }
                else if($Nota4 >= $Nota1 && $Nota4 >= $Nota2 && $Nota4 >= $Nota5){
                    //Nota4 é o maior
                    $res = $Nota4;
                }
                else if($Nota5 >= $Nota1 && $Nota5 >= $Nota4 && $Nota5 >= $Nota2){
                    //Nota5 é o maior
                    $res = $Nota5;
                }
                else {
                    $res = $Nota3;
                };
            }
            else if($Nota4 >= $Nota2 && $Nota4 >= $Nota3 && $Nota4 >= $Nota4 && $Nota4 >= $Nota5){
                //Nota4 é o maior
                if($Nota2 >= $Nota3 && $Nota2 >= $Nota1 && $Nota2 >= $Nota5){
                    //Nota2 é o maior
                    $res = $Nota2;
                }
                else if($Nota3 >= $Nota2 && $Nota3 >= $Nota1 && $Nota3 >= $Nota5){
                    //Nota3 é o maior
                    $res = $Nota3;
                }
                else if($Nota1 >= $Nota3 && $Nota1 >= $Nota2 && $Nota1 >= $Nota5){
                    //Nota1 é o maior
                    $res = $Nota1;
                }
                else if($Nota5 >= $Nota3 && $Nota5 >= $Nota1 && $Nota5 >= $Nota2){
                    //Nota5 é o maior
                    $res = $Nota5;
                }
                else {
                    $res = $Nota4;
                };
            }
            else if($Nota5 >= $Nota2 && $Nota5 >= $Nota3 && $Nota5 >= $Nota4 && $Nota5 >= $Nota5){
                //Nota5 é o maior
                if($Nota2 >= $Nota3 && $Nota2 >= $Nota4 && $Nota2 >= $Nota1){
                    //Nota2 é o maior
                    $res = $Nota2;
                }
                else if($Nota3 >= $Nota2 && $Nota3 >= $Nota4 && $Nota3 >= $Nota1){
                    //Nota3 é o maior
                    $res = $Nota3;
                }
                else if($Nota4 >= $Nota3 && $Nota4 >= $Nota2 && $Nota4 >= $Nota1){
                    //Nota4 é o maior
                    $res = $Nota4;
                }
                else if($Nota1 >= $Nota3 && $Nota1 >= $Nota4 && $Nota1 >= $Nota2){
                    //Nota1 é o maior
                    $res = $Nota1;
                }
                else {
                    $res = $Nota5;
                };
            };
        };
    ?>
    <h1>Calcular segunda maior nota</h1>
    <form action="" method="get"  class="sing_form">
        <label for="Nota1">Nota 1:</label>
        <input type="text" name="Nota1" id="Nota1" pattern="[0-9]+$" required>
        <br> <br>
       <!-- Pattern = aceitar apenas numeros -->
        <label for="Nota2">Nota 2:</label>
        <input type="text" name="Nota2" id="Nota2" pattern="[0-9]+$" required>
        <br> <br>
       
        <label for="Nota3">Nota 3:</label>
        <input type="text" name="Nota3" id="Nota3" pattern="[0-9]+$" required>
        <br><br>
        
        <label for="Nota4">Nota 4:</label>
        <input type="text" name="Nota4" id="Nota4" pattern="[0-9]+$" required>
        <br><br>
        
        <label for="Nota5">Nota 5:</label>
        <input type="text" name="Nota5" id="Nota5" pattern="[0-9]+$" required>
        <br><br>
        
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
        <hr>
        <p>
            <?php if($resp !== null) echo "A segunda maior nota é: ".$resp ?>
        </p>
    </form>

</body>
</html>