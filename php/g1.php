<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "zcq20181123sssri", "mineral liquefying");//改成对应的服务器地址、用户名、密码、数据库名称

$query = "SELECT * FROM `sensor1` ORDER BY Time_1 DESC LIMIT 1200";//改成对应的数据表名称、列名称
//SELECT * FROM `sensor1` ORDER BY id DESC LIMIT 10; 搜索最后10个

$result = $link->query($query);

while ($car = mysqli_fetch_assoc($result)) {
    $data[] = $car;
}

echo json_encode($data);
?>
