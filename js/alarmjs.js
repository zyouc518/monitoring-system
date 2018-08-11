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
        if (alarm1flag >= 4) {
            //一级报警操作
            document.getElementById('header1').className = "main";
        }

        //二级报警
        var alarm2water = 0;
        var alarm2waterure = 0;
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

        var waterurealarm = 0;
        if (((aar[0] - aar[1]) / aar[1]) > 0.25) {
            waterurealarm++;
        }
        if (((aar2[0] - aar2[1]) / aar2[1]) > 0.25) {
            waterurealarm++;
        }
        if (((aar3[0] - aar3[1]) / aar3[1]) > 0.25) {
            waterurealarm++;
        }
        if (((aar4[0] - aar4[1]) / aar4[1]) > 0.25) {
            waterurealarm++;
        }
        if (((aar5[0] - aar5[1]) / aar5[1]) > 0.25) {
            waterurealarm++;
        }
        if (((aar6[0] - aar6[1]) / aar6[1]) > 0.25) {
            waterurealarm++;
        }

        if (waterurealarm > 3) {
            alarm2waterure = 1;
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

        if (alarm2water && (alarm2waterure || alarm2strain)) {
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



    var water1=0; 
    var water1a=0;
    var waterflag=0;
    for (var k=0;k<300;k++)
    {
        if (ar[k]!=null)
        {
            water1=1;
        }
        if (ar[k]>100)
        {
            water1a=1;
        }
    }
    if (water1==0 || water1a==1)
    {
        waterflag++;
    }


    var water2=0; 
    var water2a=0;
    for (var k=0;k<300;k++)
    {
        if (ar2[k]!=null)
        {
            water2=1;
        }
        if (ar2[k]>100)
        {
            water2a=1;
        }
        //if (ar2[k]>=64)调试语句，是可行的
        //{water2++;}
    }
    if (water1==0 || water2a==1)
    {
        waterflag++;
    }

    var water3=0; 
    var water3a=0;
    for (var k=0;k<300;k++)
    {
        if (ar3[k]!=null)
        {
            water3=1;
        }
        if (ar3[k]>100)
        {
            water3a=1;
        }
    }
    if (water3==0 || water3a==1)
    {
        waterflag++;
    }


    var water4=0; 
    var water4a=0;
    for (var k=0;k<300;k++)
    {
        if (ar4[k]!=null)
        {
            water4=1;
        }
        if (ar4[k]>100)
        {
            water4a=1;
        }
    }
    if (water4==0 || water4a==1)
    {
        waterflag++;
    }

    var water5=0; 
    var water5a=0;
    for (var k=0;k<300;k++)
    {
        if (ar5[k]!=null)
        {
            water5=1;
        }
        if (ar5[k]>100)
        {
            water5a=1;
        }
    }
    if (water5==0 || water5a==1)
    {
        waterflag++;
    }

    var water6=0; 
    var water6a=0;
    for (var k=0;k<300;k++)
    {
        if (ar6[k]!=null)
        {
            water6=1;
        }
        if (ar6[k]>100)
        {
            water6a=1;
        }
    }
    if (water6==0 || water6a==1)
    {
        waterflag++;
    }


    if (waterflag>0)
    {
        document.getElementById('header7').className = "main";  
    }


    var press1=0; 
    var press1a=0;
    var pressflag=0;
    for (var k=0;k<300;k++)
    {
        if (aar[k]!=null)
        {
            press1=1;
        }
        if (aar[k]>2000)
        {
            press1a=1;
        }
    }
    if (press1==0 || press1a==1)
    {
pressflag++;
    }


    var press2=0; 
    var press2a=0;
    for (var k=0;k<300;k++)
    {
        if (aar2[k]!=null)
        {
            press2=1;
        }
        if (aar2[k]>2000)
        {
            press2a=1;
        }
        //if (aar2[k]>=64)调试语句，是可行的
        //{press2++;}
    }
    if (press1==0 || press2a==1)
    {
pressflag++;
    }

    var press3=0; 
    var press3a=0;
    for (var k=0;k<300;k++)
    {
        if (aar3[k]!=null)
        {
            press3=1;
        }
        if (aar3[k]>2000)
        {
            press3a=1;
        }
    }
    if (press3==0 || press3a==1)
    {
pressflag++;
    }


    var press4=0; 
    var press4a=0;
    for (var k=0;k<300;k++)
    {
        if (aar4[k]!=null)
        {
            press4=1;
        }
        if (aar4[k]>2000)
        {
            press4a=1;
        }
    }
    if (press4==0 || press4a==1)
    {
pressflag++;
    }

    var press5=0; 
    var press5a=0;
    for (var k=0;k<300;k++)
    {
        if (aar5[k]!=null)
        {
            press5=1;
        }
        if (aar5[k]>2000)
        {
            press5a=1;
        }
    }
    if (press5==0 || press5a==1)
    {
pressflag++;
    }

    var press6=0; 
    var press6a=0;
    for (var k=0;k<300;k++)
    {
        if (aar6[k]!=null)
        {
            press6=1;
        }
        if (aar6[k]>2000) //(aar6[k]>2)
        {
            press6a=1;
        }
    }
    if (press6==0 || press6a==1)
    {
pressflag++;
    }

    if (pressflag>0)
    {
        document.getElementById('header8').className = "main";  
    }


    var strain1=0; 
    var strain1a=0;
    var strainflag=0;
    for (var k=0;k<300;k++)
    {
        if (aaar[k]!=null)
        {
            strain1=1;
        }
        if (aaar[k]>2000)//(aaar[k]>2)
        {
            strain1a=1;
        }
        //if (aaar[k]>2)
        //{strain1a=strain1a+1;}
    }
    if (strain1==0 || strain1a==1) //if (strain1a==300)
    {
strainflag++;
    }


    var strain2=0; 
    var strain2a=0;
    for (var k=0;k<300;k++)
    {
        if (aaar2[k]!=null)
        {
            strain2=1;
        }
        if (aaar2[k]>2000)
        {
            strain2a=1;
        }
        //if (aaar2[k]>=64)调试语句，是可行的
        //{strain2++;}
    }
    if (strain1==0 || strain2a==1)
    {
strainflag++;
    }

    var strain3=0; 
    var strain3a=0;
    for (var k=0;k<300;k++)
    {
        if (aaar3[k]!=null)
        {
            strain3=1;
        }
        if (aaar3[k]>2000)
        {
            strain3a=1;
        }
    }
    if (strain3==0 || strain3a==1)
    {
strainflag++;
    }


    var strain4=0; 
    var strain4a=0;
    for (var k=0;k<300;k++)
    {
        if (aaar4[k]!=null)
        {
            strain4=1;
        }
        if (aaar4[k]>2000)
        {
            strain4a=1;
        }
    }
    if (strain4==0 || strain4a==1)
    {
strainflag++;
    }

    var strain5=0; 
    var strain5a=0;
    for (var k=0;k<300;k++)
    {
        if (aaar5[k]!=null)
        {
            strain5=1;
        }
        if (aaar5[k]>2000)
        {
            strain5a=1;
        }
    }
    if (strain5==0 || strain5a==1)
    {
strainflag++;
    }

    var strain6=0; 
    var strain6a=0;
    for (var k=0;k<300;k++)
    {
        if (aaar6[k]!=null)
        {
            strain6=1;
        }
        if (aaar6[k]>2000) //(aar6[k]>2)
        {
            strain6a=1;
        }
    }
    if (strain6==0 || strain6a==1)
    {
strainflag++;
    }


    if (strainflag>0)
    {
        document.getElementById('header9').className = "main";  
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