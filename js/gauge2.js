$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    }); // This part addresses an IE bug. without it, IE will only load the first number and will never refresh
    var valueArray1 = Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    var valueArray2 = Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    var valueArray3 = Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    var valueArray4 = Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    var valueArray5 = Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    var valueArray6 = Array(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    var getValueIndex = 0;
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    time = hour + ":" + minute;
    var hourb = d.getHours();
    var minuteb = d.getMinutes();
    if (minuteb < 19) {
        minuteb = minuteb + 60 - 19;
        if (hourb == 0) {
            hourb = 23;
        } else {
            hourb -= 1;
        }
    } else {
        minuteb -= 19;
    }
    if (minuteb < 10) {
        minuteb = "0" + minuteb;
    }
    timeb = hourb + ":" + minuteb;
    var config1 = {
        type: 'line',
        data: {
            labels: [timeb, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
            datasets: [{
                data: valueArray1,
                label: 'Data',
                borderColor: 'green',
                fill: false,
            }]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: '含水率传感器数据'
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
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value (kPa)'
                    },
                    ticks: {
                        stepSize: 200
                    }
                }]
            }
        }
    };
    // window.onload = function () {
    //     var ctx1 = document.getElementById("myChart1").getContext('2d');
    //     window.myLine = new Chart(ctx1, config1);
    // };

    var config2 = {
        type: 'line',
        data: {
            labels: [timeb, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
            datasets: [
                /*{
                            label: 'GZ',
                            fill: false,
                        }, {
                            label: 'AREA',
                            fill: false
                        }, */
                {
                    data: valueArray2,
                    label: 'Data',
                    borderColor: 'green',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: '含水率传感器数据'
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
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value (kPa)'
                    },
                    ticks: {
                        stepSize: 200
                    }
                }]
            }
        }
    };
    // window.onload = function () {
    //     var ctx2 = document.getElementById("myChart2").getContext('2d');
    //     window.myLine = new Chart(ctx2, config2);
    // };

    var config3 = {
        type: 'line',
        data: {
            labels: [timeb, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
            datasets: [
                /*{
                            label: 'GZ',
                            fill: false,
                        }, {
                            label: 'AREA',
                            fill: false
                        }, */
                {
                    data: valueArray3,
                    label: 'Data',
                    borderColor: 'green',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: '含水率传感器数据'
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
                        display: true
                        // labelString: 'Heeling Angle (degree)'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value (kPa)'
                    },
                    ticks: {
                        stepSize: 200
                    }
                }]
            }
        }
    };
    // window.onload = function () {
    //     var ctx3 = document.getElementById("myChart3").getContext('2d');
    //     window.myLine = new Chart(ctx3, config3);
    // };

    var config4 = {
        type: 'line',
        data: {
            labels: [timeb, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
            datasets: [
                /*{
                            label: 'GZ',
                            fill: false,
                        }, {
                            label: 'AREA',
                            fill: false
                        }, */
                {
                    data: valueArray4,
                    label: 'Data',
                    borderColor: 'green',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: '含水率传感器数据'
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
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value (kPa)'
                    },
                    ticks: {
                        stepSize: 200
                    }
                }]
            }
        }
    };
    // window.onload = function () {
    //     var ctx4 = document.getElementById("myChart4").getContext('2d');
    //     window.myLine = new Chart(ctx4, config4);
    // };

    var config5 = {
        type: 'line',
        data: {
            labels: [timeb, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
            datasets: [
                /*{
                            label: 'GZ',
                            fill: false,
                        }, {
                            label: 'AREA',
                            fill: false
                        }, */
                {
                    data: valueArray5,
                    label: 'Data',
                    borderColor: 'green',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: '含水率传感器数据'
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
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value (kPa)'
                    },
                    ticks: {
                        stepSize: 200
                    }
                }]
            }
        }
    };
    // window.onload = function () {
    //     var ctx5 = document.getElementById("myChart5").getContext('2d');
    //     window.myLine = new Chart(ctx5, config5);
    // };

    var config6 = {
        type: 'line',
        data: {
            labels: [timeb, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
            datasets: [
                /*{
                            label: 'GZ',
                            fill: false,
                        }, {
                            label: 'AREA',
                            fill: false
                        }, */
                {
                    data: valueArray6,
                    label: 'Data',
                    borderColor: 'green',
                    fill: false,
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                // text: '含水率传感器数据'
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
                        display: true
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value (kPa)'
                    },
                    ticks: {
                        stepSize: 200
                    }
                }]
            }
        }
    };
    var ctx1 = document.getElementById("myChart1").getContext('2d');
    window.myLine1 = new Chart(ctx1, config1);
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    window.myLine2 = new Chart(ctx2, config2);
    var ctx3 = document.getElementById("myChart3").getContext('2d');
    window.myLine3 = new Chart(ctx3, config3);
    var ctx4 = document.getElementById("myChart4").getContext('2d');
    window.myLine4 = new Chart(ctx4, config4);
    var ctx5 = document.getElementById("myChart5").getContext('2d');
    window.myLine5 = new Chart(ctx5, config5);
    var ctx6 = document.getElementById("myChart6").getContext('2d');
    window.myLine6 = new Chart(ctx6, config6);
    window.onload = function () {
        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "php/g2.php";
        var asynchronous = true;

        ajax.open(method, url, asynchronous);
        //sending ajax request
        ajax.send();

        //receiving response from g1.php
        ajax.onreadystatechange = function () {
            // if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            var ar = new Array();
            var ar2 = new Array();
            var ar3 = new Array();
            var ar4 = new Array();
            var ar5 = new Array();
            var ar6 = new Array();
            for (let i = 0; i < 1200; i++) {
                ar.push(res[i].PAU);
                ar2.push(res[i].PAM);
                ar3.push(res[i].PAL);
                ar4.push(res[i].PFU);
                ar5.push(res[i].PFM);
                ar6.push(res[i].PFL);
            }
            // }
            chart.arrows[0].setValue(ar[0]);
            chart.axes[0].setTopText(ar[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart.axes[0].bands[1].setEndValue(ar[0]);

            chart2.arrows[0].setValue(ar2[0]);
            chart2.axes[0].setTopText(ar2[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart2.axes[0].bands[1].setEndValue(ar2[0]);

            chart3.arrows[0].setValue(ar3[0]);
            chart3.axes[0].setTopText(ar3[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart3.axes[0].bands[1].setEndValue(ar3[0]);

            chart4.arrows[0].setValue(ar4[0]);
            chart4.axes[0].setTopText(ar4[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart4.axes[0].bands[1].setEndValue(ar4[0]);

            chart5.arrows[0].setValue(ar5[0]);
            chart5.axes[0].setTopText(ar5[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart5.axes[0].bands[1].setEndValue(ar5[0]);

            chart6.arrows[0].setValue(ar6[0]);
            chart6.axes[0].setTopText(ar6[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart6.axes[0].bands[1].setEndValue(ar6[0]);
            for (let i = 0; i < 20; i++) {
                valueArray1[i] = ar[19 - i];
                valueArray2[i] = ar2[19 - i];
                valueArray3[i] = ar3[19 - i];
                valueArray4[i] = ar4[19 - i];
                valueArray5[i] = ar5[19 - i];
                valueArray6[i] = ar6[19 - i];
            }
            var d = new Date();
            var hour = d.getHours();
            var minute = d.getMinutes();
            if (minute < 10) {
                minute = "0" + minute;
            }
            time = hour + ":" + minute;
            var hourb = d.getHours();
            var minuteb = d.getMinutes();
            if (minuteb < 19) {
                minuteb = minuteb + 60 - 19;
                if (hourb == 0) {
                    hourb = 23;
                } else {
                    hourb -= 1;
                }
            } else {
                minuteb -= 19;
            }
            if (minuteb < 10) {
                minuteb = "0" + minuteb;
            }
            timeb = hourb + ":" + minuteb;
            window.myLine1.data.labels[19] = time;
            window.myLine2.data.labels[19] = time;
            window.myLine3.data.labels[19] = time;
            window.myLine4.data.labels[19] = time;
            window.myLine5.data.labels[19] = time;
            window.myLine6.data.labels[19] = time;

            window.myLine1.update();
            window.myLine2.update();
            window.myLine3.update();
            window.myLine4.update();
            window.myLine5.update();
            window.myLine6.update();
        };
    };

    function drawLine() {
        var ajax = new XMLHttpRequest();
        var method = "GET";
        var url = "php/g2.php";
        var asynchronous = true;

        ajax.open(method, url, asynchronous);
        //sending ajax request
        ajax.send();

        //receiving response from g1.php
        ajax.onreadystatechange = function () {
            // if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(this.responseText);
            var aar = new Array();
            var aar2 = new Array();
            var aar3 = new Array();
            var aar4 = new Array();
            var aar5 = new Array();
            var aar6 = new Array();
            for (let i = 0; i < 1200; i++) {
                aar.push(res[i].PAU);
                aar2.push(res[i].PAM);
                aar3.push(res[i].PAL);
                aar4.push(res[i].PFU);
                aar5.push(res[i].PFM);
                aar6.push(res[i].PFL);
            }
            chart.arrows[0].setValue(aar[0]);
            chart.axes[0].setTopText(aar[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart.axes[0].bands[1].setEndValue(aar[0]);

            chart2.arrows[0].setValue(aar2[0]);
            chart2.axes[0].setTopText(aar2[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart2.axes[0].bands[1].setEndValue(aar2[0]);

            chart3.arrows[0].setValue(aar3[0]);
            chart3.axes[0].setTopText(aar3[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart3.axes[0].bands[1].setEndValue(aar3[0]);

            chart4.arrows[0].setValue(aar4[0]);
            chart4.axes[0].setTopText(aar4[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart4.axes[0].bands[1].setEndValue(aar4[0]);

            chart5.arrows[0].setValue(aar5[0]);
            chart5.axes[0].setTopText(aar5[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart5.axes[0].bands[1].setEndValue(aar5[0]);

            chart6.arrows[0].setValue(aar6[0]);
            chart6.axes[0].setTopText(aar6[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart6.axes[0].bands[1].setEndValue(aar6[0]);

            var currentValue1 = aar[0];
            var currentValue2 = aar2[0];
            var currentValue3 = aar3[0];
            var currentValue4 = aar4[0];
            var currentValue5 = aar5[0];
            var currentValue6 = aar6[0]
            for (var j = 0; j < 20; j++) {
                valueArray1[j] = valueArray1[j + 1];
                valueArray2[j] = valueArray2[j + 1];
                valueArray3[j] = valueArray3[j + 1];
                valueArray4[j] = valueArray4[j + 1];
                valueArray5[j] = valueArray5[j + 1];
                valueArray6[j] = valueArray6[j + 1];
            }
            valueArray1[19] = currentValue1;
            valueArray2[19] = currentValue2;
            valueArray3[19] = currentValue3;
            valueArray4[19] = currentValue4;
            valueArray5[19] = currentValue5;
            valueArray6[19] = currentValue6;
            var d = new Date();
            var hour = d.getHours();
            var minute = d.getMinutes();
            if (minute < 10) {
                minute = "0" + minute;
            }
            time = hour + ":" + minute;
            var hourb = d.getHours();
            var minuteb = d.getMinutes();
            if (minuteb < 19) {
                minuteb = minuteb + 60 - 19;
                if (hourb == 0) {
                    hourb = 23;
                } else {
                    hourb -= 1;
                }
            } else {
                minuteb -= 19;
            }
            if (minuteb < 10) {
                minuteb = "0" + minuteb;
            }
            timeb = hourb + ":" + minuteb;
            window.myLine1.data.labels[19] = time;
            window.myLine2.data.labels[19] = time;
            window.myLine3.data.labels[19] = time;
            window.myLine4.data.labels[19] = time;
            window.myLine5.data.labels[19] = time;
            window.myLine6.data.labels[19] = time;
            window.myLine1.update();
            window.myLine2.update();
            window.myLine3.update();
            window.myLine4.update();
            window.myLine5.update();
            window.myLine6.update();
        };
    }
    setInterval(drawLine, 1000);
});