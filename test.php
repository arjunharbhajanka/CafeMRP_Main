<?php
    error_reporting(E_ALL);
    $name  = $_POST['name'];
    $qty = $_POST['qty']; // the key we sent was "something"
    $f = fopen('file.txt', 'a');
    fwrite($f, $name);
    fclose($f);
?>