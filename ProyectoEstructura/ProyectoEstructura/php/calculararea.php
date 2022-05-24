<?php //Abrir php
$Base= $_GET [ "base" ]; //Definir variable, conectar id 
$Altura= $_GET [ "altura" ]; //Definir variable, conectar id
$Area=$Base*$Altura; //Proceso matematico
print"<p>el area es $Area</p>"; //Mostrar alerta



$servername ="localhost";
$database ="id18814086_registro9";
$username ="id18814086_mateo";
$pasword ="mate4@J>w=jO)D{Msi";

$conn = mysqli_connect($servername, $username, $pasword, $database);

if (!$conn) {
    die("connection failed" . mysqli_connect_error());
}
echo "connected succerssfully";

$sql=("INSERT INTO `area` (`Base`, `Altura`, `Area`) 
VALUES ('$Base', '$Altura', '$Area')");


if (mysqli_query($conn, $sql)) {
echo "Exitos en la insercion";
header("Location: ../index.html", TRUE, 301);
exit();
} else {
   echo"Error:" . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);




?> 