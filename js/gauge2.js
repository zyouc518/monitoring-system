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
            var avg = new Array();
            var avg2 = new Array();
            var avg3 = new Array();
            var avg4 = new Array();
            var avg5 = new Array();
            var avg6 = new Array();
            for (let i = 0; i < 20; i++) {
                var sum1 = 0;
                var sum2 = 0;
                var sum3 = 0;
                var sum4 = 0;
                var sum5 = 0;
                var sum6 = 0;
                for (let j = 0; j < 60; j++) {
                    sum1 += parseFloat(ar[60 * i + j]);
                    sum2 += parseFloat(ar2[60 * i + j]);
                    sum3 += parseFloat(ar3[60 * i + j]);
                    sum4 += parseFloat(ar4[60 * i + j]);
                    sum5 += parseFloat(ar5[60 * i + j]);
                    sum6 += parseFloat(ar6[60 * i + j]);
                }
                avg[i] = (sum1 / 60).toFixed(2);
                avg2[i] = (sum2 / 60).toFixed(2);
                avg3[i] = (sum3 / 60).toFixed(2);
                avg4[i] = (sum4 / 60).toFixed(2);
                avg5[i] = (sum5 / 60).toFixed(2);
                avg6[i] = (sum6 / 60).toFixed(2);
            }
            // }
            chart.arrows[0].setValue(avg[0]);
            chart.axes[0].setTopText(avg[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart.axes[0].bands[1].setEndValue(avg[0]);

            chart2.arrows[0].setValue(avg2[0]);
            chart2.axes[0].setTopText(avg2[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart2.axes[0].bands[1].setEndValue(avg2[0]);

            chart3.arrows[0].setValue(avg3[0]);
            chart3.axes[0].setTopText(avg3[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart3.axes[0].bands[1].setEndValue(avg3[0]);

            chart4.arrows[0].setValue(avg4[0]);
            chart4.axes[0].setTopText(avg4[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart4.axes[0].bands[1].setEndValue(avg4[0]);

            chart5.arrows[0].setValue(avg5[0]);
            chart5.axes[0].setTopText(avg5[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart5.axes[0].bands[1].setEndValue(avg5[0]);

            chart6.arrows[0].setValue(avg6[0]);
            chart6.axes[0].setTopText(avg6[0] + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart6.axes[0].bands[1].setEndValue(avg6[0]);
            for (let i = 0; i < 20; i++) {
                valueArray1[i] = avg[19 - i];
                valueArray2[i] = avg2[19 - i];
                valueArray3[i] = avg3[19 - i];
                valueArray4[i] = avg4[19 - i];
                valueArray5[i] = avg5[19 - i];
                valueArray6[i] = avg6[19 - i];
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
            var avg = 0;
            var avg2 = 0;
            var avg3 = 0;
            var avg4 = 0;
            var avg5 = 0;
            var avg6 = 0;
            var sum1 = 0;
            var sum2 = 0;
            var sum3 = 0;
            var sum4 = 0;
            var sum5 = 0;
            var sum6 = 0;
            for (let i = 0; i < 60; i++) {
                sum1 += parseFloat(aar[i]);
                sum2 += parseFloat(aar2[i]);
                sum3 += parseFloat(aar3[i]);
                sum4 += parseFloat(aar4[i]);
                sum5 += parseFloat(aar5[i]);
                sum6 += parseFloat(aar6[i]);
            }
            avg = (sum1 / 60).toFixed(2);
            avg2 = (sum2 / 60).toFixed(2);
            avg3 = (sum3 / 60).toFixed(2);
            avg4 = (sum4 / 60).toFixed(2);
            avg5 = (sum5 / 60).toFixed(2);
            avg6 = (sum6 / 60).toFixed(2);
            chart.arrows[0].setValue(avg);
            chart.axes[0].setTopText(avg + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart.axes[0].bands[1].setEndValue(avg);

            chart2.arrows[0].setValue(avg2);
            chart2.axes[0].setTopText(avg2 + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart2.axes[0].bands[1].setEndValue(avg2);

            chart3.arrows[0].setValue(avg3);
            chart3.axes[0].setTopText(avg3 + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart3.axes[0].bands[1].setEndValue(avg3);

            chart4.arrows[0].setValue(avg4);
            chart4.axes[0].setTopText(avg4 + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart4.axes[0].bands[1].setEndValue(avg4);

            chart5.arrows[0].setValue(avg5);
            chart5.axes[0].setTopText(avg5 + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart5.axes[0].bands[1].setEndValue(avg5);

            chart6.arrows[0].setValue(avg6);
            chart6.axes[0].setTopText(avg6 + " kPa");
            // adjust darker band to new ar[ar.length-1]
            chart6.axes[0].bands[1].setEndValue(avg6);

            var currentValue1 = avg;
            var currentValue2 = avg2;
            var currentValue3 = avg3;
            var currentValue4 = avg4;
            var currentValue5 = avg5;
            var currentValue6 = avg6;
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