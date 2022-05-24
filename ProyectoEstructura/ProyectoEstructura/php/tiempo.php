<?php //Abrir php
$Distancia= $_GET [ "distancia" ]; //Definir variable, conectar id 
$Tiempo= $_GET [ "tiempo" ]; //Definir variable, conectar id
$Velocidad=$Distancia/$Tiempo; //Proceso matematico
print"<p>La velocidad es $Velocidad</p>"; //Mostrar alerta



$servername ="localhost";
$database ="id18814086_registro9";
$username ="id18814086_mateo";
$pasword ="mate4@J>w=jO)D{Msi";

$conn = mysqli_connect($servername, $username, $pasword, $database);

if (!$conn) {
    die("connection failed" . mysqli_connect_error());
}
echo "connected succerssfully";

$sql="INSERT INTO `velocidad` (`Tiempo`, `Distancia`, `Velocidad`) VALUES ('$Tiempo', '$Distancia', '$Velocidad')";


if (mysqli_query($conn, $sql)) {
echo "Exitos en la insercion";
header("Location: ../index.html", TRUE, 301);
exit();
} else {
   echo"Error:" . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);





?> 