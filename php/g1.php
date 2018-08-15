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
$query = "SELECT * FROM `sensor1` ORDER BY Time_1 DESC LIMIT 300";//改成对应的数据表名称、列名称
//SELECT * FROM `sensor1` ORDER BY id DESC LIMIT 10; 搜索最后10个
;

$result = $link->query($query) or die($link->error);
$i = 0;
while ($car = $result->fetch_assoc()) {
    $car_name1[$i] = $car['WCAU'];
    $car_name2[$i] = $car['WCAM'];
    $car_name3[$i] = $car['WCAL'];
    $car_name4[$i] = $car['WCFU'];
    $car_name5[$i] = $car['WCFM'];
    $car_name6[$i] = $car['WCFL'];
    $i++;
}
?>

<script type="text/javascript">
var ar = <?php echo json_encode($car_name1) ?>;
var ar2 = <?php echo json_encode($car_name2) ?>;
var ar3 = <?php echo json_encode($car_name3) ?>;
var ar4 = <?php echo json_encode($car_name4) ?>;
var ar5 = <?php echo json_encode($car_name5) ?>;
var ar6 = <?php echo json_encode($car_name6) ?>;
</script>