<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Criação de inputs</title>
</head>

<body>
  <?php
  $res = null;
  if (isset($_GET['num1'])) {
      $num1 = $_GET['num1'];
      $res = '';
      for ($i = 1; $i <= $num1; $i++) {
          $res = $res . 
              "
              <label for = numInp$i>numero $i:</label>
              <br>
              <input type = number name = numInp$i id = numInp$i>
              <br><br>
              ";
      }
      // o sistema de repetição concatena diversos campos de inputs 
      ;
      $res = $res . "
             <input type = submit value = Enviar name = enviar>
             <input type = reset value = Resetar>
      ";
      // no final dessas concatenações surge um novo valor de iniciar
      if (isset($_GET['enviar'])) {
          $maior = 0;
          for ($i = 1; $i <= $num1; $i++) {
              $numVerifi = $_GET["numInp$i"];
              // pega o valor dependendo do index da repetição e atribui para a variavel de comparação 
              $maior = ($numVerifi > $maior) ? $numVerifi : $maior ;
              // faz o teste para saber se é ou não o maior, dependendo da resposta
              // o "maior" que é o anterior maior número e comparado com o do index
              // assim segue até o último
          }
          $res = $res . "<hr><p>O maior número é <strong>$maior</strong></p>";
      }
  }

  ?>

  <form action="" method="get">
    <fieldset>
      <legend> <h1>Escreva o número da sequência</h1></legend>
   
      <label for = "num1">Número 1:</label>
      <br>
      <input type = "number" name = "num1" id = "num1" value = <?php if (isset($_GET['num1'])) echo $num1 ?>>
          <br><br>
          <input type = "submit" value = "Enviar">
          <input type = "reset" value = "Resetar">
          <hr>
      <?php if ($res !== null)echo $res ?>
    </fieldset>
      </form>

  </body>
</html>