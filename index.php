<?php

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';


$host="localhost";
$port=3306;
$socket="";
$user="root";
$dbname="backs&a";

try {
    $conexion = new PDO("mysql:host={$host};port={$port};dbname={$dbname}", $user, 'password');
    $con = $conexion->prepare('SELECT * FROM usuarios WHERE contraseña=".$password." AND usuario=".$usuario.";');
    $con->execute() or die(print($pdo->errorInfo()));
    // Verificando si el usuario existe en la base de datos.
  if($con){
    // Guardo en la sesión el email del usuario.
    $_SESSION['usuario'] = $usuario;
    echo json_encode('true');

  }
    
    } 
    
    catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
    