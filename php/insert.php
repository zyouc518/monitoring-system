<?php
$connection = mysqli_connect('localhost', 'root', '123456', 'mineral liquefying');

$type = $_POST['type'];
$name = $_POST['name'];
$position = $_POST['position'];
$value = $_POST['value'];
$level = $_POST['level'];

$q = "INSERT INTO alarm (type,name,position,value,level) VALUES ('$type','$name','$position','$value','$level')";

$query = mysqli_query($connection, $q);

if ($query) {
    echo json_encode("Data inserted successfully!");
} else {
    echo json_encode("Fail to insert data!");
}
