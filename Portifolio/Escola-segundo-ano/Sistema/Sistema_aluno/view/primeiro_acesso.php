<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aluno view</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../ultil/style.css">
    <link rel="stylesheet" href="../ultil/cardStart.css">
    <link rel="stylesheet" href="../ultil/BGtransition.css">
    <script src="../ultil/javascript/transitionOnClick.js" defer></script>
    <script src="../ultil/javascript/getData.js" defer></script>


</head>
<body>
<?php
// Inclua a classe Database
include_once('dbase.php');

// Crie uma instância da classe
$db = new Database();

// Obtenha a conexão
$conexao = $db->getConexao();

// Use a conexão conforme necessário, por exemplo:
$result = $conexao->prepare("SELECT * FROM usuarios");

$result->execute();

$data = $result->fetchAll();

print_r($data);
// fim de conexão

if (ISSET($_GET['submit'])) {

    $nome  = $_GET['nome'];
    $cpf = $_GET['CPF'];
    $data = $_GET['data'];
    $email = $_GET['email'];
    $login = $_GET['login'];
    $senha = $_GET['senha'];

    $result = $conexao->prepare("INSERT INTO usuarios
    VALUE
        ('$nome', '$cpf', '$data', '$email', '$login', '$senha')
    ");
    
    $result->execute();
}

?>

<!-- parte de introdução -->
 <div class="infoStart">
    <!-- corpo -->
    <div class="iluCont">
        <div class="textApers">

            <div class="dream">
                <!-- bolinhas para a mensagem de texto -->
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
            <div class="textArea">
                <!-- msg de texto -->
                <div class="msg">OLÁ CONVIDADO!</div>
            </div>
            </div>
            <div class="buttonArea">
                <!-- área total da zona branca do botão-->
                <div class="buttonRadius">
                    <div class="button">
                        <img src="../ultil/img/seta-direita.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="textStart">
            <!-- texto se referindo ao botão -->
        <h1>COMO VAI!?</h1>
        <h3>clique no botão acima para acessar a página de login!  </h3>
    </div>
</div> 

<!-- termino da primeira parte -->

<div class="logInSection">
    <div class="bgGround">
        <!-- área do progresso do login -->

        <div class="linhaDeLog">
            <header>
                <h1>Seu passos estão se iniciando!</h1>
                <input type="text" class="loged serIdent" placeholder="Login" disabled>
            </header>
            <div class="progress">
                <div class="left">

                    <div class="third sectionChange">
                        <input class="serIdent" type="text" placeholder="Data de nascimento" disabled>
                        <div class="stick"></div>
                    </div>

                    <div class="first sectionChange">
                        <input class="serIdent" type="text" placeholder="Nome completo" disabled>
                        <div class="stick"></div>
                    </div>

                </div>

                <div class="separacao">
                    <div class="barra"></div>
                    <div class="barra"></div>
                    <div class="barra"></div>
                </div>

                <div class="right">

                    <div class="second sectionChange">
                        <div class="stick"></div>
                        <input class="serIdent" type="email" placeholder="email" disabled>
                    </div>

                    <div class="last sectionChange">
                        <div class="stick"></div>
                        <input class="serIdent" type="text" placeholder="CPF" disabled>
                    </div>

                </div>
            </div>
        </div>

    </div>
    <div class="inputSection">
        <section>
            <h1>Sign Up</h1>
            <h2>Just do it's free</h2>
        </section>
    
        <form action="" method="_GET">
            <div class="inputArea">   
                <input class="areaIdent" type="text" placeholder="Nome completo" name="nome"required>
                <input class="areaIdent" maxlength="14" type="text" placeholder="CPF" name="CPF"  required> 
                <input class="areaIdent" type="date" placeholder="Data de nascimento" name="data" required>
                <input class="areaIdent" type="email" placeholder="email" name="email"  required>  
                <div class="sameArea"> 
                    <input class="areaIdent" type="text" placeholder="Login" name="login" required>  
                    <input class="areaIdent" type="password" placeholder="Senha" name="senha" required>
                </div>
    
            </div>
            <button type="submit" name="submit" class="cad">Cadastrar</button>
        </form>
    </div>
</div>
    
</body>
</html>