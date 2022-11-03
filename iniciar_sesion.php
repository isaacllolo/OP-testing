<?php

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';
$contraseña = isset($_POST['contraseña']) ? $_POST['contraseña'] : '';

$host="localhost";
$port=3306;
$socket="";
$user="root";
$dbname="backs&a";


  $conexion= mysqli_connect($host,$user,'password',$dbname);
    if(isset($_POST['usuario']) && !empty($_POST['usuario']) && isset($_POST['contraseña']) && !empty($_POST['contraseña'])){
      $usuario = $_POST['usuario'];
     $contraseña = $_POST['contraseña'];
      $query = "SELECT * FROM usuarios WHERE (usuario ='$usuario' && contraseña = '$contraseña')";
      $result = mysqli_query($conexion,$query) or die("Problemas al insertar".mysqli_error($conexion));

      if(mysqli_num_rows($result)>0){
          echo json_encode(array('success'=> 1));
          session_start();
          $_SESSION['usuario'] = $usuario;
      
      }else{
        echo json_encode(array('success'=> 0));
      }
  }

  

    

    