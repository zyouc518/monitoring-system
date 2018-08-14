$(document).ready(function () {
    $.ajaxSetup({
        cache: false
    }); // This part addresses an IE bug. without it, IE will only load the first number and will never refresh
    var valueArray1 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray2 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray3 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray4 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray5 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var valueArray6 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', time],
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', time],
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', time],
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', time],
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', time],
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
            labels: ['', '', '', '', '', '', '', '', '', '', '', '', time],
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
    setInterval(function () {
        $('#results').load('php/g3-1.php');
        $('#results').load('php/g3-2.php');
        $('#results').load('php/g3-3.php');
        $('#results').load('php/g3-4.php');
        $('#results').load('php/g3-5.php');
        $('#results').load('php/g3-6.php');
        chart.arrows[0].setValue(aaar[0]);
        chart.axes[0].setTopText(aaar[0] + "  \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart.axes[0].bands[1].setEndValue(aaar[0]);

        chart2.arrows[0].setValue(aaar2[0]);
        chart2.axes[0].setTopText(aaar2[0] + "  \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart2.axes[0].bands[1].setEndValue(aaar2[0]);

        chart3.arrows[0].setValue(aaar3[0]);
        chart3.axes[0].setTopText(aaar3[0] + "  \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart3.axes[0].bands[1].setEndValue(aaar3[0]);

        chart4.arrows[0].setValue(aaar4[0]);
        chart4.axes[0].setTopText(aaar4[0] + "  \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart4.axes[0].bands[1].setEndValue(aaar4[0]);

        chart5.arrows[0].setValue(aaar5[0]);
        chart5.axes[0].setTopText(aaar5[0] + "  \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart5.axes[0].bands[1].setEndValue(aaar5[0]);

        chart6.arrows[0].setValue(aaar6[0]);
        chart6.axes[0].setTopText(aaar6[0] + "  \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart6.axes[0].bands[1].setEndValue(aaar6[0]);

        var currentValue1 = aaar[0];
        var currentValue2 = aaar2[0];
        var currentValue3 = aaar3[0];
        var currentValue4 = aaar4[0];
        var currentValue5 = aaar5[0];
        var currentValue6 = aaar6[0];
        valueArray1[getValueIndex] = currentValue1;
        valueArray2[getValueIndex] = currentValue2;
        valueArray3[getValueIndex] = currentValue3;
        valueArray4[getValueIndex] = currentValue4;
        valueArray5[getValueIndex] = currentValue5;
        valueArray6[getValueIndex] = currentValue6;
        if (getValueIndex < 13) {
            getValueIndex++;
        }
        if (getValueIndex == 13) {
            for (var j = 0; j < 13; j++) {
                valueArray1[j] = valueArray1[j + 1];
                valueArray2[j] = valueArray2[j + 1];
                valueArray3[j] = valueArray3[j + 1];
                valueArray4[j] = valueArray4[j + 1];
                valueArray5[j] = valueArray5[j + 1];
                valueArray6[j] = valueArray6[j + 1];
            }
            valueArray1[12] = currentValue1;
            valueArray2[12] = currentValue2;
            valueArray3[12] = currentValue3;
            valueArray4[12] = currentValue4;
            valueArray5[12] = currentValue5;
            valueArray6[12] = currentValue6;
        }
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        if (minute < 10) {
            minute = "0" + minute;
        }
        time = hour + ":" + minute;
        window.myLine1.data.labels[12] = time;
        window.myLine2.data.labels[12] = time;
        window.myLine3.data.labels[12] = time;
        window.myLine4.data.labels[12] = time;
        window.myLine5.data.labels[12] = time;
        window.myLine6.data.labels[12] = time;
        window.myLine1.update();
        window.myLine2.update();
        window.myLine3.update();
        window.myLine4.update();
        window.myLine5.update();
        window.myLine6.update();
    }, 15000);
});