<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>

<body>
    <?php
    $res = null;
    $lista1 = [];
    $lista2 = [];
    $resultado = null;

    if (ISSET($_GET["enviar"])) {
        for ($i=1; $i <= 20 ; $i++) { 
          if ($i <= 10) {
            $numb = (ISSET($_GET["num$i"])) ? $_GET["num$i"] : 0;
        array_push($lista1, $numb);
          } else {
            $numb = (ISSET($_GET["num$i"])) ? $_GET["num$i"] : 0;
        array_push($lista2, $numb);
          };
        };
        foreach ($lista1 as $key => $value) {
            $resultado =  $resultado ."<br>". $value * $lista2[$key] ;
        };
        $res = $resultado;

    };

    ?>
    <form action="" method="get">
        <fieldset>
            <legend><h1>Escreva 10 números em cada para a multiplicação entre arrays</h1></legend>
    <div class="secao" style="display: flex; gap: 50px" >
      <section>
        <label for="num1">Array 1 </label>
        <br>
        <input type="number" name="num1" value="<?php if (isset($_GET['num1']))echo $_GET['num1'] ?>" required>
        <br><br>
        <input type="number" name="num2" value="<?php if (isset($_GET['num2']))echo $_GET['num2'] ?>" required>
        <br><br>
        <input type="number" name="num3" value="<?php if (isset($_GET['num3']))echo $_GET['num3'] ?>" required>
        <br><br>
        <input type="number" name="num4" value="<?php if (isset($_GET['num4']))echo $_GET['num4'] ?>" required>
        <br><br>
        <input type="number" name="num5" value="<?php if (isset($_GET['num5']))echo $_GET['num5'] ?>" required>
        <br><br>
        <input type="number" name="num6" value="<?php if (isset($_GET['num6']))echo $_GET['num6'] ?>" required>
        <br><br>
        <input type="number" name="num7" value="<?php if (isset($_GET['num7']))echo $_GET['num7'] ?>" required>
        <br><br>
        <input type="number" name="num8" value="<?php if (isset($_GET['num8']))echo $_GET['num8'] ?>" required>
        <br><br>
        <input type="number" name="num9" value="<?php if (isset($_GET['num9']))echo $_GET['num9'] ?>"  required>
        <br><br>
        <input type="number" name="num10" value="<?php if(isset($_GET['num10']))echo $_GET['num10'] ?>"  required>
        <br><br>
        </section>
        <section>
        <label for="num11">Array 2 </label>
        <br>
        <input type="number" name="num11" value="<?php if (isset($_GET['num11']))echo $_GET['num11'] ?>" required>
        <br><br>
        <input type="number" name="num12" value="<?php if (isset($_GET['num12']))echo $_GET['num12'] ?>" required>
        <br><br>
        <input type="number" name="num13" value="<?php if (isset($_GET['num13']))echo $_GET['num13'] ?>" required>
        <br><br>
        <input type="number" name="num14" value="<?php if (isset($_GET['num14']))echo $_GET['num14'] ?>" required>
        <br><br>
        <input type="number" name="num15" value="<?php if (isset($_GET['num15']))echo $_GET['num15'] ?>" required>
        <br><br>
        <input type="number" name="num16" value="<?php if (isset($_GET['num16']))echo $_GET['num16'] ?>" required>
        <br><br>
        <input type="number" name="num17" value="<?php if (isset($_GET['num17']))echo $_GET['num17'] ?>" required>
        <br><br>
        <input type="number" name="num18" value="<?php if (isset($_GET['num18']))echo $_GET['num18'] ?>" required>
        <br><br>
        <input type="number" name="num19" value="<?php if (isset($_GET['num19']))echo $_GET['num19'] ?>"  required>
        <br><br>
        <input type="number" name="num20" value="<?php if(isset($_GET['num20']))echo $_GET['num20'] ?>"  required>
        <br><br>
        </section>
        </div>


        <hr>
        <br>
        <input type="submit" name="enviar" value="Enviar" >
        <input type="reset" value="Resetar">
        <?php
            if ($res !== null) {
               echo $res;
           }
        ?>
            </fieldset>
        </form>

    </body>

    </html>