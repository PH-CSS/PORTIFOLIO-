<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>home</title>
    <link rel="stylesheet" href="../ultil/home.css">
    <script src="../ultil/javascript/home/JQuery/jquery-3.7.1.min.js"></script>
    <script src="../ultil/javascript/home/home.js" defer ></script>
</head>
<body>

<?php
include_once('dbase.php');

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

    <div class="alert">
        <h2>Login realizado com sucesso</h2>
    </div>
    <div class="sideMenu">
        <div class="sidepop Home"           >           <img src="..\ultil\img/home-4-svgrepo-com.png" alt=""></div>
        <div class="sidepop Dados-Pessoais" >   <img src="..\ultil\img/person-circle-svgrepo-com.png" alt=""></div>
        <div class="sidepop Escolaridade"   >          <img src="..\ultil\img\hat-svgrepo-com.png" alt=""></div>
        <button class="sidepop Sair"        >          <img src="..\ultil\img/poweroff-svgrepo-com.png" alt=""></button>
    </div>
    <div class="areaPopup">
        <div class="seta"></div>
        <div class="popSecao"></div>
    </div>

    <div class="home Display " id="Home">
        <h1>LogIn efetuado!</h1>
        <h2>Bem vindo ao Sistema.</h2>
    </div>

    <div class="dados Display "  id="Dados-Pessoais">
        <form action="" method="post">
            <h1>Alterção de dados pessoais</h1>
            <input class="email" name="email" placeholder="email" required>
            <input class="login" name="login" placeholder="login" required>
            <input class="senha" name="senha" placeholder="senha" required> 
            <button type="submit">Alterar</button>   
        </form>
    </div>

    <div class="formacao Display " id="Escolaridade">

    </div>


    
    
</body>
</html>