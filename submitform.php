
<!-- AddType application/x-httpd-php .htm .html
 -->
<!DOCTYPE html>
<META HTTP-EQUIV="Refresh" CONTENT="5">
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
        #div0 {
            position: absolute;
            left: 2%;
            top: 2%;
            width: 90%;
            height: 40%;
            font-size: 14px;
            color: grey;
        }
        #div1 {
            position: absolute;
            left: 2%;
            top: 20%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }
        #div2 {
            position: absolute;
            left: 49%;
            top: 20%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }
        #div3 {
            position: absolute;
            left: 2%;
            top: 59%;
            width: 45%;
            height: 37%;
            font-size: 14px;
            color: grey;
        }
        #div4 {
            position: absolute;
            left: 49%;
            top: 59%;
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
                <h3>矿物液化
                    <br>智能监控系统</h3>
            </div>
            <br>
            <a href="submitform.php">&emsp;&emsp;中文</a>
            <a href="submitformen.php">&emsp;English</a>
            <ul class="list-unstyled components">
                <li class="active">
                    <a>
                        <i class="fa fa-bullseye"> 监测数据</i>
                    </a>
                    <ul class="list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="dashboard1.html" class="fa fa-dashboard"> 含水率传感器</a>
                        </li>
                        <li>
                            <a href="dashboard2.html" class="fa fa-dashboard"> 压力传感器</a>
                        </li>
                        <li>
                            <a href="dashboard3.html" class="fa fa-dashboard"> 应变传感器</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="line.html" class="fa fa-line-chart"> 稳性计算</a>
                </li>
                <li>
                    <a href="submitform.php" class="fa fa-exclamation-triangle"> 报警系统</a>
                </li>
            </ul>
        </nav>
        <div id="content">
        <div id="div0">
                <div class="card" style="width: 100%;height: 50%;">
<!--                     <div class="card-body">-->
                        <div class="form-inline">
                        <input class="form-control" type="number" placeholder="在此输入矿砂密度" id="rho" style="width:25%"> 吨/m³
                        </div> 
                        <div class="form-inline">
                        <input class="form-control" type="number" placeholder="在此输入质量含水率" id="waterper" style="width:25%"> %
                        </div> 
                        <button type="button" class="btn bt-primary" style="width:10%" onclick="Calc1()">提交</button>
                        
                    </div>
                </div>
            
            <div id="div1">
                <div class="card" style="width: 100%;height: 100%">
                    <div class="card-body">
                        <h3>预警</h3>
