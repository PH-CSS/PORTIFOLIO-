<?php
include_once'../mode/alunoModel.php';

$db = new Database();

$conexao = $db -> getConexao();

    session_start();
    if (isset($_POST["submit"])) {
        $email = $_POST["email"];
        $log_in = $_POST["login"];
        $senha = $_POST["senha"];
        $usuario = $_SESSION['usuario'];

        // :email é como um placeholder para substitui-lo depois
        // é mais seguro para previnir injeções
        $result = $conexao->prepare("UPDATE usuarios set email = :email , log_in = :log_in , senha = :senha WHERE name_user = :user_name ");
        $result->execute();

        // troca ou substitui algum valor desejado no sql 
        $result->bindParam(':email', $email);
        $result->bindParam(':log_in', $log_in);
        $result->bindParam(':senha', $senha);
        $result->bindParam(':user_name', $usuario);


        $result->execute();
    };  
    if (isset($_POST['sair'])) {
        header('Location: ../control/navigation.php');  
        exit();
    }

?>
<h1 class="">Home</h1>