$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });



    setInterval(function () {

        $('#results').load('php/g1-1.php');
        $('#results').load('php/g1-2.php');
        $('#results').load('php/g1-3.php');
        $('#results').load('php/g1-4.php');
        $('#results').load('php/g1-5.php');
        $('#results').load('php/g1-6.php');
        $('#results').load('php/g2-1.php');
        $('#results').load('php/g2-2.php');
        $('#results').load('php/g2-3.php');
        $('#results').load('php/g2-4.php');
        $('#results').load('php/g2-5.php');
        $('#results').load('php/g2-6.php');
        $('#results').load('php/g3-1.php');
        $('#results').load('php/g3-2.php');
        $('#results').load('php/g3-3.php');
        $('#results').load('php/g3-4.php');
        $('#results').load('php/g3-5.php');
        $('#results').load('php/g3-6.php');

        var alarm1flag = 0;
        var a = document.getElementById('rho').value;
        var b = document.getElementById('waterper').value;
        var TML = a * b / (a * b + 1 - a); //这里需要完善，拿到页面的输入
        if (ar[0] > TML) alarm1flag++;
        if (ar2[0] > TML) alarm1flag++;
        if (ar3[0] > TML) alarm1flag++;
        if (ar4[0] > TML) alarm1flag++;
        if (ar5[0] > TML) alarm1flag++;
        if (ar6[0] > TML) alarm1flag++;

        if (alarm1flag > 0) {
            //一级报警操作
            document.getElementById('header1').className = "main";
        }

        //二级报警
        var alarm2water = 0;
        var alarm2pressure = 0;
        var alarm2strain = 0;
        var waterflag = 0;
        if (aar[0] > 20) {
            waterflag++;
        }
        if (aar2[0] > 20) {
            waterflag++;
        }
        if (aar3[0] > 20) {
            waterflag++;
        }
        if (aar4[0] > 20) {
            waterflag++;
        }
        if (aar5[0] > 20) {
            waterflag++;
        }
        if (aar6[0] > 20) {
            waterflag++;
        }
        if ((waterflag / 6) > 0.75) {
            alarm2water = 1;
        }

        var pressurealarm = 0;
        if (((aar[0] - aar[1]) / aar[1]) > 0.25) {
            pressurealarm++;
        }
        if (((aar2[0] - aar2[1]) / aar2[1]) > 0.25) {
            pressurealarm++;
        }
        if (((aar3[0] - aar3[1]) / aar3[1]) > 0.25) {
            pressurealarm++;
        }
        if (((aar4[0] - aar4[1]) / aar4[1]) > 0.25) {
            pressurealarm++;
        }
        if (((aar5[0] - aar5[1]) / aar5[1]) > 0.25) {
            pressurealarm++;
        }
        if (((aar6[0] - aar6[1]) / aar6[1]) > 0.25) {
            pressurealarm++;
        }

        if (pressurealarm > 3) {
            alarm2pressure = 1;
        }

        var strainalarm = 0;
        if (((aaar[0] - aaar[1]) / aaar[1]) > 0.2) {
            strainalarm++;
        }
        if (((aaar2[0] - aaar2[1]) / aaar2[1]) > 0.2) {
            strainalarm++;
        }
        if (((aaar3[0] - aaar3[1]) / aaar3[1]) > 0.2) {
            strainalarm++;
        }
        if (((aaar4[0] - aaar4[1]) / aaar4[1]) > 0.2) {
            strainalarm++;
        }
        if (((aaar5[0] - aaar5[1]) / aaar5[1]) > 0.2) {
            strainalarm++;
        }
        if (((aaar6[0] - aaar6[1]) / aaar6[1]) > 0.2) {
            strainalarm++;
        }

        if (strainalarm > 3) {
            alarm2strain = 1;
        }

        if (alarm2water && (alarm2pressure || alarm2strain)) {
            //二级报警操作
            document.getElementById('header2').className = "main";
        }

        //三级报警
        var alarm3 = 0;
        var alarm3flag = 0;
        for (var k = 0; k < 100; k++) {
            if (ar[k] > 99) {
                alarm3flag++;
            }
            if (ar4[k] > 99) //最上层是传感器1和4
            {
                alarm3flag++;
            }
        }
        if (alarm3flag > 100) {
            alarm3 = 1;
        }
        if (alarm3 == 1) {
            //三级报警操作
            document.getElementById('header3').className = "main";
        }



        // var ctx1 = document.getElementById("myChart1").getContext('2d');
        // window.myLine1 = new Chart(ctx1, config1);
        // var ctx2 = document.getElementById("myChart2").getContext('2d');
        // window.myLine2 = new Chart(ctx2, config2);
        // var ctx3 = document.getElementById("myChart3").getContext('2d');
        // window.myLine3 = new Chart(ctx3, config3);
        // var ctx4 = document.getElementById("myChart4").getContext('2d');
        // window.myLine4 = new Chart(ctx4, config4);
        // var ctx5 = document.getElementById("myChart5").getContext('2d');
        // window.myLine5 = new Chart(ctx5, config5);
        // var ctx6 = document.getElementById("myChart6").getContext('2d');
        // window.myLine6 = new Chart(ctx6, config6);
    }, 1000);
});