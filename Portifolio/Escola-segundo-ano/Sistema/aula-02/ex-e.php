<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina 01 - 4 som vezes 5 divide 6</title>
</head>
<body>

 <?php

        


        if (ISSET($_GET['var1'])) {
            $num1 = $_GET["var1"];
            $res = $num1 * 4 ;
        } else {
            $res = "";
        }
        

       

        

    ?>
    
    <h1 name="CLASS">Calculadora</h1>

   <form action="" target="_self" method="GET" >

        <div class="calc">
            <section>
            <label for="var1">num1</label>  
            <input name ="var1" type="text" placeholder="Coloque um numero" required><br>
                <p></p>
                


</section><br><br>

            <section>
               <span class="Lip"> <input type="reset" value="Limpar"></span>
                <span class="plus"><input type="submit" value="Somar"></span>
</sectoin>

        </div>

        <hr>
<label for="resu">Resultado:</label>
         <input name="resu" value="<?php echo $res; ?>" type="res" placeholder="o perimetro é" disable>

 </form>


   

</body>
</html>