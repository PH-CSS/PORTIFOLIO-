<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>N número da sequência</title>
</head>

<body>
  <?php
  $res = null;
  if (isset($_GET['num1'])) {
      $num1 = $_GET['num1'];
      $res = 1;
      $respo = '';
      for ($i = 1; $i <= $num1; $i++) {
        
        $respo = $respo . $res . "<br>";
        $res = $res + 4;
      }}



  ?>

  <form action="" method="get">
    <fieldset>
      <legend> <h1>Escreva o número index da sequência</h1></legend>
   
      <label for = "num1">Número 1:</label>
      <br>
      <input type = "number" name = "num1" id = "num1" value = <?php if (isset($_GET['num1'])) echo $num1 ?>>
          <br><br>
          <input type = "submit" value = "Enviar">
          <input type = "reset" value = "Resetar">
          <hr>
      <?php if ($res !== null)echo $respo ?>
    </fieldset>
      </form>

  </body>
</html>