<?php
  session_start();
  $_SESSION['usuario'] = array();

  session_destroy();
  header("../index.php");
  
?>