<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "123456", "mineral liquefying");//改成对应的服务器地址、用户名、密码、数据库名称

$query = "SELECT * FROM `parameter` ORDER BY id DESC LIMIT 1";//改成对应的数据表名称、列名称

$result = $link->query($query);

while ($car = mysqli_fetch_assoc($result)) {
    $data = $car;
}

echo json_encode($data);
?>