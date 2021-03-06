<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> -->

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
    <link rel="stylesheet" href="css/style.css">
	<style>
#box_relative {
  position: absolute;
  left: 20px;
  top: 55px;
}
</style>
    <!-- JavaScript -->
    <script type="text/javascript" src="js/Chart.js"></script>
    <script src="js/jquery.js"></script>
    <script type="text/javascript" src="js/defaultlineen.js"></script>
    <title>OLMS</title>
    <script>
		if (screen.width <= 1024 || screen.height <= 768) {
			$('head').append('<link rel="stylesheet" type="text/css" href="css/zoom.css">');
		}
	</script>
</head>

<body>
    <div class="wrapper">
        <!-- Sidebar -->
        <nav id="sidebar">
            <div class="sidebar-header">
            <h3 style="color: yellow">OLMS</h3>
            </div>
            <br>
            <a href="line.php">&emsp;&emsp;中文</a>
            <a href="lineen.php">&emsp;English</a>
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
                    <a href="lineen.php" class="fa fa-line-chart">Stability Calculation</a>
                </li>
                <li>
                    <a href="submitformen.html" class="fa fa-exclamation-triangle"> Alarm System</a>
                </li>
                <li>
                <a href="historyen.html" class="fa fa-list-alt"> History</a>
                </li>
            </ul>
        </nav>
        <div id="content">
            <h2>Stability Calculation</h2>
            <div class="form-inline">
                <div class="card" style="width: 45%;">
                    <div class="card-body">
                        No. 2 cargo hold load：
                        <input class="form-control" type="number" placeholder="Input load here" id="mass" style="width:50%"> t
                        <div id="box_relative">Choose fuel type：</div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="HFO" checked>
                            <label class="form-check-label" for="inlineRadio2">HFO&emsp;&emsp;&emsp;</label>
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="LNG">
                            <label class="form-check-label" for="inlineRadio1">LNG</label>

                        </div>
                        <!-- <select class="form-control" id="condition">
                            <option value="LNG">Use LNG</option>
                            <option value="WLNG">Without LNG</option>
                        </select> -->
                        <!-- <br> 请输入含水率：
                <input type="text" id="rat">
                <br> 请输入横倾角：
                <input type="text" id="degree"> -->
                        <button type="button" class="btn btn-primary" onclick="Calc1()">Calculate</button>
                        <?php
