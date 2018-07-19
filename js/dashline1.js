var valueArray1 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var valueArray2 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var valueArray3 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var valueArray4 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var valueArray5 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var valueArray6 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
var getValueIndex = 0;

function getValue() {
    var currentValue1 = randomValue();
    var currentValue2 = randomValue2();
    var currentValue3 = randomValue3();
    var currentValue4 = randomValue4();
    var currentValue5 = randomValue5();
    var currentValue6 = randomValue6();
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
}

setInterval(getValue, 2000);


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
window.onload =function () {
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
}

setInterval(function () {
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
}, 2000);