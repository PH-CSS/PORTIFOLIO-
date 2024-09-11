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
    $resultado1 = null;
    $resultado2 = null;
    $resultado3 = null;
    $resultado4 = null;
    $resultado5 = null;

    $listaTudo = [];

for ($i=1; $i <= 10 ; $i++) { 
  $numSerie = $i - 1;
  $res = $res . "
    <section>
    <label for='num$i'>Número de registro: $numSerie </label>
    <br>
    <br>
    <label for='Modelo$i'>Modelo: </label>
    <br>
    <input type='text' name='Modelo$i' placeholder='Modelo' required>
    <br>
    <br>
    <label for='fabricante$i'>fabricante: </label>
    <br>
    <input type='text'  name='fabricante$i' placeholder='fabricante' required>
    <br>
    <br>
    <label for='cor$i'>Cor: </label>
    <br>
    <input type='text' name='cor$i' placeholder='Cor' required>
    <br>
    <br>
    <label for='nPortas$i'>Qnt. Portas: </label>
    <br>
    <input type='number'  name='nPortas$i' placeholder='Qnt. Portas' required>
    <br>
    <br>
    <label for='ano$i'>Ano: </label>
    <br>
    <input type='number'  name='ano$i' placeholder='Ano' required>
    <br><br>  
    </section>
";
// repetição do interioro do HTML para a colocação das 10 pessoas
${"Lista".$i} = [];
// criação de lista de váriavel dinâmica para criação de várias listas  
}

$res = $res . "
<div class='ajusteEnviar' style='display:flex; flex-direction:column; gap:10px;'>
<input style='width: 100px;' type='submit' value='Enviar' name='enviar'>
<input style='width: 100px;' type='reset' value='Resetar'>
";
// submit apenas no final

if (ISSET($_GET["enviar"])) {
for ($i=1; $i <= 10; $i++) { 
  ${"Modelo".$i} = $_GET["Modelo".$i];
  ${"fabricante".$i} = $_GET["fabricante".$i];
  ${"cor".$i} = $_GET["cor".$i];
  ${"nPortas".$i} = $_GET["nPortas".$i];
  ${"ano".$i} = $_GET["ano".$i];
  // váriaveis dinâmicas para colocar dentro do array
  array_push(${"Lista".$i}, ${"Modelo".$i},${"fabricante".$i},${"cor".$i},${"nPortas".$i},${"ano".$i});
  // var_dump(${"Lista".$i});
  array_push($listaTudo, ${"Lista".$i});
}

foreach ($listaTudo as $key => $value) {
  $valorReal = $key + 1;
  // para não aparecer "Pessoa 0"
  
  $resultado1 = $resultado1."<label><h3>Pessoa ".$valorReal." </h3></label> " ;
  $resultado2 = $resultado2."<label><h3>Pessoa ".$valorReal." </h3></label> " ;
  $resultado3 = $resultado3."<label><h3>Pessoa ".$valorReal." </h3></label> " ;
  $resultado4 = $resultado4."<label><h3>Pessoa ".$valorReal." </h3></label> " ;
  $resultado5 = $resultado5."<label><h3>Pessoa ".$valorReal." </h3></label> " ;

  $qualInput = ["Modelo: ", "fabricante: ", "Cor: ", "Num. Portas: ", "Ano: "];
       if ($value[2] == "prata") {
      $resultado2 = $resultado2. "<br>" . $qualInput[0] . $value[0];
    };
  for ($i=0; $i <= 4; $i++) { 
    if ($i == 0 || $i == 4) {
      $resultado1 = $resultado1. "<br> " . $qualInput[$i] . $value[$i];
    };

    if ($i == 0 || $i == 2 || $i == 3) {
      $resultado3 = $resultado3. "<br>" . $qualInput[$i] . $value[$i];
    };
    if ($value[1] == "Ford") {
      $resultado4 = $resultado4. "<br>" . $qualInput[$i] . $value[$i];
    };
    if ($value[4] >= 2013) {
      $resultado5 = $resultado5. "<br>" . $qualInput[$i] . $value[$i];
    };

    // adiciona a lista para selecionar o label de cada setor de resposta
  }
  for ($i=1; $i <= 4 ; $i++) { 
    ${"resultado".$i} = ${"resultado".$i} ."<br><br>";
  }
  // mostra a lista toda com mais dois espaços
}


}
    

    ?>
    <form action="" method="get">
        <fieldset>
            <legend><h1>Escreva as informações de cada carro</h1></legend>
    <div class="secao" style="display: grid; align-content:center; gap: 50px; width: 90vw" >
    </div>
      <?php
            if ($res !== null) {
              echo $res;
            }
            ?>
        <!-- aonde aparece todo o conteúdo -->
<hr>
<div class="listas" 
style="
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
gap:10%;
">
        <?php 
        for ($i=1; $i <= 5 ; $i++) { 
          if (${"resultado".$i} !== null) {
            for ($i=1; $i <= 5 ; $i++) { 
              echo "<section>Lista $i: <br>" . ${"resultado".$i} . "</section>";
            }
          }
        }
      // aonde aparece todas as listas
        ?>   
        </div>
            </fieldset>
        </form>
    </body>

    </html>