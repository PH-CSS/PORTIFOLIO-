<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="./util/src/style.css">

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script type="text/JavaScript" src="./util/script.js" defer></script>
</head>

<body>


<?php
// Inclua a classe Database
include_once '../mode/alunoModel.php';

// Crie uma instância da classe
$db = new Database();

// Obtenha a conexão
$conexao = $db->getConexao();
$mensagemErro  = "OLÁ USUÁRIO";


if (isset($_POST['login'])) {
    if (isset($_POST['submit'])) {
        $login = $_POST['login'];
        $senha = $_POST['senha'];
    
        // Certifique-se de que todos os campos foram preenchidos
        session_start();
        if ($login && $senha) {

            $result = $conexao->prepare("SELECT log_in FROM usuarios WHERE log_in = ? ");
            $result->execute([$login]);
            $data = $result->fetchAll();
            if (count($data) <= 0) {
                $mensagemErro = "Usuario não existente ";
            }else{
            $result = $conexao->prepare("SELECT senha FROM usuarios WHERE log_in = ? ");
            $result->execute([$login]);
            $data = $result->fetch(mode: PDO::FETCH_ASSOC);

            if ($senha == $data['senha']) {
                header('Location: ./view/home.php');  
                exit();
            }else{
                $mensagemErro = "wrong password ";
            };
        }

        };

        };
    };
 
    if(isset($_POST['cadastro'])){

    $nome  = $_POST['nome'];
    $cpf = $_POST['CPF'];
    $data_nascimento = $_POST['data'];
    $email = $_POST['email'];
    $login = $_POST['login'];
    $senha = $_POST['senha'];

    $_SESSION["usuario"] = $nome;
    // Certifique-se de que todos os campos foram preenchidos
    if ($nome && $cpf && $data_nascimento && $email && $login && $senha) {
        // Verificar se o login já existe
        $result = $conexao->prepare("SELECT log_in FROM usuarios WHERE log_in = ?");
        $result->execute([$login]);
        $data = $result->fetchAll();

        // A consulta SELECT log_in FROM usuarios WHERE log_in = ? 
        // busca o valor de log_in na tabela usuarios 
        // onde o valor de log_in for igual ao parâmetro substituído pelo ?.
        // "$result->execute([$login])";
        // O uso do ? como placeholder é parte de uma estratégia para 
        // proteger o sistema contra ataques de SQL Injection e também para 
        // facilitar a reutilização de consultas.

        if (count($data) > 0) {
            $mensagemErro = "Já existe um usuário com esse login. ";
        } else {
            // Hash da senha para armazenamento seguro
            // $senha = password_hash($senha, PASSWORD_DEFAULT);

            // Inserir novo usuário no banco de dados
            try {
                $result = $conexao->prepare("INSERT INTO usuarios (name_user, cpf, data_nascimento, email, log_in, senha) VALUES (?, ?, ?, ?, ?, ?)");
                $result->execute([$nome, $cpf, $data_nascimento, $email, $login, $senha]);
                $mensagemErro = "Usuário cadastrado com sucesso! ";
                header('Location: ./view/home.php');  
                exit();
            } catch (PDOException $e) {
                $mensagemErro = "Erro ao cadastrar o usuário: " . $e->getMessage();
            }
        }
        };

        // Resetar os valores do formulário
        $nome = $cpf = $data_nascimento = $email = $login = $senha = null;
}else{
    
    if (isset($_POST['submit'])) {
        $nome  = $_POST['nome'];
        $cpf = $_POST['CPF'];
        $data_nascimento = $_POST['data'];
        $email = $_POST['email'];
        $login = $_POST['login'];
        $senha = $_POST['senha'];
    
        // Certifique-se de que todos os campos foram preenchidos
        if ($nome && $cpf && $data_nascimento && $email && $login && $senha) {
            // Verificar se o login já existe
            $result = $conexao->prepare("SELECT log_in FROM usuarios WHERE log_in = ?");
            $result->execute([$login]);
            $data = $result->fetchAll();
    
            if (count($data) > 0) {
                $mensagemErro = "Já existe um usuário com esse login. ";
            } else {
                // Hash da senha para armazenamento seguro
                // $senha = password_hash($senha, PASSWORD_DEFAULT);
    
                // Inserir novo usuário no banco de dados
                try {
                    $result = $conexao->prepare("INSERT INTO usuarios (name_user, cpf, data_nascimento, email, log_in, senha) VALUES (?, ?, ?, ?, ?, ?)");
                    $result->execute([$nome, $cpf, $data_nascimento, $email, $login, $senha]);
                    // $mensagemErro = "Usuário cadastrado com sucesso!";
                } catch (PDOException $e) {
                    $mensagemErro = "Erro ao cadastrar o usuário: " . $e->getMessage();
                }
            }
            };   
    
            // Resetar os valores do formulário
            $nome = $cpf = $data_nascimento = $email = $login = $senha = null;
            }
}

?>
