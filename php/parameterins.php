<?php
$density = $_GET['density'];
$tml = $_GET['tml'];
$link = mysqli_connect('localhost', 'root', '123456', 'mineral liquefying');
$q = "TRUNCATE parameter";
$query = mysqli_query($link, $q);
$q = "INSERT INTO parameter (density, tml) VALUES ('$density', '$tml')";
$query = mysqli_query($link, $q);
if ($query) {
    echo json_encode("maheng");
} else {
    echo json_encode("Fail to insert data!");
}
?>