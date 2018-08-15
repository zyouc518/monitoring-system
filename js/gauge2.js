$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    }); // This part addresses an IE bug. without it, IE will only load the first number and will never refresh
    var valueArray1 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray2 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray3 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray4 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray5 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray6 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var getValueIndex = 0;
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    time = hour + ":" + minute;
    var config1 = {
        type: 'line',
        data: {
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
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
                        labelString: 'Value'
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
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
                        labelString: 'Value'
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
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
                        labelString: 'Value'
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
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
                        labelString: 'Value'
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
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
                        labelString: 'Value'
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', time],
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
                        labelString: 'Value'
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

    function drawLine() {
        $('#results').load('php/g2.php');
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
        var currentValue6 = aar6[0];
        valueArray1[getValueIndex] = currentValue1;
        valueArray2[getValueIndex] = currentValue2;
        valueArray3[getValueIndex] = currentValue3;
        valueArray4[getValueIndex] = currentValue4;
        valueArray5[getValueIndex] = currentValue5;
        valueArray6[getValueIndex] = currentValue6;
        if (getValueIndex < 20) {
            getValueIndex++;
        }
        if (getValueIndex == 20) {
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
        }
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        time = hour + ":" + minute;
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
    }

    function setIntervalImmediately(func, interval) {
        func();
        return setInterval(func, interval);
    }
    setInterval(drawLine, 1000);
});