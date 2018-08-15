<?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "123456", "mineral liquefying");//改成对应的服务器地址、用户名、密码、数据库名称

// Check connection
if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Print host information
echo "Connect Successfully. Host info: " . mysqli_get_host_info($link) . "<br>";
$query = "SELECT * FROM `sensor15` ORDER BY Time_1 DESC LIMIT 300";//改成对应的数据表名称、列名称
//SELECT * FROM `sensor1` ORDER BY `id` DESC LIMIT 10; 搜索最后10个

$result = $link->query($query) or die($link->error);
$i = 0;
while ($car = $result->fetch_assoc()) {
    $car_name1[$i] = $car['SAU'];
    $car_name2[$i] = $car['SAM'];
    $car_name3[$i] = $car['SAL'];
    $car_name4[$i] = $car['SFU'];
    $car_name5[$i] = $car['SFM'];
    $car_name6[$i] = $car['SFL'];
    $i++;
}
?>

<script type="text/javascript">
var aaar = <?php echo json_encode($car_name1) ?>;
var aaar2 = <?php echo json_encode($car_name2) ?>;
var aaar3 = <?php echo json_encode($car_name3) ?>;
var aaar4 = <?php echo json_encode($car_name4) ?>;
var aaar5 = <?php echo json_encode($car_name5) ?>;
var aaar6 = <?php echo json_encode($car_name6) ?>;
</script>