<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina 01 - 4 som vezes 5 divide 6</title>
</head>
<body>

 <?php

        
        if (ISSET($_GET['var1']) && ISSET($_GET['var2']) && ISSET($_GET['var3'])
         && ISSET($_GET['var4']) && ISSET($_GET['var5']) && ISSET($_GET['var6']) ){

$num1 = $_GET["var1"];
 $num2 = $_GET["var2"] ; 
  $num3 = $_GET["var3"] ;
   $num4 = $_GET["var4"] ;
    $num5 = $_GET["var5"] ;
     $num6 = $_GET["var6"] ;

   $resSoma = $num1 + $num2 + $num3 + $num4;
            $resMulti = $resSoma * $num5;
            $res = $resMulti/$num6 ;
        }
        else {

            $res="";
        }

       

        

    ?>
    
    <h1 name="CLASS">Calculadora</h1>

   <form action="" target="_self" method="GET" >

        <div class="calc">
            <section>
            <label for="var1">num1</label>  
            <input name ="var1" type="text" placeholder="Coloque um numero" required><br>
                <p></p>
                

                <label for="var2">num2</label>  
            <input name ="var2" type="text" placeholder="Coloque um numero" required><br>
                <p></p>
                
            <label for="var3">num3</label>  
            <input name ="var3" type="text" placeholder="Coloque um numero" required><br>
            <p></p>
                
                <label for="var4">num4</label>  
                <input name ="var4" type="text" placeholder="Coloque um numero" required><br>
                <p></p>
                
                <label for="var5">num5</label>  
                <input name ="var5" type="text" placeholder="Coloque um numero" required><br>
                <p></p>
                
                <label for="var6">num6</label>  
                <input name ="var6" type="text" placeholder="Coloque um numero" required><br>
    


</section><br><br>

            <section>
               <span class="Lip"> <input type="reset" value="Limpar"></span>
                <span class="plus"><input type="submit" value="Somar"></span>
</sectoin>

        </div>

        <hr>
<label for="resu">Resultado:</label>
         <input name="resu" value="<?php echo $res; ?>" type="res" placeholder="" disable>

 </form>


   

</body>
</html>