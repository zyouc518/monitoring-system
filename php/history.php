<?php
$link = mysqli_connect('localhost', 'root', '', 'alarms');

$query = "SELECT * FROM `alarm` ORDER BY id DESC LIMIT 100";

$result = $link->query($query);

while ($car = mysqli_fetch_assoc($result)) {
    echo $car['time'] . "<br>";
    echo $car['type'] . "<br>";
}
