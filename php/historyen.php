<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/jquery.js"></script>
</head>
<body>
<table class="table">
<?php
$link = mysqli_connect('localhost', 'root', '123456', 'alarms');
echo "<thead>";
echo "<tr>";
echo "<th scope='col'>#</th>";
echo "<th scope='col'>Time</th>";
echo "<th scope='col'>Type</th>";
echo "<th scope='col'>Sensor Name</th>";
echo "<th scope='col'>Position</th>";
echo "<th scope='col'>Value</th>";
echo "<th scope='col'>Alarm Level</th>";
echo "</tr>";
echo "</thead>";
echo "<tbody>";
$query = "SELECT * FROM `alarm` ORDER BY id DESC LIMIT 100";

$result = $link->query($query);
$i = 1;
while ($car = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<th scope='row'>$i</th>";
    echo "<td>".$car['time']."</td>";
    echo "<td>".$car['type']."</td>";
    echo "<td>".$car['name']."</td>";
    echo "<td>".$car['position']."</td>";
    echo "<td>".$car['value']."</td>";
    echo "<td>".$car['level']."</td>";
    echo "</tr>";
    $i++;
}
echo "</tbody>";
?>
</table>
<script src="/js/popper.min.js"></script>
<script src="/js/bootstrap.min.js"></script>
</body>

</html>