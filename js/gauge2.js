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
        $('#results').load('php/g2-1.php');
        $('#results').load('php/g2-2.php');
        $('#results').load('php/g2-3.php');
        $('#results').load('php/g2-4.php');
        $('#results').load('php/g2-5.php');
        $('#results').load('php/g2-6.php');
        chart.arrows[0].setValue(aar[aar.length - 1]);
        chart.axes[0].setTopText(aar[aar.length - 1] + " KPa");
        // adjust darker band to new ar[ar.length-1]
        chart.axes[0].bands[1].setEndValue(aar[aar.length - 1]);
        if (aar[aar.length - 1] > 2000 || aar[aar.length - 1] < 0) {
            document.getElementById('header1').style.color = "red";
        } else {
            document.getElementById('header1').style.color = "grey";
        }

        chart2.arrows[0].setValue(aar2[aar2.length - 1]);
        chart2.axes[0].setTopText(aar2[aar2.length - 1] + " KPa");
        // adjust darker band to new ar[ar.length-1]
        chart2.axes[0].bands[1].setEndValue(aar2[aar2.length - 1]);
        if (aar2[aar2.length - 1] > 2000 || aar2[aar2.length - 1] < 0) {
            document.getElementById('header2').style.color = "red";
        } else {
            document.getElementById('header2').style.color = "grey";
        }

        chart3.arrows[0].setValue(aar3[aar3.length - 1]);
        chart3.axes[0].setTopText(aar3[aar3.length - 1] + " KPa");
        // adjust darker band to new ar[ar.length-1]
        chart3.axes[0].bands[1].setEndValue(aar3[aar3.length - 1]);
        if (aar3[aar3.length - 1] > 2000 || aar3[aar3.length - 1] < 0) {
            document.getElementById('header3').style.color = "red";
        } else {
            document.getElementById('header3').style.color = "grey";
        }

        chart4.arrows[0].setValue(aar4[aar4.length - 1]);
        chart4.axes[0].setTopText(aar4[aar4.length - 1] + " KPa");
        // adjust darker band to new ar[ar.length-1]
        chart4.axes[0].bands[1].setEndValue(aar4[aar4.length - 1]);
        if (aar4[aar4.length - 1] > 2000 || aar4[aar4.length - 1] < 0) {
            document.getElementById('header4').style.color = "red";
        } else {
            document.getElementById('header4').style.color = "grey";
        }

        chart5.arrows[0].setValue(aar5[aar5.length - 1]);
        chart5.axes[0].setTopText(aar5[aar5.length - 1] + " KPa");
        // adjust darker band to new ar[ar.length-1]
        chart5.axes[0].bands[1].setEndValue(aar5[aar5.length - 1]);
        if (aar5[aar5.length - 1] > 2000 || aar5[aar5.length - 1] < 0) {
            document.getElementById('header5').style.color = "red";
        } else {
            document.getElementById('header5').style.color = "grey";
        }

        chart6.arrows[0].setValue(aar6[aar6.length - 1]);
        chart6.axes[0].setTopText(aar6[aar6.length - 1] + " KPa");
        // adjust darker band to new ar[ar.length-1]
        chart6.axes[0].bands[1].setEndValue(aar6[aar6.length - 1]);
        if (aar6[aar6.length - 1] > 2000 || aar6[aar6.length - 1] < 0) {
            document.getElementById('header6').style.color = "red";
        } else {
            document.getElementById('header6').style.color = "grey";
        }
        var currentValue1 = aar[aar.length - 1];
        var currentValue2 = aar2[aar2.length - 1];
        var currentValue3 = aar3[aar3.length - 1];
        var currentValue4 = aar4[aar4.length - 1];
        var currentValue5 = aar5[aar5.length - 1];
        var currentValue6 = aar6[aar6.length - 1];
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