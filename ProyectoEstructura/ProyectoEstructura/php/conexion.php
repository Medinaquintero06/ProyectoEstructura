<?php
$nombre= $_GET ['boxname'];
$apellido= $_GET ['boxlastname'];
$email=$_GET ['boxemail'];
$celular=$_GET ['boxnumerocel'];
print "<p>el nombre es $nombre</p>\n";
print "<p>el apellido es $apellido</p>\n";
print "<p>el email es $email</p>\n";
print "<p>el celular es $celular</p>\n";


$servername ="localhost";
$database ="id18814086_registro9";
$username ="id18814086_mateo";
$pasword ="mate4@J>w=jO)D{Msi";

$conn = mysqli_connect($servername, $username, $pasword, $database);

if (!$conn) {
    die("connection failed" . mysqli_connect_error());
}
echo "connected succerssfully";
$sql=("INSERT INTO `personas` (`Nombre`, `Apellido`, `Email`, `Celular`) 
VALUES ('$nombre', '$apellido', '$email', '$celular')");


if (mysqli_query($conn, $sql)) {
echo "Exitos en la insercion";
header("Location: ../index.html", TRUE, 301);
exit();
//header("location: ../index.html")
} else {
   echo"Error:" . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);




?>