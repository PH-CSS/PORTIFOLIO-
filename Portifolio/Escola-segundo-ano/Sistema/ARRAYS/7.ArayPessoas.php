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
    $listaTudo = [];

for ($i=1; $i <= 10 ; $i++) { 
  $res = $res . "
    <section>
    <label for='num$i'>Pessoa $i </label>
    <br>
    <br>
    <label for='nome$i'>Nome: </label>
    <br>
    <input type='text' name='nome$i' placeholder='nome' required>
    <br><br>
    <label for='cit$i'>Cidade: </label>
    <br>
    <input type='text' list='city' name='cit$i' placeholder='cidade' required>
    <datalist id='city'>
    <option value='Santos'></option>
    <option value='São Paulo'></option>
    <option value='Campinas'></option>
    <option value='Santos'></option>
    <option value='São José dos Campos'></option>
    <option value='Ribeirão Preto'></option>
    <option value='Sorocaba'></option>
    <option value='Santo André'></option>
    <option value='São Bernardo do Campo'></option>
    <option value='São Caetano do Sul'></option>
    <option value='Guarulhos'></option>
    <option value='Osasco'></option>
    <option value='Mogi das Cruzes'></option>
    <option value='Jundiaí'></option>
    <option value='Piracicaba'></option>
    <option value='Bauru'></option>
    <option value='Franca'></option>
    <option value='Presidente Prudente'></option>
    <option value='Marília'></option>
    <option value='Taubaté'></option>
    <option value='Barueri'></option>
    <option value='Araraquara'></option>
    <option value='São Carlos'></option>
    <option value='Itu'></option>
    <option value='Americana'></option>
    <option value='Limeira'></option>
    <option value='Bragança Paulista'></option>
    <option value='Catanduva'></option>
    <option value='Indaiatuba'></option>
    <option value='Itu'></option>
    <option value='Araçatuba'></option>

    </datalist>
    <br><br>
    <label for='age$i'>Idade: </label>
    <br>
    <input type='number' name='age$i' placeholder='idade' required>
    <br><br>
    <label for='sex$i'>Sexo: </label>
    <br>
    <input type='text' list='gender' name='sex$i' placeholder='Sexo' required>
    <datalist id='gender'>
    <option value='Masculino'></option>
    <option value='Feminino'></option>
    </datalist>
    <br><br>  
    </section>
";
// repetição do interioro do HTML para a colocação das 10 pessoas
${"Lista".$i} = [];
// criação de lista de váriavel dinâmica para criação de várias listas  
}

$res = $res . "
<input type='submit' value='Enviar' name='enviar'>
<input type='reset' value='Resetar'>
";
// submit apenas no final

if (ISSET($_GET["enviar"])) {
for ($i=1; $i <= 10; $i++) { 
  ${"nome".$i} = $_GET["nome".$i];
  ${"cit".$i} = $_GET["cit".$i];
  ${"age".$i} = $_GET["age".$i];
  ${"sex".$i} = $_GET["sex".$i];
  // váriaveis dinâmicas para colocar dentro do array
  array_push(${"Lista".$i}, ${"nome".$i},${"cit".$i},${"age".$i},${"sex".$i});
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
  for ($i=0; $i < 4; $i++) { 
    $qualInput = ["Nome: ", "Cidade: ", "Idade: ", "Sexo: "];
    if ($i < 2) {
      $resultado1 = $resultado1. "<br> " . $qualInput[$i] . $value[$i];
    };
     if ($value[1] == "Santos") {
      $resultado2 = $resultado2. "<br>" . $qualInput[$i] . $value[$i];
    };
    if ($value[2] >= 18) {
      $resultado3 = $resultado3. "<br>" . $qualInput[$i] . $value[$i];
    };
    if ($value[3] == "Masculino") {
      $resultado4 = $resultado4. "<br>" . $qualInput[$i] . $value[$i];
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
            <legend><h1>Escreva as informações de cada pessoa</h1></legend>
    <div class="secao" style="display: flex; justify-content:center;flex-wrap: wrap; align-items:center; gap: 50px; width: 90vw" >
        <?php
            if ($res !== null) {
               echo $res;
           }
        ?>
        <!-- aonde aparece todo o conteúdo -->
</div>
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
        for ($i=1; $i <= 4 ; $i++) { 
          if (${"resultado".$i} !== null) {
            for ($i=1; $i <= 4 ; $i++) { 
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