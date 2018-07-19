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
    setInterval(function () {
        $('#results').load('php/g3-1.php');
        $('#results').load('php/g3-2.php');
        $('#results').load('php/g3-3.php');
        $('#results').load('php/g3-4.php');
        $('#results').load('php/g3-5.php');
        $('#results').load('php/g3-6.php');
        chart.arrows[0].setValue(ar[ar.length - 1]);
        chart.axes[0].setTopText(ar[ar.length - 1] + " \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart.axes[0].bands[1].setEndValue(ar[ar.length - 1]);
        if (ar[ar.length - 1] > 2000 || ar[ar.length - 1] < 0) {
            document.getElementById('header1').style.color = "red";
        } else {
            document.getElementById('header1').style.color = "grey";
        }

        chart2.arrows[0].setValue(ar2[ar2.length - 1]);
        chart2.axes[0].setTopText(ar2[ar2.length - 1] + " \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart2.axes[0].bands[1].setEndValue(ar2[ar2.length - 1]);
        if (ar[ar2.length - 1] > 2000 || ar2[ar2.length - 1] < 0) {
            document.getElementById('header2').style.color = "red";
        } else {
            document.getElementById('header2').style.color = "grey";
        }

        chart3.arrows[0].setValue(ar3[ar3.length - 1]);
        chart3.axes[0].setTopText(ar3[ar3.length - 1] + " \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart3.axes[0].bands[1].setEndValue(ar3[ar3.length - 1]);
        if (ar[ar3.length - 1] > 2000 || ar3[ar3.length - 1] < 0) {
            document.getElementById('header3').style.color = "red";
        } else {
            document.getElementById('header3').style.color = "grey";
        }

        chart4.arrows[0].setValue(ar4[ar4.length - 1]);
        chart4.axes[0].setTopText(ar4[ar4.length - 1] + " \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart4.axes[0].bands[1].setEndValue(ar4[ar4.length - 1]);
        if (ar[ar4.length - 1] > 2000 || ar4[ar4.length - 1] < 0) {
            document.getElementById('header4').style.color = "red";
        } else {
            document.getElementById('header4').style.color = "grey";
        }

        chart5.arrows[0].setValue(ar5[ar5.length - 1]);
        chart5.axes[0].setTopText(ar5[ar5.length - 1] + " \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart5.axes[0].bands[1].setEndValue(ar5[ar5.length - 1]);
        if (ar[ar5.length - 1] > 2000 || ar5[ar5.length - 1] < 0) {
            document.getElementById('header5').style.color = "red";
        } else {
            document.getElementById('header5').style.color = "grey";
        }

        chart6.arrows[0].setValue(ar6[ar6.length - 1]);
        chart6.axes[0].setTopText(ar6[ar6.length - 1] + " \265\u03b5");
        // adjust darker band to new ar[ar.length-1]
        chart6.axes[0].bands[1].setEndValue(ar6[ar6.length - 1]);
        if (ar[ar6.length - 1] > 2000 || ar6[ar6.length - 1] < 0) {
            document.getElementById('header6').style.color = "red";
        } else {
            document.getElementById('header6').style.color = "grey";
        }
        var currentValue1 = ar[ar.length - 1];
        var currentValue2 = ar2[ar2.length - 1];
        var currentValue3 = ar3[ar3.length - 1];
        var currentValue4 = ar4[ar4.length - 1];
        var currentValue5 = ar5[ar5.length - 1];
        var currentValue6 = ar6[ar6.length - 1];
        valueArray1[getValueIndex] = currentValue1;
        valueArray2[getValueIndex] = currentValue2;
        valueArray3[getValueIndex] = currentValue3;
        valueArray4[getValueIndex] = currentValue4;
        valueArray5[getValueIndex] = currentValue5;
        valueArray6[getValueIndex] = currentValue6;
        if (getValueIndex < 12) {
            getValueIndex++;
        }
        if (getValueIndex == 12) {
            for (var j = 0; j < 12; j++) {
                valueArray2[j] = valueArray2[j + 1];
                valueArray3[j] = valueArray3[j + 1];
                valueArray4[j] = valueArray4[j + 1];
                valueArray5[j] = valueArray5[j + 1];
                valueArray6[j] = valueArray6[j + 1];
            }
            valueArray2[12] = currentValue2;
            valueArray3[12] = currentValue3;
            valueArray4[12] = currentValue4;
            valueArray5[12] = currentValue5;
            valueArray6[12] = currentValue6;
        }
        var config1 = {
            type: 'line',
            data: {
                labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
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
                labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
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
                labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
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
                labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
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
                labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
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
                labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
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
    }, 1000);
});