/* Attempt MySQL server connection. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
$link = mysqli_connect("localhost", "root", "123456", "mineral liquefying"); //改成对应的服务器地址、用户名、密码、数据库名称

// Check connection
if ($link === false) {
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

// Print host information
$query = "SELECT * FROM `shipdraft` ORDER BY Time_1 DESC LIMIT 10"; //改成对应的数据表名称、列名称
//SELECT * FROM `sensor1` ORDER BY id DESC LIMIT 10; 搜索最后10个
;

$result = $link->query($query) or die($link->error);
$i = 0;
while ($car = $result->fetch_assoc()) {
    $car_name[$i] = $car['Heel'];
    $i++;
}
?>


<script>
function Calc1() {
    var heel = <?php echo json_encode($car_name) ?>;
    var M = document.getElementById("mass").value;
    //var rat = document.getElementById("rat").value;
    var rat = 0.1;
    // var degree = document.getElementById("degree").value;
    var rho = 2.38,
        L = 36,
        DWT = 400000,
        pi = 3.1415926;
        var degree = Math.abs(heel[0]*180/pi);
    var condition;
    var condition_obj = document.getElementsByName('inlineRadioOptions');
    for (let i = 0; i < condition_obj.length; i++) {
        if (condition_obj[i].checked) {
            condition = condition_obj[i].value;
            break;
        }
    }
    switch (condition) {
        case "LNG":
            if (M <= 50000) {
                var gz0 = new Array(-0.007, 1.066, 2.159, 3.297, 4.395, 5.177, 5.692, 5.984, 6.058, 5.936, 5.652,
                    5.237,
                    4.721);
                var s0 = new Array(0.00, 4.62e-2, 0.187, 4.25e-1, 7.61e-1, 1.18, 1.65, 2.16, 2.69, 3.210751,
                    3.716373,
                    4.191495, 4.625995);
                break;
            } else {
                var gz0 = new Array(-0.008, 0.919, 1.866, 2.809, 3.420, 3.770, 3.939, 3.997, 3.972, 3.829, 3.563,
                    3.197, 2.755);
                var s0 = new Array(0, 3.97e-2, 0.161268, 0.365254, 0.637045, 0.950768, 1.287137, 1.63341, 1.981123,
                    2.321506, 2.644043, 2.939003, 3.198709);
                break;
            }
        case "HFO":
            if (M <= 50000) {
                var gz0 = new Array(-0.044, 1.031, 2.127, 3.268, 4.375, 5.172, 5.699, 5.999, 6.077, 5.956, 5.671,
                    5.257, 4.742);
                var s0 = new Array(0, 4.31e-2, 0.18086, 0.416261, 0.74975, 1.166316, 1.640653, 2.151075, 2.677989,
                    3.203028, 3.710352, 4.187176, 4.623465);
                break;
            } else {
                var gz0 = new Array(-0.048, 0.882, 1.833, 2.781, 3.401, 3.759, 3.934, 3.997, 3.977, 3.837, 3.576,
                    3.213, 2.775);
                var s0 = new Array(0, 3.64e-2, 0.154854, 0.356178, 0.625919, 0.938333, 1.274003, 1.620058, 1.66799,
                    2.30894, 2.632393, 2.928619, 3.189895);
                break;
            }
        default:
            break;
    }
    var gz1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var b = (45.165 + Math.sqrt(45.165 * 45.165 + 4 * 1.833 * M / (rho * L))) / (2 * 1.833);
    var h = 1.833 * b - 45.165;
    var dh = 0.2 * h;
    var h2 = h - dh;
    var b2 = (h2 + 45.165) / 1.833;
    var dm = (b + b2) * dh * L * rho / 2;
    var dGM = dm * dh * 7 / DWT;
    var thea = 0,
        thearad = 0;
    for (let i = 0; i < gz1.length; i++) {
        thea = i * 5;
        thearad = thea * pi / 180;
        gz1[i] = gz0[i] - dGM * Math.cos(thearad);
    }
    for (let i = 1; i < 13; i++) {
        thea = i * 5;
        s1[i] = s1[i - 1] + pi * (gz1[i - 1] + gz1[i]) / 72;
    }
    var ldegree = 5 * parseInt(degree / 5);
    var hdegree = ldegree + 5;
    var fitdegree = (gz1[hdegree / 5] - gz1[ldegree / 5]) / 5 * (degree - ldegree) + gz1[ldegree / 5];
    var stddegree = (gz0[hdegree / 5] - gz0[ldegree / 5]) / 5 * (degree - ldegree) + gz0[ldegree / 5];
    var sdegree = (s1[hdegree / 5] - s1[ldegree / 5]) / 5 * (degree - ldegree) + s1[ldegree / 5];
    var stds = (s0[hdegree / 5] - s0[ldegree / 5]) / 5 * (degree - ldegree) + s0[ldegree / 5];
    //document.getElementById("chartdiv2").innerHTML = "复原力臂：" + fitdegree.toFixed(6) +
    //    "<br>静稳性曲线围成面积：" + sdegree.toFixed(6) + "<br>是否达到稳性要求：";

    //"复原力臂：<br>静稳性曲线围城面积：<br>是否达到稳性要求："
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
            datasets: [
                /*{
                                    label: 'GZ',
                                    data: gz0,
                                    borderColor: "#ff6384",
                                    fill: false
                                },
                                {
                                    label: 'AREA',
                                    fill: false,
                                    borderColor: "#3e95cd",
                                    data: s0
                                }, */
                {
                    label: 'GZC1',
                    fill: false,
                    borderColor: "#ff6384",
                    data: gz1
                }, {
                    label: 'AREAC1',
                    fill: false,
                    borderColor: "#3e95cd",
                    data: s1
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Calculation Result'
            },
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Heeling Angle (degree)'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    });
    // var palette = document.getElementById("palette");
    // var rows = palette.getElementsByClassName("divTableRow");
    // var counter_row = 0,
    //     counter_col = 0;
    // for (var row of rows) {
    //     counter_col = 0;
    //     var cells = row.getElementsByClassName("divTableCell");
    //     for (var cell of cells) {
    //         if (counter_row == 1 && counter_col == 1) {
    //             cell.innerText = fitdegree.toFixed(6);
    //         } else if (counter_row == 2 && counter_col == 1) {
    //             cell.innerText = sdegree.toFixed(6);
    //         } else if (counter_row == 3 && counter_col == 1) {
    //             cell.innerText = s1[6].toFixed(6);
    //         } else if (counter_row == 4 && counter_col == 1) {
    //             cell.innerText = s1[8].toFixed(6);
    //         } else if (counter_row == 5 && counter_col == 1) {
    //             cell.innerText = (s1[8] - s1[6]).toFixed(6);
    //         } else if (counter_col == 3 && counter_row != 0) {
    //             cell.innerText = "OK";
    //         }
    //         counter_col++;
    //     }
    //     counter_row++;
    // }
    var myTable = document.getElementById("datatable");
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == 1 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = fitdegree.toFixed(6);
            } else if (i == 2 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = sdegree.toFixed(6);
            } else if (i == 3 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = s1[6].toFixed(6);
            } else if (i == 4 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = s1[8].toFixed(6);
            } else if (i == 5 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = (s1[8] - s1[6]).toFixed(6);
            } else if (j == 3 && i != 0) {
                if (fitdegree.toFixed(6) <= 0 || sdegree.toFixed(6) <= 0 || s1[6].toFixed(6) <= 0 || s1[8].toFixed(6) <= 0 || (s1[8] - s1[6]).toFixed(6) <= 0) {
                    myTable.rows[i].cells[j].innerHTML = "<font color='red'>&#x2718;</font>"
                } else {
                    myTable.rows[i].cells[j].innerHTML = "<font color='green'>&#10004;</font>";
                }
            }
        }
    }
}

