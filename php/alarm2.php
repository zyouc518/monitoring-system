<?php
$link = mysqli_connect("localhost", "root", "123456", "mineral liquefying");

if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

echo "Connect Successfully. Host Info: " . mysqli_get_host_info($link);

$query = "SELECT * FROM `sensor1` ORDER BY Time_1 DESC LIMIT 60";

$result = $link->query($query) or die($link->error);
$i = 0;
while ($car = $result->fetch_assoc()) {
    $car_name1[$i] = $car['PAU'];
    $car_name2[$i] = $car['PAM'];
    $car_name3[$i] = $car['PAL'];
    $car_name4[$i] = $car['PFU'];
    $car_name5[$i] = $car['PFM'];
    $car_name6[$i] = $car['PFL'];
    $i++;
}
?>

<script>
    var aar = <?php echo json_encode($car_name1)?>;
    var aar2 = <?php echo json_encode($car_name2)?>;
    var aar3 = <?php echo json_encode($car_name3)?>;
    var aar4 = <?php echo json_encode($car_name4)?>;
    var aar5 = <?php echo json_encode($car_name5)?>;
    var aar6 = <?php echo json_encode($car_name6)?>;
</script>