var config = {
    type: 'line',
    data: {
        labels: ['0', '5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60'],
        datasets: [/*{
            label: 'GZ',
            fill: false,
        }, {
            label: 'AREA',
            fill: false
        }, */{
            label: 'GZC',
            fill: false,
        }, {
            label: 'AREAC',
            fill: false
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: '稳性计算数据'
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
                    display: true,
                    labelString: 'Heeling Angle (degree)'
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
    var ctx = document.getElementById("myChart").getContext('2d');
    window.myLine = new Chart(ctx, config);
};
