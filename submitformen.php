<!-- AddType application/x-httpd-php .htm .html
 -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="author" content="Wang & Zhao">
    <meta name="description" content="Monitoring System">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>矿物液化监控智能系统</title>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="msapplication-TileColor" content="#000000">
    <!-- <meta http-equiv="refresh" content="2"> -->
    <style>
        #header1 {
            position: absolute;
            left: 5%;
            top: 25%;
            width: 50%;
            height: 155px;
            color: grey;
        }

        #header2 {
            position: absolute;
            left: 5%;
            top: 50%;
            width: 50%;
            height: 155px;
            color: grey;
        }

        #header3 {
            position: absolute;
            left: 5%;
            top: 75%;
            width: 50%;
            height: 155px;
            color: grey;
        }

        #header4 {
            position: absolute;
            left: 50%;
            top: 25%;
            width: 50%;
            height: 155px;
            color: grey;
        }

        #header5 {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 50%;
            height: 155px;
            color: grey;
        }

        #header6 {
            position: absolute;
            left: 50%;
            top: 75%;
            width: 50%;
            height: 155px;
            color: grey;
        }

        #div1 {
            position: absolute;
            left: 2%;
            top: 5%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }

        #div2 {
            position: absolute;
            left: 49%;
            top: 5%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }

        #div3 {
            position: absolute;
            left: 2%;
            top: 49%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }

        #div4 {
            position: absolute;
            left: 49%;
            top: 49%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }
    </style>
</head>

<body>


    <div class="wrapper">
        <!-- Sidebar -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>OLMS</h3>
            </div>
            <br>
            <a href="submitform.php">&emsp;&emsp;中文</a>
            <a href="submitformen.php">&emsp;English</a>
            <ul class="list-unstyled components">
                <li class="active">
                    <a>
                        <i class="fa fa-bullseye"> Sensor Data</i>
                    </a>
                    <ul class="list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="dashboard1en.html" class="fa fa-dashboard"> Moisture Content Sensor</a>
                        </li>
                        <li>
                            <a href="dashboard2en.html" class="fa fa-dashboard"> Pressure Sensor</a>
                        </li>
                        <li>
                            <a href="dashboard3en.html" class="fa fa-dashboard"> Strain Sensor</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="lineen.html" class="fa fa-line-chart">Stability Calculation</a>
                </li>
                <li>
                    <a href="submitformen.php" class="fa fa-exclamation-triangle"> Alarm System</a>
                </li>
            </ul>
        </nav>
        <div id="content">
            <div id="div1">
                <div class="card" style="width: 100%;height: 100%">
                    <div class="card-body">
                        <h3>Alarm</h3>
                        <!-- 一级预警：矿砂局部含水率已大于TML，将会发生液化。 -->
                        <div id="header1" style="width:100%">● 一级预警：矿砂局部含水率已大于TML，将会发生液化。</div>
                        <div id="header2" style="width:100%">● 二级预警：调整航向，减少受风面积，调整航速，减少船舶运动加速度。</div>
                        <div id="header3" style="width:100%">● 三级预警：寻找锚地，就近靠港，停船。</div>
                    </div>
                </div>
            </div>
            <div id="div2">
                <div class="card" style="width: 100%;height: 100%;">
                    <div class="card-body">
                        <h3>Structural stress</h3>
                        <div id="header1">● 1</div>
                        <div id="header2">● 2</div>
                        <div id="header3">● 3</div>
                        <div id="header4">● 4</div>
                        <div id="header5">● 5</div>
                        <div id="header6">● 6</div>
                    </div>
                </div>
            </div>
            <div id="div3">
                <div class="card" style="width: 100%;height: 100%;">
                    <div class="card-body">
                        <h3>Device failure</h3>
                        <div id="header1">● 1</div>
                        <div id="header2">● 2</div>
                        <div id="header3">● 3</div>
                    </div>
                </div>
            </div>
            <div id="div4">
                <div class="card" style="width: 100%;height: 100%;">
                    <div class="card-body">
                        <h3>Export data</h3>
                        <button type="button" class="btn btn-primary" onclick="alert('No data found!')">Export to csv</button>
                        <!-- 一级预警：矿砂局部含水率已大于TML，将会发生液化。 -->
                    </div>
                </div>
            </div>

            <!-- <p id="pText">123</p>
                <button type="button" onclick="changetext()">计算</button> -->

        </div>

        <script type="text/javascript">
            var array = [
                <?php
                        $dbhost = 'localhost'; // mysql服务器主机地址
                        $dbuser = 'root'; // mysql用户名
                        $dbpass = ''; // mysql用户名密码
                        $dbname = "maheng";
                        $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                        $sqlsearch = "SELECT * FROM `table 5` WHERE `id` >= 2000";
                        $result = $conn->query($sqlsearch) or die($conn->error);
                        while ($car = $result->fetch_assoc()) {
                            $car_name = $car['COL 3'];
                            echo "'$car_name',";
                        }
                    ?>
            ];

            var array2 = array;
            var j = 0;
            for (var i = 0; i < array2.length; i++) {
                if (array2[i] > 75) {
                    j = j + 1;
                }
            }

            function changetext() {
                // document.getElementById('pText').innerHTML = "";
                // for (var i = 0; i < 114; i++) {
                //     document.getElementById('pText').innerHTML = document.getElementById('pText').innerHTML + "<br>" +
                //         array[i];
                // }
                if (j > 10) {
                    document.getElementById('alarm2').style.color = "yellow";
                }
            }
        </script>
    </div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>


</body>

</html>