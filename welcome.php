<html>
<body>

<?php
$name = $_POST["name"];
$password = $_POST["password"];
echo $name;
echo $password;
if ($name == "harrywsh" && $password == "88cft66634") {
    $link = 'dashboard1.html';
    header("Location: $link");
} else {
    echo "<script>alert('Wrong username or password!');parent.location.href='password.html'; </script>";
    // $link = 'password.html';
    // header("Location: $link");
}
?>
</body>
</html>