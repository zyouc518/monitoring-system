<?php
$connection = mysqli_connect('localhost', 'root', '123456', 'mineral liquefying');

$type = $_POST['type'];
$name = $_POST['name'];
$position = $_POST['position'];
$value = $_POST['value'];
$level = $_POST['level'];

$g = "SELECT * FROM `parameter` ORDER BY id DESC LIMIT 1";
$getlevel = $connection->query($g);

$car = mysqli_fetch_assoc($getlevel);
echo json_encode($car);
if ($level == '一级') {
    if ($car['level1'] == 0) {
        $q = "INSERT INTO alarm (type,name,position,value,level) VALUES ('$type','$name','$position','$value','$level')";
        $c = "UPDATE parameter SET level1 = 1 WHERE id = 1";
        $setvalue = mysqli_query($connection, $c);
        $query = mysqli_query($connection, $q);
    }
} else if ($level == '二级') {
    if ($car['level2'] == 0) {
        $q = "INSERT INTO alarm (type,name,position,value,level) VALUES ('$type','$name','$position','$value','$level')";
        $c = "UPDATE parameter SET level2 = 1 WHERE id = 1";
        $setvalue = mysqli_query($connection, $c);
        $query = mysqli_query($connection, $q);
    }
} else if ($level == '三级') {
    if ($car['level3'] == 0) {
        $q = "INSERT INTO alarm (type,name,position,value,level) VALUES ('$type','$name','$position','$value','$level')";
        $c = "UPDATE parameter SET level3 = 1 WHERE id = 1";
        $setvalue = mysqli_query($connection, $c);
        $query = mysqli_query($connection, $q);
    }
} else {
    $q = "INSERT INTO alarm (type,name,position,value,level) VALUES ('$type','$name','$position','$value','$level')";
    $query = mysqli_query($connection, $q);
}

// if ($query) {
//     echo json_encode("Data inserted successfully!");
// } else {
//     echo json_encode("Fail to insert data!");
// }