<!--                         <div class="form-inline">
                        <input class="form-control" type="number" placeholder="在此输入矿砂密度" id="rho" style="width:40%">
                        <input class="form-control" type="number" placeholder="在此输入质量含水率" id="waterper" style="width:40%">
                        <button type="button" class="btn btn-primary" style="width: 40%" onclick="Calc1()">提交</button> -->
                      <!--   </div> -->
                                               
                        <!-- 一级预警：矿砂局部含水率已大于TML，将会发生液化。 -->
                        <div id="header1" style="width:100%">● 一级预警：矿砂局部含水率已大于TML,将会发生液化。</div>
                        <div id="header2" style="width:100%">● 二级预警：调整航向，减少受风面积，调整航速，减少船舶运动加速度。</div>
                        <div id="header3" style="width:100%">● 三级预警：寻找锚地，就近靠港，停船。</div>
                    </div>
                </div>
            </div>
            <div id="div2">
                <div class="card" style="width: 100%;height: 100%;">
                    <div class="card-body">
                        <h3>结构应力</h3>
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
                        <h3>设备故障</h3>
                        <div id="header1">● 1 含水率传感器</div>
                        <div id="header2">● 2 压力传感器</div>
                        <div id="header3">● 3 应变传感器</div>
                    </div>
                </div>
            </div>
            <div id="div4">
                <div class="card" style="width: 100%;height: 100%;">
                    <div class="card-body">
                        <h3>导出数据</h3>
                        <button type="button" class="btn btn-primary" onclick="alert('没有找到数据!')">导出到csv</button>
                    </div>
                </div>
            </div>

            <!-- <p id="pText">123</p>
            <button type="button" onclick="changetext()">计算</button> -->

        </div>

        <script type="text/javascript">
            
            // var array2 = array;
            // var j = 20;
            // for (var i = 0; i < array2.length; i++) {
            //     if (array2[i] > 75) {
            //         j = j + 1;
            //     }
            // }
            function changetext() {
                // document.getElementById('pText').innerHTML = "";
                // for (var i = 0; i < 114; i++) {
                //     document.getElementById('pText').innerHTML = document.getElementById('pText').innerHTML + "<br>" +
                //         array[i];
                // }
                var array1 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 1` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array2 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 2` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array3 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 3` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array4 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 4` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array5 = [
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
            var array6 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 6` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array7 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 7` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array8 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 8` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array9 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 9` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array10= [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 10` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
            var array11 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 11` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];var array12 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 12` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];




            var array13 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 13` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];var array14 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 14` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];var array15 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 15` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];var array16 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 16` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];var array17 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 17` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];var array18 = [
                <?php
                    $dbhost = 'localhost'; // mysql服务器主机地址
                    $dbuser = 'root'; // mysql用户名
                    $dbpass = ''; // mysql用户名密码
                    $dbname = "maheng";
                    $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
                    $sqlsearch = "SELECT * FROM `table 18` WHERE `id` >= 2000";
                    $result = $conn->query($sqlsearch) or die($conn->error);
                    while ($car = $result->fetch_assoc()) {
                        $car_name = $car['COL 3'];
                        echo "'$car_name',";
                    }
                ?>
            ];
                // if (array1[0] > 76.4) {
                //     document.getElementById('header1').style.color = "red";
                // }
                // else
                // {
                //     document.getElementById('header1').style.color= "green";
                // }

                 var alarm1flag=0;
                 var TML= a*b/(a*b+1-a);
            if (array1[0]>TML) alarm1flag++;
            if (array2[0]>TML) alarm1flag++;
            if (array3[0]>TML) alarm1flag++;
            if (array4[0]>TML) alarm1flag++;
            if (array5[0]>TML) alarm1flag++;
            if (array6[0]>TML) alarm1flag++;

            if (alarm1flag>=4)
            {
                //一级报警操作
                document.getElementById('header1').style.color = "red";
            }

            //二级报警
            var alarm2water=0;
            var alarm2pressure=0;
            var alarm2strain=0;
            var waterflag=0;
            if (array1[0]>20){waterflag++;}
            if (array2[0]>20){waterflag++;}
            if (array3[0]>20){waterflag++;}
            if (array4[0]>20){waterflag++;}
            if (array5[0]>20){waterflag++;}
            if (array6[0]>20){waterflag++;}
            if ((waterflag/6)>0.75)
            {
                alarm2water=1;
            }

            var pressurealarm=0;
            if (((array7[0]-array7[1])/array7[1])>0.25){pressurealarm++;}
            if (((array8[0]-array8[1])/array8[1])>0.25){pressurealarm++;}
            if (((array9[0]-array9[1])/array9[1])>0.25){pressurealarm++;}
            if (((array10[0]-array10[1])/array10[1])>0.25){pressurealarm++;}
            if (((array11[0]-array11[1])/array11[1])>0.25){pressurealarm++;}
            if (((array12[0]-array12[1])/array12[1])>0.25){pressurealarm++;}

            if (pressurealarm>3)
            {
                alarm2pressure=1;
            }
            
            var strainalarm=0;
            if (((array13[0]-array13[1])/array13[1])>0.2){strainalarm++;}
            if (((array14[0]-array14[1])/array14[1])>0.2){strainalarm++;}
            if (((array15[0]-array15[1])/array15[1])>0.2){strainalarm++;}
            if (((array16[0]-array16[1])/array16[1])>0.2){strainalarm++;}
            if (((array17[0]-array17[1])/array17[1])>0.2){strainalarm++;}
            if (((array18[0]-array18[1])/array18[1])>0.2){strainalarm++;}

            if (strainalarm>3)
            {
                alarm2strain=1;
            }

            if (alarm2water && (alarm2pressure|| alarm2strain))
            {
                //二级报警操作
                document.getElementById('header2').style.color = "red";
            }

            //三级报警
            var alarm3=0;
            var alarm3flag=0;
            for (var k=0;k<100;k++)
            {
                if (array1[k]>99)
                {
                    alarm3flag++;
                }
                if (array4[k]>99) //最上层是传感器1和4
                {
                    alarm3flag++;
                }
            }
            if (alarm3flag>100)
            {
                alarm3=1;
            }
            if (alarm3==1)
            {
                //三级报警操作
                document.getElementById('header3').style.color = "red";
            }
            
}
            setInterval(changetext(), 2000);


            //以下为内部逻辑
            //一级报警
            // var alarm1flag=0;
            // if (array1[49]>75) alarm1flag++;
            // if (array2[49]>75) alarm1flag++;
            // if (array3[49]>75) alarm1flag++;
            // if (array4[49]>75) alarm1flag++;
            // if (array5[49]>75) alarm1flag++;
            // if (array6[49]>75) alarm1flag++;

            // if (alarm1flag>=4)
            // {
            //     //一级报警操作
            // }

            // //二级报警
            // var alarm2water=0;
            // var alarm2pressure=0;
            // var alarm2strain=0;
            // var waterflag=0;
            // for (var k=0;k<50;k++)
            // {
            //     if (array1[k]>22){waterflag++;}
            //     if (array2[k]>22){waterflag++;}
            //     if (array3[k]>22){waterflag++;}
            //     if (array4[k]>22){waterflag++;}
            //     if (array5[k]>22){waterflag++;}
            //     if (array6[k]>22){waterflag++;}
            // }
            // if ((waterflag/300)>0.75)
            // {
            //     alarm2water=1;
            // }

            // var pressurealarm=0;
            // if ((array7[49]-array7[48])>100){pressurealarm++;}
            // if ((array8[49]-array8[48])>100){pressurealarm++;}
            // if ((array9[49]-array9[48])>100){pressurealarm++;}
            // if ((array10[49]-array10[48])>100){pressurealarm++;}
            // if ((array11[49]-array11[48])>100){pressurealarm++;}
            // if ((array12[49]-array12[48])>100){pressurealarm++;}
            // if (pressurealarm>3)
            // {
            //     alarm2pressure=1;
            // }
            
            // var strainalarm=0;
            // if ((array13[49]-array13[48])>1000){strainalarm++;}
            // if ((array14[49]-array14[48])>1000){strainalarm++;}
            // if ((array15[49]-array15[48])>1000){strainalarm++;}
            // if ((array16[49]-array16[48])>1000){strainalarm++;}
            // if ((array17[49]-array17[48])>1000){strainalarm++;}
            // if ((array18[49]-array18[48])>1000){strainalarm++;}
            // if (strainalarm>3)
            // {
            //     alarm2strain=1;
            // }

            // if (alarm2water && (alarm2pressure|| alarm2strain))
            // {
            //     //二级报警操作
            // }

            // //三级报警
            // var alarm3=0;
            // var alarm3flag=0;
            // for (var k=0;k<200;k++)
            // {
            //     if (array1[k]>27)
            //     {
            //         alarm3flag++;
            //     }
            //     if (array4[k]>27) //最上层是传感器1和4
            //     {
            //         alarm3flag++;
            //     }
            // }
            // if (alarm3flag>100)
            // {
            //     alarm3=1;
            // }
            // if (alarm3==1)
            // {
            //     //三级报警操作
            // }




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

