<?php
session_start();
$usuario=$_SESSION['usuario'];

$num1 = isset($_POST['num1']) ? $_POST['num1'] : '';
$num2 = isset($_POST['num2']) ? $_POST['num2'] : '';
$suma=$num1+$num2;
$resta=$num1-$num2;
$multiplicacion=$num1*$num2;
$division=$num1/$num2;


$host="localhost";
$port=3306;
$socket="";
$user="root";
$dbname="backs&a";

try {
    $conexion = new PDO("mysql:host={$host};port={$port};dbname={$dbname}", $user, 'password');
    $con = $conexion->prepare('INSERT INTO operaciones(usuario,num1,num2,suma,resta,multiplicacion,division) VALUES(?,?,?,?,?,?,?)');
    $con->bindParam(1,$usuario);
    $con->bindParam(2,$num1);
    $con->bindParam(3,$num2);
    $con->bindParam(4,$suma);
    $con->bindParam(5,$resta);
    $con->bindParam(6,$multiplicacion);
    $con->bindParam(7,$division);
   
    $con->execute() or die(print($pdo->errorInfo()));
   // Verificando si el usuario existe en la base de datos.
  
    echo json_encode('true');
    
    } 
    
    catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}
?>
