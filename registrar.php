<?php

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';


$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="sakila";

try {
    $dbh = new PDO("mysql:host={$host};port={$port};dbname={$dbname}", $user, $password));
    $con = $conexion->prepare('INSERT INTO usuarios(usuario,password) VALUES(?, ?, ?)');
    $con->bindParam(1, $usuario);
    $con->bindParam(2, $password);
    $con->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');

} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
    


  

?>