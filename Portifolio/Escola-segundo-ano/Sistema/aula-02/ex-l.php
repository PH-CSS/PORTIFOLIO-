<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina 01 - SOMA 3 numeros</title>
</head>
<body>

 <?php

        
        if (ISSET($_GET['var1']) && ISSET($_GET['var2'])  ){

$num1 = $_GET["var1"];
 $num2 = $_GET["var2"] ; 

            $lajota = 30 * 30;

            $larg = $num1 / $lajota ;
                $comp = $num2 / $lajota;
                $res = $larg * $comp ;

        }

        else {
            $num1 = 0;
            $num2 = 0;
            $num3 = 0;
            $res = $num1 + $num2 + $num3; 
        }

        

    ?>
    
    <h1 name="CLASS">Calculadora</h1>

   <form action="" target="_self" method="GET" >

        <div class="calc">
            <section>
            <label for="var1">largura (Metros)</label>  
            <input name ="var1" value="" type="text" placeholder="Coloque um numero" required><br>
                <p></p>

                <label for="var2">comprimento (Metros) </label>  
            <input name ="var2" value="" type="text" placeholder="Coloque um numero" required><br>
                <p></p>
                


</section><br><br>

            <section>
               <span class="Lip"> <input type="reset" value="Limpar"></span>
                <span class="plus"><input type="submit" value="Somar"></span>
</sectoin>

        </div>

        <hr>
<label for="resu">Resultado d quantas lajotas tem no perimetro:</label>
         <input name="resu" value="<?php echo $res; ?>" type="res" placeholder="" disable>

 </form>


   

</body>
</html>