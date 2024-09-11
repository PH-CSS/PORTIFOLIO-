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
    if (isset($_GET['num1'])) {
        $num1 = $_GET['num1'];
        $res = "<p>Os números primos de 1 à $num1 são:</p>";

        for ($i = 2; $i <= $num1; $i++) {
            $divisores = false;
            // echo " $i indice <br>";
                // vai do 2 até o numero selecionado passando pelo segundo "for"
                // sem contar o 0 e o 1 pois não são primos
                // apenas os nymeros primos estão relacionados ao codigo

            for ($count = 2; $count < $i; $count++) {
                // se o indice for igual que o contador no caso do dois passa direto

                // porem a outros numeros como 3 ou maiores passam no if
                if ($i % $count == 0) $divisores = true;
                // caso o resto da divisão do indice for 0 
                // o numero não é primo, carregando a "variavel" de divisores com true ou seja é divisivel (não primo)
                // echo " $count count <br>";
                // echo "$divisores div <br>";
            };
            $res = ($divisores != true) ? $res . "- ($i) -" : $res;

            // ($divisores == false) tb funciona
            // se os divisores for diferente de true (qualquer numero que sobrar do resto da divisão sem ser zero)
            // sera a resposta da vez  '$res . "- ($i) -"'
        }
    }
    ?>
    <form action="" method="get">
        <h1>Escreva o número limite</h1>
        <label for="num1">Número 1:</label>
        <input type="number" name="num1" id="num1">
        <br>
        <br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Resetar">
        <hr>
        <?php if ($res !== null)
            echo $res 
            // esse echo passara de um por um assim usando o indice que o resto da divisão for diferente de zero
        ?>
        </form>
    </body>

    </html>