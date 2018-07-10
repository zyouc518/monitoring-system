<html>
<body>

<?php
$name = $_POST["name"];
$password = $_POST["password"];
$dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
					if (!$conn) {
					    die('Could not connect: ' . mysqli_error($conn));
					}
					// $title=$_POST['username'];
					// $pswd=$_POST['password'];
					$passwordenen = hash('sha256', $_POST['password']); 

// echo $name;
// echo $password;
$sql="SELECT * FROM `zyj`";
$result = mysqli_query($conn,$sql);
echo $passwordenen;

while ($car = $result->fetch_assoc())
{
	if ($car[zyj_username] == $name && $car[zyj_password] == $passwordenen) {
    $link = 'submitform.php';
    header("Location: $link");
	}
	else
	{
	    echo "<script>alert('Wrong username or password!');parent.location.href='password.html'; </script>";
    // $link = 'password.html';
    // header("Location: $link");
	}
}
?>


Welcome 
<?php
					$dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
					if (!$conn) {
					    die('Could not connect: ' . mysqli_error($conn));
					}
					$title=$_POST['username'];
					$pswd=$_POST['password'];
					$passwordenen = hash('sha256', $_POST['password']); 

					$q = intval($_GET['q']);



// mysqli_select_db($conn,"ajax_demo");
$sql="SELECT * FROM `table5` WHERE id >= 2000";
$result = mysqli_query($conn,$sql);

echo "<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
<th>Job</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['COL1'] . "</td>";
    echo "<td>" . $row['COL3'] . "</td>";
    echo "</tr>";
}
echo "</table>";
mysqli_close($con);

                    // $sqlsearch = "SELECT * FROM `table 5` WHERE `id` >= 2000";
                    // $result = $conn->query($sqlsearch) or die($conn->error);
                 
     //                while( $row = $result->fetch_assoc() )
					// {
    	// 				$row = mysqli_fetch_all($result,MYSQLI_ASSOC);
					// 	if ($row['zyj_username']==$_POST['username']) 
					// 	{
 				// 			if ($passwordenen==$row['zyj_password'])
 				// 			{
     // 							echo 'Password is valid!';
     // 							header("location:dashboard.html");
 				// 			} 
 				// 			else 
					// 		{
     // 							echo 'Invalid password.';
     // 						}
     // 					}
     // 				}
?>
Your email address is: <?php echo $_POST["password"]; ?>

</body>
</html>