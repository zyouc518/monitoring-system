var valueArray1 = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

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

window.onload = function () {
    var ctx1 = document.getElementById("myChart1").getContext('2d');
    window.myLine1 = new Chart(ctx1, config1);
    var ctx2 = document.getElementById("myChart2").getContext('2d');
    window.myLine2 = new Chart(ctx2, config1);
    var ctx3 = document.getElementById("myChart3").getContext('2d');
    window.myLine3 = new Chart(ctx3, config1);
    var ctx4 = document.getElementById("myChart4").getContext('2d');
    window.myLine4 = new Chart(ctx4, config1);
    var ctx5 = document.getElementById("myChart5").getContext('2d');
    window.myLine5 = new Chart(ctx5, config1);
    var ctx6 = document.getElementById("myChart6").getContext('2d');
    window.myLine6 = new Chart(ctx6, config1);
    chart.arrows[0].setValue(0);
    chart.axes[0].setTopText(0 + " kPa");
    // adjust darker band to new ar[ar.length-1]
    chart.axes[0].bands[1].setEndValue(0);
    chart2.arrows[0].setValue(0);
    chart2.axes[0].setTopText(0 + " kPa");
    // adjust darker band to new ar[ar.length-1]
    chart2.axes[0].bands[1].setEndValue(0);
    chart3.arrows[0].setValue(0);
    chart3.axes[0].setTopText(0 + " kPa");
    // adjust darker band to new ar[ar.length-1]
    chart3.axes[0].bands[1].setEndValue(0);
    chart4.arrows[0].setValue(0);
    chart4.axes[0].setTopText(0 + " kPa");
    // adjust darker band to new ar[ar.length-1]
    chart4.axes[0].bands[1].setEndValue(0);
    chart5.arrows[0].setValue(0);
    chart5.axes[0].setTopText(0 + " kPa");
    // adjust darker band to new ar[ar.length-1]
    chart5.axes[0].bands[1].setEndValue(0);
    chart6.arrows[0].setValue(0);
    chart6.axes[0].setTopText(0 + " kPa");
    // adjust darker band to new ar[ar.length-1]
    chart6.axes[0].bands[1].setEndValue(0);
};