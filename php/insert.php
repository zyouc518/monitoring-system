<?php
$connection = mysqli_connect('localhost', 'root', '', 'alarms');

$time = $_POST['time'];
$type = $_POST['type'];

$q = "INSERT INTO alarm (type) VALUES ('$type')";

$query = mysqli_query($connection, $q);

if ($query) {
    echo json_encode("Data inserted successfully!");
} else {
    echo json_encode("Fail to insert data!");
}
