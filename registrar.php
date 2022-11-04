<?php

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$contraseña = isset($_POST['contraseña']) ? $_POST['contraseña'] : '';
$estatus = 'U';


$host="localhost";
$port=3306;
$socket="";
$user="root";
$dbname="backs&a";

try {
    $conexion = new PDO("mysql:host={$host};port={$port};dbname={$dbname}", $user, 'password');
    $con = $conexion->prepare('INSERT INTO usuarios(usuario,contraseña,estatus) VALUES(?, ?,?)');
    $con->bindParam(1, $usuario);
    $con->bindParam(2, $contraseña);
    $con->bindParam(3, $estatus);
    $con->execute() or die(print($pdo->errorInfo()));

    echo json_encode('true');} 

    catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
    