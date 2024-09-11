<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php 
    $a=0;
    while ($a < 500) {
    $a++;
    if ($a % 5 == 0) {
       echo "$a";
       echo"<br>";
    }
    }

?>
    
</body>
</html>