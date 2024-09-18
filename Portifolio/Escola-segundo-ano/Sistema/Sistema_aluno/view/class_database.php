<?php

class Database{
  private $driver;
  private $host;
  private $bdname;
  private $username;

  private $con;

  function __construct(){
    $this->driver = "mysql";
    $this->host = "localhost";
    $this->bdname = "expo_Data_Base";
    $this->username = "root";
  }
  // a função construct é usada sembre que é recebido algum dos dados

  function connect(){
    try {
      $this->con = new PDO(
        // pdo é a conexão com o banco de dados sendo acionada 
          "$this->driver:host=$this->host; dbname=$this->bdname",
          $this->username,
      );

      $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
      // lança o código de erro

      return $this->con;

    } catch (Exception $e) {
      $this->con = null;
    }
  }
  
}