function Calc2() {
    var heel = <?php echo json_encode($car_name) ?>;
    var M = document.getElementById("mass").value;
    // var rat = document.getElementById("rat").value;
    // var degree = document.getElementById("degree").value;
    var rat = 0.1;
    var rho = 2.38,
        L = 36,
        DWT = 400000,
        pi = 3.1415926;
    var degree = Math.abs(heel[0]*180/pi);
    var condition;
    var condition_obj = document.getElementsByName('inlineRadioOptions');
    for (let i = 0; i < condition_obj.length; i++) {
        if (condition_obj[i].checked) {
            condition = condition_obj[i].value;
            break;
        }
    }
    switch (condition) {
        case "LNG":
            if (M <= 50000) {
                var gz0 = new Array(-0.007, 1.066, 2.159, 3.297, 4.395, 5.177, 5.692, 5.984, 6.058, 5.936, 5.652,
                    5.237,
                    4.721, 4.128, 3.473, 2.772);
                var s0 = new Array(0.00, 4.62e-2, 0.187, 4.25e-1, 7.61e-1, 1.18, 1.65, 2.16, 2.69, 3.210751,
                    3.716373,
                    4.191495, 4.625995, 5.012105, 5.343761, 5.616251);
                break;
            } else {
                var gz0 = new Array(-0.008, 0.919, 1.866, 2.809, 3.420, 3.770, 3.939, 3.997, 3.972, 3.829, 3.563,
                    3.197, 2.755, 2.256, 1.713, 1.139);
                var s0 = new Array(0, 3.97e-2, 0.161268, 0.365254, 0.637045, 0.950768, 1.287137, 1.63341, 1.981123,
                    2.321506, 2.644043, 2.939003, 3.198709, 3.417355, 3.590535, 3.714977);
                break;
            }
        case "HFO":
            if (M <= 50000) {
                var gz0 = new Array(-0.044, 1.031, 2.127, 3.268, 4.375, 5.172, 5.699, 5.999, 6.077, 5.956, 5.671,
                    5.257, 4.742, 4.149, 3.494, 2.793);
                var s0 = new Array(0, 4.31e-2, 0.18086, 0.416261, 0.74975, 1.166316, 1.640653, 2.151075, 2.677989,
                    3.203028, 3.710352, 4.187176, 4.623465, 5.011408, 5.344897, 5.619219);
                break;
            } else {
                var gz0 = new Array(-0.048, 0.882, 1.833, 2.781, 3.401, 3.759, 3.934, 3.997, 3.977, 3.837, 3.576,
                    3.213, 2.775, 2.278, 1.738, 1.166);
                var s0 = new Array(0, 3.64e-2, 0.154854, 0.356178, 0.625919, 0.938333, 1.274003, 1.620058, 1.66799,
                    2.30894, 2.632393, 2.928619, 3.189895, 3.410373, 3.585604, 3.712315);
                break;
            }
        default:
            break;
    }
    var gz1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var gz2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var b = (45.165 + Math.sqrt(45.165 * 45.165 + 4 * 1.833 * M / (rho * L))) / (2 * 1.833);
    var h = 1.833 * b - 45.165;
    var dh = 0.2 * h;
    var h2 = h - dh;
    var b2 = (h2 + 45.165) / 1.833;
    var dm = (b + b2) * dh * L * rho / 2;
    var dGM = dm * dh * 7 / DWT;
    var thea = 0,
        thearad = 0;
    for (let i = 0; i < gz1.length; i++) {
        thea = i * 5;
        thearad = thea * pi / 180;
        gz1[i] = gz0[i] - dGM * Math.cos(thearad);
    }
    for (let i = 1; i < 13; i++) {
        thea = i * 5;
        s1[i] = s1[i - 1] + pi * (gz1[i - 1] + gz1[i]) / 72
    }
    var mwater = rat * M;
    var dwater = 0.1 * h;
    for (let i = 1; i < 13; i++) {
        thea = i * 5;
        thearad = thea * pi / 180;
        var tantrad = Math.tan(thearad);
        var costrad = Math.cos(thearad);
        var mom = mwater * (3 * b2 - 3 * dwater * tantrad - 2 * Math.sqrt((2 * b2 * dwater) / tantrad) * (1 -
            tantrad * tantrad)) * costrad / 6;
        var dGZ = mom * Math.sin(thearad) / 400000;
        gz2[i] = gz1[i] - dGZ;
    }
    gz2[0] = gz1[0];
    for (let i = 1; i < 13; i++) {
        thea = i * 5;
        s2[i] = s2[i - 1] + pi * (gz2[i - 1] + gz2[i]) / 72
    }

    var ldegree = 5 * parseInt(degree / 5);
    var hdegree = ldegree + 5;
    var fitdegree = (gz2[hdegree / 5] - gz2[ldegree / 5]) / 5 * (degree - ldegree) + gz2[ldegree / 5];
    var stddegree = (gz0[hdegree / 5] - gz0[ldegree / 5]) / 5 * (degree - ldegree) + gz0[ldegree / 5];
    var sdegree = (s2[hdegree / 5] - s2[ldegree / 5]) / 5 * (degree - ldegree) + s2[ldegree / 5];
    var stds = (s0[hdegree / 5] - s0[ldegree / 5]) / 5 * (degree - ldegree) + s0[ldegree / 5];
    //document.getElementById("chartdiv2").innerHTML = "复原力臂：" + fitdegree.toFixed(6) +
    //    "<br>静稳性曲线围成面积：" + sdegree.toFixed(6) + "<br>是否达到稳性要求：";
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60"],
            datasets: [
                /*{
                                    label: 'GZ',
                                    data: gz0,
                                    borderColor: "#ff6384",
                                    fill: false
                                },
                                {
                                    label: 'AREA',
                                    fill: false,
                                    borderColor: "#3e95cd",
                                    data: s0
                                }, */
                {
                    label: 'GZC2',
                    fill: false,
                    borderColor: "#ff6384",
                    data: gz2
                }, {
                    label: 'AREAC2',
                    fill: false,
                    borderColor: "#3e95cd",
                    data: s2
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Calculation Result'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Heeling Angle (degree)'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    });
    // var palette = document.getElementById("palette");
    // var rows = palette.getElementsByClassName("divTableRow");
    // var counter_row = 0,
    //     counter_col = 0;
    // for (var row of rows) {
    //     counter_col = 0;
    //     var cells = row.getElementsByClassName("divTableCell");
    //     for (var cell of cells) {
    //         if (counter_row == 1 && counter_col == 1) {
    //             cell.innerText = fitdegree.toFixed(6);
    //         } else if (counter_row == 2 && counter_col == 1) {
    //             cell.innerText = sdegree.toFixed(6);
    //         } else if (counter_row == 3 && counter_col == 1) {
    //             cell.innerText = s2[6].toFixed(6);
    //         } else if (counter_row == 4 && counter_col == 1) {
    //             cell.innerText = s2[8].toFixed(6);
    //         } else if (counter_row == 5 && counter_col == 1) {
    //             cell.innerText = (s2[8] - s2[6]).toFixed(6);
    //         } else if (counter_col == 3 & counter_row != 0) {
    //             cell.innerText = "OK";
    //         }
    //         counter_col++;
    //     }
    //     counter_row++;
    // }
    var myTable = document.getElementById("datatable");
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            if (i == 1 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = fitdegree.toFixed(6);
            } else if (i == 2 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = sdegree.toFixed(6);
            } else if (i == 3 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = s2[6].toFixed(6);
            } else if (i == 4 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = s2[8].toFixed(6);
            } else if (i == 5 && j == 1) {
                myTable.rows[i].cells[j].innerHTML = (s2[8] - s2[6]).toFixed(6);
            } else if (j == 3 && i != 0) {
                if (fitdegree.toFixed(6) <= 0 || sdegree.toFixed(6) <= 0 || s1[6].toFixed(6) <= 0 || s1[8].toFixed(6) <= 0 || (s1[8] - s1[6]).toFixed(6) <= 0) {
                    myTable.rows[i].cells[j].innerHTML = "<font color='red'>&#x2718;</font>"
                } else {
                    myTable.rows[i].cells[j].innerHTML = "<font color='green'>&#10004;</font>";
                }
            }
        }
    }
}
</script>

                        <!-- <button type="button" onclick="Calc1()">计算修正一</button> -->
                        <!-- <button type="button" onclick="Calc2()">计算修正二</button> -->
                    </div>
                </div>
            </div>
            <div id="line">
                <canvas id="myChart" width="400" height="450"></canvas>
            </div>
            <!-- <div id="palette" style="border: solid 1px black;">
                <div class="divTableRow">
                    <div class="divTableCell">物理量</div>
                    <div class="divTableCell">计算值</div>
                    <div class="divTableCell">单位</div>
                    <div class="divTableCell">状态</div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">GZ</div>
                    <div class="divTableCell">0</div>
                    <div class="divTableCell">m</div>
                    <div class="divTableCell"></div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">AREA</div>
                    <div class="divTableCell">0</div>
                    <div class="divTableCell">mrad</div>
                    <div class="divTableCell"></div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">V.AREA30</div>
                    <div class="divTableCell">0</div>
                    <div class="divTableCell">mrad</div>
                    <div class="divTableCell"></div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">V.AREA40</div>
                    <div class="divTableCell">0</div>
                    <div class="divTableCell">mrad</div>
                    <div class="divTableCell"></div>
                </div>
                <div class="divTableRow">
                    <div class="divTableCell">V.AREA3040</div>
                    <div class="divTableCell">0</div>
                    <div class="divTableCell">mrad</div>
                    <div class="divTableCell"></div>
                </div>
            </div> -->
            <table id="datatable" class="table" style="width:40%">
                <thead>
                    <tr>
                        <th scope="col">Physical Quantity</th>
                        <th scope="col">Result</th>
                        <th scope="col">Unit</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">GZ</th>
                        <td>0</td>
                        <td>m</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">AREA</th>
                        <td>0</td>
                        <td>mrad</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">V.AREA30</th>
                        <td>0</td>
                        <td>mrad</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">V.AREA40</th>
                        <td>0</td>
                        <td>mrad</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <th scope="row">V.AREA3040</th>
                        <td>0</td>
                        <td>mrad</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</body>

</html>
