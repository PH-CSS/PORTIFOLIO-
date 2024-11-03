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
    <script src="../ultil/javascript/loginChange.js" defer></script>
    <script src="../ultil/javascript/getData.js" defer></script>

<!-- https://sistema.infinityfreeapp.com/aula/SW/?i=1 -->
</head>
<body>
<?php
// Inclua a classe Database
include_once 'dbase.php';

// Crie uma instância da classe
$db = new Database();

// Obtenha a conexão
$conexao = $db->getConexao();


if (isset($_GET['login'])) {
    if (isset($_GET['submit'])) {
        $login = $_GET['login'];
        $senha = $_GET['senha'];
    
        // Certifique-se de que todos os campos foram preenchidos
        if ($login && $senha) {
            // Verificar se o login já existe
            $contador = 0;

            $result = $conexao->prepare("SELECT log_in FROM usuarios WHERE log_in = ? ");
            $result->execute([$login]);
            $data = $result->fetchAll();
            $contador += count($data);
            echo $contador;
            
            $result = $conexao->prepare("SELECT senha FROM usuarios WHERE log_in = ? ");
            $result->execute([$login]);
            $data = $result->fetchAll();
            print_r($data);
            echo $contador;
        };
            
            if ($contador > 0) {
                 echo "hello user.";
            };
        };
    };
 
    if(isset($_GET['cadastro'])){
    if (isset($_GET['submit'])) {
    $nome  = $_GET['nome'];
    $cpf = $_GET['CPF'];
    $data_nascimento = $_GET['data'];
    $email = $_GET['email'];
    $login = $_GET['login'];
    $senha = $_GET['senha'];

    // Certifique-se de que todos os campos foram preenchidos
    if ($nome && $cpf && $data_nascimento && $email && $login && $senha) {
        // Verificar se o login já existe
        $result = $conexao->prepare("SELECT log_in, CPF FROM usuarios WHERE log_in = ? AND CPF = ? ");
        $result->execute([$login, $cpf]);
        $data = $result->fetchAll();

        // A consulta SELECT log_in FROM usuarios WHERE log_in = ? 
        // busca o valor de log_in na tabela usuarios 
        // onde o valor de log_in for igual ao parâmetro substituído pelo ?.
        // "$result->execute([$login])";
        // O uso do ? como placeholder é parte de uma estratégia para 
        // proteger o sistema contra ataques de SQL Injection e também para 
        // facilitar a reutilização de consultas.

        if (count($data) > 0) {
            // echo "Já existe um usuário com esse login.";
        } else {
            // Hash da senha para armazenamento seguro
            $senha_hashed = password_hash($senha, PASSWORD_DEFAULT);

            // Inserir novo usuário no banco de dados
            try {
                $result = $conexao->prepare("INSERT INTO usuarios (name_user, cpf, data_nascimento, email, log_in, senha) VALUES (?, ?, ?, ?, ?, ?)");
                $result->execute([$nome, $cpf, $data_nascimento, $email, $login, $senha_hashed]);
                // echo "Usuário cadastrado com sucesso!";
            } catch (PDOException $e) {
                echo "Erro ao cadastrar o usuário: " . $e->getMessage();
            }
        }
        };

        // Resetar os valores do formulário
        $nome = $cpf = $data_nascimento = $email = $login = $senha = null;
        }
}else{
    
    if (isset($_GET['submit'])) {
        $nome  = $_GET['nome'];
        $cpf = $_GET['CPF'];
        $data_nascimento = $_GET['data'];
        $email = $_GET['email'];
        $login = $_GET['login'];
        $senha = $_GET['senha'];
    
        // Certifique-se de que todos os campos foram preenchidos
        if ($nome && $cpf && $data_nascimento && $email && $login && $senha) {
            // Verificar se o login já existe
            $result = $conexao->prepare("SELECT log_in, CPF FROM usuarios WHERE log_in = ? AND CPF = ? ");
            $result->execute([$login, $cpf]);
            $data = $result->fetchAll();
    
            if (count($data) > 0) {
                // echo "Já existe um usuário com esse login.";
            } else {
                // Hash da senha para armazenamento seguro
                $senha_hashed = password_hash($senha, PASSWORD_DEFAULT);
    
                // Inserir novo usuário no banco de dados
                try {
                    $result = $conexao->prepare("INSERT INTO usuarios (name_user, cpf, data_nascimento, email, log_in, senha) VALUES (?, ?, ?, ?, ?, ?)");
                    $result->execute([$nome, $cpf, $data_nascimento, $email, $login, $senha_hashed]);
                    // echo "Usuário cadastrado com sucesso!";
                } catch (PDOException $e) {
                    echo "Erro ao cadastrar o usuário: " . $e->getMessage();
                }
            }
            };   
    
            // Resetar os valores do formulário
            $nome = $cpf = $data_nascimento = $email = $login = $senha = null;
            }
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
                <input class="cadastro areaIdent" type="text" placeholder="Nome completo" name="nome"required>
                <input class="cadastro areaIdent" maxlength="14" type="text" placeholder="CPF" name="CPF"  required> 
                <input class="cadastro areaIdent" type="date" placeholder="Data de nascimento" name="data" required>
                <input class="cadastro areaIdent" type="email" placeholder="email" name="email"  required>  
                <div class="sameArea"> 
                    <input class="areaIdent" class="loginArea" type="text" placeholder="Login" name="login" required>  
                    <input class="loginArea" type="password" placeholder="Senha" name="senha" required>
                </div>

            </div>
            <section>
                <button type="submit" name="submit" class="cad">Cadastrar</button>
                <button name="login" class="login">Já possui uma conta?</button>
            </section>
        </form>
    </div>
</div>
    
</body>
</html>