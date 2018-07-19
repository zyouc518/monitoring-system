<?php
$car_name[0]=$_POST["mass"];
$car_name[1]=$_POST["water"];

?>

<script type="text/javascript">
var aaa = <?php echo json_encode($car_name) ?>;
</script>