<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina 01 - SOMA 3 numeros</title>
</head>
<body>

 <?php

        
        if (ISSET($_GET['var1'])  ){

$num1 = $_GET["var1"];


            $eur = $num1 * 0.18 ;
            $lib = $num1 * 9.42 ;
            $dol = $num1 * 0.20 ;
            $iene = $num1 * 30.02 ;
            $arg = $num1 * 70.72  ;

        }

        else {

            $eur =""; 
            $lib =""; 
            $dol =""; 
            $iene =""; 
            $arg =""; 
        }

        

    ?>
    
    <h1 name="CLASS">Calculadora</h1>

   <form action="" target="_self" method="GET" >

        <div class="calc">
            <section>
            <label for="var1">valor</label>  
            <input name ="var1" type="text" placeholder="Coloque um numero" required><br>
                <p></p>




</section><br><br>

            <section>
               <span class="Lip"> <input type="reset" value="Limpar"></span>
                <span class="plus"><input type="submit" value="Somar"></span>
</sectoin>

        </div>

        <hr>
<label for="resu">Euro:</label>
         <input name="resu" value="<?php echo $eur; ?>" type="res" placeholder="" disable>
<br><br>
         <label for="resu">Libra egipcia:</label>
         <input name="resu" value="<?php echo $lib; ?>" type="res" placeholder="" disable>
<br><br>
         <label for="resu">Dolar:</label>
         <input name="resu" value="<?php echo $dol; ?>" type="res" placeholder="" disable>
<br><br>
         <label for="resu">Iene:</label>
         <input name="resu" value="<?php echo $iene; ?>" type="res" placeholder="" disable>
<br><br>

         <label for="resu">Peso argentino:</label>
         <input name="resu" value="<?php echo $arg; ?>" type="res" placeholder="" disable>


 </form>


   

</body>
</html>