<?php
$link = mysqli_connect("localhost", "root", "123456", "mineral liquefying");

if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

echo "Connect Successfully. Host Info: " . mysqli_get_host_info($link);

$query = "SELECT * FROM `sensor15` ORDER BY Time_1 DESC LIMIT 60";

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

<script>
    var aaar = <?php echo json_encode($car_name1)?>;
    var aaar2 = <?php echo json_encode($car_name2)?>;
    var aaar3 = <?php echo json_encode($car_name3)?>;
    var aaar4 = <?php echo json_encode($car_name4)?>;
    var aaar5 = <?php echo json_encode($car_name5)?>;
    var aaar6 = <?php echo json_encode($car_name6)?>;
</script>