<?php
$link = mysqli_connect("localhost", "root", "zcq20181123sssri", "mineral liquefying");

if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

echo "Connect Successfully. Host Info: " . mysqli_get_host_info($link);

$query = "SELECT * FROM `sensor1` ORDER BY Time_1 DESC LIMIT 1200";

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

<script>
    var ar = <?php echo json_encode($car_name1)?>;
    var ar2 = <?php echo json_encode($car_name2)?>;
    var ar3 = <?php echo json_encode($car_name3)?>;
    var ar4 = <?php echo json_encode($car_name4)?>;
    var ar5 = <?php echo json_encode($car_name5)?>;
    var ar6 = <?php echo json_encode($car_name6)?>;
</script>
