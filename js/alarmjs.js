$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    });
    var sensorName = Array('含水率传感器', '压力传感器', '应变传感器');
    var alarmLevel = Array('一级', '二级', '三级');
    var ins = Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
    var valueExceed = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var positionExceed = Array('AU', 'AM', 'AL', 'FU', 'FM', 'FL'); //zheli xie suoxie , weizhi d suoxie biru WCAU shenmede.
    var Exceed = Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
    var EENull = Array(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false);
    var SStrain = Array(false, false, false, false, false, false);
    var ValStrain = Array(0, 0, 0, 0, 0, 0);

    setInterval(function () {

        $('#results').load('php/alarm1.php');
        $('#results').load('php/alarm2.php');
        $('#results').load('php/alarm3.php');

        var alarm1flag = 0;
        var a = document.getElementById('rhocon').innerHTML;
        var b = document.getElementById('waterpercon').innerHTML;
        var TML = 100;
        if (a != "" && b != "") {
            TML = a * b / (a * b + 1 - b);
            if (ar[0] > TML) alarm1flag++;
            if (ar2[0] > TML) alarm1flag++;
            if (ar3[0] > TML) alarm1flag++;
            if (ar4[0] > TML) alarm1flag++;
            if (ar5[0] > TML) alarm1flag++;
            if (ar6[0] > TML) alarm1flag++;
            if (alarm1flag >= 4) {
                //一级报警操作
                document.getElementById('header1').className = "main";
                ins[0] = true;
            } else {
                document.getElementById('header1').className = "normal";
                ins[0] = false;
            }

            //二级报警
            var alarm2water = 0;
            var alarm2waterure = 0;
            var alarm2strain = 0;
            var wflag = 0;
            if (aar[0] > 80) {
                wflag++;
            }
            if (aar2[0] > 80) {
                wflag++;
            }
            if (aar3[0] > 80) {
                wflag++;
            }
            if (aar4[0] > 80) {
                wflag++;
            }
            if (aar5[0] > 80) {
                wflag++;
            }
            if (aar6[0] > 80) {
                wflag++;
            }
            if ((wflag / 6) > 0.75) {
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
                ins[1] = true;
            } else {
                document.getElementById('header2').className = "normal";
                ins[1] = false;
            }

            //三级报警
            var alarm3 = 0;
            var alarm3flag = 0;
            for (var k = 0; k < 1100; k++) {
                if (ar[k] > 99) {
                    alarm3flag++;
                }
                if (ar4[k] > 99) //最上层是传感器1和4
                {
                    alarm3flag++;
                }
            }
            if (alarm3flag > 120) {
                alarm3 = 1;
            }
            if (alarm3 == 1) {
                //三级报警操作
                document.getElementById('header3').className = "main";
                ins[2] = true;
            } else {
                document.getElementById('header3').className = "normal";
                ins[2] = false;
            }
        }


        var water1 = 0;
        var water1a = 0;
        var waterflag = 0;
        var waterflag2 = 0;
        for (var k = 0; k < 60; k++) {
            if (ar[k] != null) {
                water1 = 1;

            }
            if (ar[k] > 99.9 || ar[k] < 0) {
                water1a = 1;
                valueExceed[0] = ar[k];
            }
        }
        if (water1 == 0) {
            EENull[0] = true;
            waterflag++;
        }
        if (water1a == 1) {
            Exceed[0] = true;
            waterflag2++;
        }


        var water2 = 0;
        var water2a = 0;
        for (var k = 0; k < 60; k++) {
            if (ar2[k] != null) {
                water2 = 1;
            }
            if (ar2[k] > 99.9 || ar2[k] < 0) {
                water2a = 1;
                valueExceed[1] = ar2[k];
            }
            //if (ar2[k]>=64)调试语句，是可行的
            //{water2++;}
        }
        if (water2 == 0) {
            EENull[1] = true;
            waterflag++;
        }
        if (water2a == 1) {
            Exceed[1] = true;
            waterflag2++;
        }

        var water3 = 0;
        var water3a = 0;
        for (var k = 0; k < 60; k++) {
            if (ar3[k] != null) {
                water3 = 1;
            }
            if (ar3[k] > 99.9 || ar3[k] < 0) {
                water3a = 1;
                valueExceed[2] = ar3[k];

            }
        }
        if (water3 == 0) {
            EENull[2] = true;
            waterflag++;
        }
        if (water3a == 1) {
            Exceed[2] = true;
            waterflag2++;
        }


        var water4 = 0;
        var water4a = 0;
        for (var k = 0; k < 60; k++) {
            if (ar4[k] != null) {
                water4 = 1;
            }
            if (ar4[k] > 99.9 || ar4[k] < 0) {
                water4a = 1;
                valueExceed[3] = ar4[k];
            }
        }
        if (water4 == 0) {
            EENull[3] = true;
            waterflag++;
        }
        if (water4a == 1) {
            Exceed[3] = true;
            waterflag2++;
        }

        var water5 = 0;
        var water5a = 0;
        for (var k = 0; k < 60; k++) {
            if (ar5[k] != null) {
                water5 = 1;
            }
            if (ar5[k] > 99.9 || ar5[k] < 0) {
                valueExceed[4] = ar5[k];
                water5a = 1;
            }
        }
        if (water5 == 0) {
            EENull[4] = true;
            waterflag++;
        }
        if (water5a == 1) {
            Exceed[4] = true;
            waterflag2++;
        }

        var water6 = 0;
        var water6a = 0;
        for (var k = 0; k < 60; k++) {
            if (ar6[k] != null) {
                water6 = 1;
            }
            if (ar6[k] > 99.9 || ar6[k] < 0) {
                water6a = 1;
                valueExceed[5] = ar6[k];
            }
        }
        if (water6 == 0) {
            EENull[5] = true;
            waterflag++;
        }
        if (water6a == 1) {
            Exceed[5] = true;
            waterflag2++;
        }

        // document.getElementById("header7").innerHTML= "css/light.jpg";

        if (waterflag > 0) {
            document.getElementById('header7').className = "main";
            ins[3] = true;
        } else {
            document.getElementById('header7').className = "normal";
            ins[3] = false;
        }

        if (waterflag2 > 0) {
            document.getElementById('header10').className = "main";
            ins[6] = true;
        } else {
            document.getElementById('header10').className = "normal";
            ins[6] = false;
        }


        var press1 = 0;
        var press1a = 0;
        var pressflag = 0;
        var pressflag2 = 0;
        for (var k = 0; k < 60; k++) {
            if (aar[k] != null) {
                press1 = 1;
            }
            if (aar[k] > 2000 || aar[k] < 0) {
                valueExceed[6] = aar[k];
                press1a = 1;
            }
        }
        if (press1 == 0) {
            EENull[6] = true;
            pressflag++;
        }
        if (press1a == 1) {
            Exceed[6] = true;
            pressflag2++;
        }


        var press2 = 0;
        var press2a = 0;
        for (var k = 0; k < 60; k++) {
            if (aar2[k] != null) {
                press2 = 1;
            }
            if (aar2[k] > 2000 || aar2[k] < 0) {
                valueExceed[7] = aar2[k];
                press2a = 1;
            }
            //if (aar2[k]>=64)调试语句，是可行的
            //{press2++;}
        }
        if (press2 == 0) {
            EENull[7] = true;
            pressflag++;
        }
        if (press2a == 1) {
            Exceed[7] = true;
            pressflag2++;
        }

        var press3 = 0;
        var press3a = 0;
        for (var k = 0; k < 60; k++) {
            if (aar3[k] != null) {
                press3 = 1;
            }
            if (aar3[k] > 2000 || aar3[k] < 0) {
                press3a = 1;
                valueExceed[8] = aar3[k];
            }
        }
        if (press3 == 0) {
            EENull[8] = true;
            pressflag++;
        }
        if (press3a == 1) {
            Exceed[8] = true;
            pressflag2++;
        }


        var press4 = 0;
        var press4a = 0;
        for (var k = 0; k < 60; k++) {
            if (aar4[k] != null) {
                press4 = 1;
            }
            if (aar4[k] > 2000 || aar4[k] < 0) {
                press4a = 1;
                valueExceed[9] = aar4[k];
            }
        }
        if (press4 == 0) {
            EENull[9] = true;
            pressflag++;
        }
        if (press4a == 1) {
            Exceed[9] = true;
            pressflag2++;
        }

        var press5 = 0;
        var press5a = 0;
        for (var k = 0; k < 60; k++) {
            if (aar5[k] != null) {
                press5 = 1;
            }
            if (aar5[k] > 2000 || aar5[k] < 0) {
                press5a = 1;
                valueExceed[10] = aar5[k];
            }
        }
        if (press5 == 0) {
            EENull[10] = true;
            pressflag++;

        }
        if (press5a == 1) {
            Exceed[10] = true;
            pressflag2++;
        }

        var press6 = 0;
        var press6a = 0;
        for (var k = 0; k < 60; k++) {
            if (aar6[k] != null) {
                press6 = 1;
            }
            if (aar6[k] > 2000 || aar6[k] < 0) //(aar6[k]>2)
            {
                press6a = 1;
                valueExceed[11] = aar6[k];
            }
        }
        if (press6 == 0) {
            EENull[11] = true;
            pressflag++;
        }
        if (press6a == 1) {
            Exceed[11] = true;
            pressflag2++;
        }

        if (pressflag > 0) {
            document.getElementById('header8').className = "main";
            ins[4] = true;
        } else {
            document.getElementById('header8').className = "normal";
            ins[4] = false;
        }
        if (pressflag2 > 0) {
            document.getElementById('header11').className = "main";
            ins[7] = true;
        } else {
            document.getElementById('header11').className = "normal";
            ins[7] = false;
        }


        var strain1 = 0;
        var strain1a = 0;
        var strainflag = 0;
        var strainflag2 = 0;
        var yingflag1 = 0;
        var yingflag2 = 0;
        var yingflag3 = 0;
        var yingflag4 = 0;
        var yingflag5 = 0;
        var yingflag6 = 0;
        for (var k = 0; k < 4; k++) {
            if (aaar[k] != null) {
                strain1 = 1;
            }
            if (aaar[k] > 2000 || aaar[k] < 0) //(aaar[k]>2)
            {
                strain1a = 1;
                valueExceed[12] = aaar[k];
            }
            //if (aaar[k]>2)
            //{strain1a=strain1a+1;}
        }
        if (strain1 == 0) //if (strain1a==4)
        {
            EENull[12] = true;
            strainflag++;
        }
        if (strain1a == 1) {
            Exceed[12] = true;
            strainflag2++;
        }

        var strain2 = 0;
        var strain2a = 0;
        for (var k = 0; k < 4; k++) {
            if (aaar2[k] != null) {
                strain2 = 1;
            }
            if (aaar2[k] > 2000 || aaar2[k] < 0) {
                strain2a = 1;
                valueExceed[13] = aaar2[k];
            }
            //if (aaar2[k]>=64)调试语句，是可行的
            //{strain2++;}
        }
        if (strain2 == 0) {
            EENull[13] = true;
            strainflag++;
        }
        if (strain2a == 1) {
            Exceed[13] = true;
            strainflag2++;
        }

        var strain3 = 0;
        var strain3a = 0;
        for (var k = 0; k < 4; k++) {
            if (aaar3[k] != null) {
                strain3 = 1;
            }
            if (aaar3[k] > 2000 || aaar3[k] < 0) {
                strain3a = 1;
                valueExceed[14] = aaar3[k];
            }
        }
        if (strain3 == 0) {
            EENull[14] = true;
            strainflag++;
        }
        if (strain3a == 1) {
            Exceed[14] = true;
            strainflag2++;
        }

        var strain4 = 0;
        var strain4a = 0;
        for (var k = 0; k < 4; k++) {
            if (aaar4[k] != null) {
                strain4 = 1;
            }
            if (aaar4[k] > 2000 || aaar4[k] < 0) {
                strain4a = 1;
                valueExceed[15] = aaar4[k];
            }
        }
        if (strain4 == 0) {
            EENull[15] = true;
            strainflag++;
        }
        if (strain4a == 1) {
            Exceed[15] = true;
            strainflag2++;
        }

        var strain5 = 0;
        var strain5a = 0;
        for (var k = 0; k < 4; k++) {
            if (aaar5[k] != null) {
                strain5 = 1;
            }
            if (aaar5[k] > 2000 || aaar5[k] < 0) {
                strain5a = 1;
                valueExceed[16] = aaar5[k];
            }
        }
        if (strain5 == 0) {
            EENull[16] = true;
            strainflag++;
        }
        if (strain5a == 1) {
            Exceed[16] = true;
            strainflag2++;
        }

        var strain6 = 0;
        var strain6a = 0;
        for (var k = 0; k < 4; k++) {
            if (aaar6[k] != null) {
                strain6 = 1;
            }
            if (aaar6[k] > 2000 || aaar6[k] < 0) //(aar6[k]>2)
            {
                strain6a = 1;
                valueExceed[17] = aaar6[k];
            }
        }
        if (strain6 == 0) {
            EENull[17] = true;
            strainflag++;
        }
        if (strain6a == 1) {
            Exceed[17] = true;
            strainflag2++;
        }


        if (strainflag > 0) {
            document.getElementById('header9').className = "main";
            ins[5] = true;
        } else {
            document.getElementById('header9').className = "normal";
            ins[5] = false;
        }
        if (strainflag2 > 0) {
            document.getElementById('header12').className = "main";
            ins[8] = true;
        } else {
            document.getElementById('header12').className = "normal";
            ins[8] = false;
        }


        if (aaar[0] >= 1530) {
            yingflag1 = 1;
            ValStrain[0] = aaar[0];
            SStrain[0] = true;
        }
        if (aaar2[0] >= 1530) {
            yingflag2 = 1;
            ValStrain[1] = aaar2[0];
            SStrain[1] = true;
        }
        if (aaar3[0] >= 1530) {
            yingflag3 = 1;
            ValStrain[2] = aaar3[0];
            SStrain[2] = true;
        }
        if (aaar4[0] >= 1530) {
            yingflag4 = 1;
            ValStrain[3] = aaar4[0];
            SStrain[3] = true;
        }
        if (aaar5[0] >= 1530) {
            yingflag5 = 1;
            ValStrain[4] = aaar5[0];
            SStrain[4] = true;
        }
        if (aaar6[0] >= 1530) {
            yingflag6 = 1;
            ValStrain[5] = aaar6[0];
            SStrain[5] = true;
        }
        if (yingflag1 == 1) {
            document.getElementById('header13').className = "main";
            ins[9] = true;
        } else {
            document.getElementById('header13').className = "normal";
            ins[9] = false;
        }
        if (yingflag2 == 1) {
            document.getElementById('header14').className = "main";
            ins[10] = true;
        } else {
            document.getElementById('header14').className = "normal";
            ins[10] = false;
        }
        if (yingflag3 == 1) {
            document.getElementById('header15').className = "main";
            ins[11] = true;
        } else {
            document.getElementById('header15').className = "normal";
            ins[11] = false;
        }
        if (yingflag4 == 1) {
            document.getElementById('header16').className = "main";
            ins[12] = true;
        } else {
            document.getElementById('header16').className = "normal";
            ins[12] = false;
        }
        if (yingflag5 == 1) {
            document.getElementById('header17').className = "main";
            ins[13] = true;
        } else {
            document.getElementById('header17').className = "normal";
            ins[13] = false;
        }
        if (yingflag6 == 1) {
            document.getElementById('header18').className = "main";
            ins[14] = true;
        } else {
            document.getElementById('header18').className = "normal";
            ins[14] = false;
        }

        for (let i = 0; i < 15; i++) {
            if (ins[i]) {
                if (0 <= i && i < 3) {
                    $.ajax({
                        url: "php/insert.php",
                        type: "post",
                        data: {
                            type: '预警',
                            name: null,
                            position: null,
                            value: null,
                            level: alarmLevel[i]
                        },
                        success: function (data) {
                            var dataParsed = JSON.parse(data);
                            console.log(dataParsed);
                        }
                    });
                } else if (3 <= i && i < 6) {
                    for (let j = 3 * (i - 3); j < 3 * (i - 1); j++) {
                        if (EENull[j]) {
                            $.ajax({
                                url: "php/insert.php",
                                type: "post",
                                data: {
                                    type: '设备故障',
                                    name: sensorName[i - 3],
                                    position: positionExceed[j % 6],
                                    value: null,
                                    level: null
                                },
                                success: function (data) {
                                    var dataParsed = JSON.parse(data);
                                    console.log(dataParsed);
                                }
                            });
                        }
                    }
                } else if (6 <= i && i < 9) {
                    for (let j = 3 * (i - 6); j < 3 * (i - 4); j++) {
                        if (Exceed[j]) {
                            $.ajax({
                                url: "php/insert.php",
                                type: "post",
                                data: {
                                    type: '数据异常',
                                    name: sensorName[i - 6],
                                    position: positionExceed[j % 6],
                                    value: valueExceed[j],
                                    level: null
                                },
                                success: function (data) {
                                    var dataParsed = JSON.parse(data);
                                    console.log(dataParsed);
                                }
                            });
                        }
                    }
                } else {
                    $.ajax({
                        url: "php/insert.php",
                        type: "post",
                        data: {
                            type: '货舱局部应力',
                            name: '应变传感器',
                            position: positionExceed[i - 9],
                            value: ValStrain[i - 9],
                            level: null
                        },
                        success: function (data) {
                            var dataParsed = JSON.parse(data);
                            console.log(dataParsed);
                        }
                    });
                }
            }
        }
    }, 1000);
});