function Calc1() {
    var M = document.getElementById("mass").value;
    var rat = document.getElementById("rat").value;
    var degree = document.getElementById("degree").value;
    var rho = 2.38,
        L = 36,
        DWT = 400000,
        pi = 3.1415926;
    var condition = document.getElementById("condition").value;
    switch (condition) {
        case "349999ARRIVE":
            var gz0 = new Array(-0.007, 1.066, 2.159, 3.297, 4.395, 5.177, 5.692, 5.984, 6.058, 5.936, 5.652,
                5.237,
                4.721, 4.128, 3.473, 2.772);
            var s0 = new Array(0.00, 4.62e-2, 0.187, 4.25e-1, 7.61e-1, 1.18, 1.65, 2.16, 2.69, 3.210751,
                3.716373,
                4.191495, 4.625995, 5.012105, 5.343761, 5.616251);
            break;
        case "349999DEPARTURE":
            var gz0 = new Array(-0.003, 1.060, 2.145, 3.272, 4.344, 5.081, 5.564, 5.836, 5.902, 5.784, 5.501,
                5.090, 4.581, 3.994, 3.348, 2.656);
            var s0 = new Array(0.00, 4.61e-2, 0.185965, 0.422326, 0.754637, 1.16588, 1.630355, 2.127774,
                2.639941, 3.149839, 3.64224, 4.104359, 4.526336, 4.900491, 5.220846, 5.48282);
            break;
        case "FULLARRIVE":
            var gz0 = new Array(-0.008, 0.919, 1.866, 2.809, 3.420, 3.770, 3.939, 3.997, 3.972, 3.829, 3.563, 3.197, 2.755, 2.256, 1.713, 1.139);
            var s0 = new Array(0, 3.97e-2, 0.161268, 0.365254, 0.637045, 0.950768, 1.287137, 1.63341, 1.981123, 2.321506, 2.644043, 2.939003, 3.198709, 3.417355, 3.590535, 3.714977);
            break;
        case "FULLDEPARTURE":
            var gz0 = new Array(-0.005, 0.922, 1.869, 2.811, 3.423, 3.773, 3.941, 4.000, 3.974, 3.831, 3.566, 3.201, 2.760, 2.261, 1.719, 1.145);
            var s0 = new Array(0, 4e-2, 0.161792, 0.365996, 0.638005, 0.95199, 1.288576, 1.635068, 1.982999, 2.323557, 2.646312, 2.941578, 3.201676, 3.420758, 3.594418, 3.719384);
            break;
        case "W349999ARRIVE":
            var gz0 = new Array(-0.044, 1.031, 2.127, 3.268, 4.375, 5.172, 5.699, 5.999, 6.077, 5.956, 5.671, 5.257, 4.742, 4.149, 3.494, 2.793);
            var s0 = new Array(0, 4.31e-2, 0.18086, 0.416261, 0.74975, 1.166316, 1.640653, 2.151075, 2.677989, 3.203028, 3.710352, 4.187176, 4.623465, 5.011408, 5.344897, 5.619219);
            break;
        case "W349999DEPARTURE":
            var gz0 = new Array(-0.052, 1.006, 2.085, 3.208, 4.278, 5.011, 5.490, 5.760, 5.822, 5.702, 5.417, 5.004, 4.493, 3.906, 3.259, 2.567);
            var s0 = new Array(0, 4.16e-2, 0.176496, 0.407447, 0.734085, 1.139395, 1.597587, 2.088461, 2.593821, 3.09665, 3.581808, 4.06351, 4.450895, 4.81737, 5.130002, 5.38421);
            break;
        case "WFULLARRIVE":
            var gz0 = new Array(-0.048, 0.882, 1.833, 2.781, 3.401, 3.759, 3.934, 3.997, 3.977, 3.837, 3.576, 3.213, 2.775, 2.278, 1.738, 1.166);
            var s0 = new Array(0, 3.64e-2, 0.154854, 0.356178, 0.625919, 0.938333, 1.274003, 1.620058, 1.66799, 2.30894, 2.632393, 2.928619, 3.189895, 3.410373, 3.585604, 3.712315);
            break;
        case "WFULLDEPARTURE":
            var gz0 = new Array(-0.045, 0.881, 1.828, 2.770, 3.382, 3.732, 3.901, 3.960, 3.936, 3.794, 3.531, 3.168, 2.729, 2.233, 1.694, 1.122);
            var s0 = new Array(0, 3.65e-2, 0.15468, 0.355305, 0.623737, 0.934144, 1.267196, 1.610197, 1.954725, 2.29201, 2.611623, 2.903922, 3.161227, 3.377736, 3.549083, 3.671954);
        default:
            break;
    }
    var gz1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var gz2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var b = (45.165 + Math.sqrt(45.165 * 45.165 + 4 * 1.833 * M / (rho * L))) / (2 * 1.833);
    var h = 1.833 * b - 45.165;
    var dh = 0.2 * h;
    var h2 = h - dh;
    var b2 = (h2 + 45.165) / 1.833;
    var dm = (b + b2) * dh * L * rho / 2;
    var dGM = dm * dh * 7 / DWT;
    var thea = 0,
        thearad = 0;
    for (let i = 0; i < gz1.length; i++) {
        thea = i * 5;
        thearad = thea * pi / 180;
        gz1[i] = gz0[i] - dGM * Math.cos(thearad);
    }
    for (let i = 1; i < 16; i++) {
        thea = i * 5;
        s1[i] = s1[i - 1] + pi * (gz1[i - 1] + gz1[i]) / 72;
    }
    var ldegree = 5 * parseInt(degree / 5);
    var hdegree = ldegree + 5;
    var fitdegree = (gz1[hdegree / 5] - gz1[ldegree / 5]) / 5 * (degree - ldegree) + gz1[ldegree / 5];
    var stddegree = (gz0[hdegree / 5] - gz0[ldegree / 5]) / 5 * (degree - ldegree) + gz0[ldegree / 5];
    var sdegree = (s1[hdegree / 5] - s1[ldegree / 5]) / 5 * (degree - ldegree) + s1[ldegree / 5];
    var stds = (s0[hdegree / 5] - s0[ldegree / 5]) / 5 * (degree - ldegree) + s0[ldegree / 5];
    //document.getElementById("chartdiv2").innerHTML = "复原力臂：" + fitdegree.toFixed(6) +
    //    "<br>静稳性曲线围成面积：" + sdegree.toFixed(6) + "<br>是否达到稳性要求：";

    //"复原力臂：<br>静稳性曲线围城面积：<br>是否达到稳性要求："
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65",
                "70", "75"
            ],
            datasets: [{
                    label: 'GZ',
                    data: gz0,
                    borderColor: "#ff6384",
                    fill: false
                },
                {
                    label: 'AREA',
                    fill: false,
                    borderColor: "#3e95cd",
                    data: s0
                }, {
                    label: 'GZC1',
                    fill: false,
                    borderColor: "#579101",
                    data: gz1
                }, {
                    label: 'AREAC1',
                    fill: false,
                    borderColor: "#ffce56",
                    data: s1
                }
            ]
        },
        options: {
            responsive: true,
            title: {
                display: true,
                text: '稳性计算数据'
            },
            tooltips: {
                mode: 'index',
                intersect: false
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
    });
    var palette = document.getElementById("palette");
    var rows = palette.getElementsByClassName("divTableRow");
    var counter_row = 0,
        counter_col = 0;
    for (var row of rows) {
        counter_col = 0;
        var cells = row.getElementsByClassName("divTableCell");
        for (var cell of cells) {
            if (counter_row == 1 && counter_col == 2) {
                cell.innerText = stddegree.toFixed(6);
            } else if (counter_row == 1 && counter_col == 3) {
                cell.innerText = fitdegree.toFixed(6);
            } else if (counter_row == 2 && counter_col == 2) {
                cell.innerText = stds.toFixed(6);
            } else if (counter_row == 2 && counter_col == 3) {
                cell.innerText = sdegree.toFixed(6);
            } else if (counter_row == 3 && counter_col == 2) {
                cell.innerText = s0[6].toFixed(6);
            } else if (counter_row == 3 && counter_col == 3) {
                cell.innerText = s1[6].toFixed(6);
            } else if (counter_row == 4 && counter_col == 2) {
                cell.innerText = s0[8].toFixed(6);
            } else if (counter_row == 4 && counter_col == 3) {
                cell.innerText = s1[8].toFixed(6);
            } else if (counter_row == 5 && counter_col == 2) {
                cell.innerText = (s0[8] - s0[6]).toFixed(6);
            } else if (counter_row == 5 && counter_col == 3) {
                cell.innerText = (s1[8] - s1[6]).toFixed(6);
            }
            counter_col++;
        }
        counter_row++;
    }
}

function Calc2() {
    var M = document.getElementById("mass").value;
    var rat = document.getElementById("rat").value;
    var degree = document.getElementById("degree").value;
    var rho = 2.38,
        L = 36,
        DWT = 400000,
        pi = 3.1415926;
    var condition = document.getElementById("condition").value;
    switch (condition) {
        case "349999ARRIVE":
            var gz0 = new Array(-0.007, 1.066, 2.159, 3.297, 4.395, 5.177, 5.692, 5.984, 6.058, 5.936, 5.652,
                5.237,
                4.721, 4.128, 3.473, 2.772);
            var s0 = new Array(0.00, 4.62e-2, 0.187, 4.25e-1, 7.61e-1, 1.18, 1.65, 2.16, 2.69, 3.210751,
                3.716373,
                4.191495, 4.625995, 5.012105, 5.343761, 5.616251);
            break;
        case "349999DEPARTURE":
            var gz0 = new Array(-0.003, 1.060, 2.145, 3.272, 4.344, 5.081, 5.564, 5.836, 5.902, 5.784, 5.501,
                5.090, 4.581, 3.994, 3.348, 2.656);
            var s0 = new Array(0.00, 4.61e-2, 0.185965, 0.422326, 0.754637, 1.16588, 1.630355, 2.127774,
                2.639941, 3.149839, 3.64224, 4.104359, 4.526336, 4.900491, 5.220846, 5.48282);
            break;
        case "FULLARRIVE":
            var gz0 = new Array(-0.008, 0.919, 1.866, 2.809, 3.420, 3.770, 3.939, 3.997, 3.972, 3.829, 3.563, 3.197, 2.755, 2.256, 1.713, 1.139);
            var s0 = new Array(0, 3.97e-2, 0.161268, 0.365254, 0.637045, 0.950768, 1.287137, 1.63341, 1.981123, 2.321506, 2.644043, 2.939003, 3.198709, 3.417355, 3.590535, 3.714977);
            break;
        case "FULLDEPARTURE":
            var gz0 = new Array(-0.005, 0.922, 1.869, 2.811, 3.423, 3.773, 3.941, 4.000, 3.974, 3.831, 3.566, 3.201, 2.760, 2.261, 1.719, 1.145);
            var s0 = new Array(0, 4e-2, 0.161792, 0.365996, 0.638005, 0.95199, 1.288576, 1.635068, 1.982999, 2.323557, 2.646312, 2.941578, 3.201676, 3.420758, 3.594418, 3.719384);
            break;
        case "W349999ARRIVE":
            var gz0 = new Array(-0.044, 1.031, 2.127, 3.268, 4.375, 5.172, 5.699, 5.999, 6.077, 5.956, 5.671, 5.257, 4.742, 4.149, 3.494, 2.793);
            var s0 = new Array(0, 4.31e-2, 0.18086, 0.416261, 0.74975, 1.166316, 1.640653, 2.151075, 2.677989, 3.203028, 3.710352, 4.187176, 4.623465, 5.011408, 5.344897, 5.619219);
            break;
        case "W349999DEPARTURE":
            var gz0 = new Array(-0.052, 1.006, 2.085, 3.208, 4.278, 5.011, 5.490, 5.760, 5.822, 5.702, 5.417, 5.004, 4.493, 3.906, 3.259, 2.567);
            var s0 = new Array(0, 4.16e-2, 0.176496, 0.407447, 0.734085, 1.139395, 1.597587, 2.088461, 2.593821, 3.09665, 3.581808, 4.06351, 4.450895, 4.81737, 5.130002, 5.38421);
            break;
        case "WFULLARRIVE":
            var gz0 = new Array(-0.048, 0.882, 1.833, 2.781, 3.401, 3.759, 3.934, 3.997, 3.977, 3.837, 3.576, 3.213, 2.775, 2.278, 1.738, 1.166);
            var s0 = new Array(0, 3.64e-2, 0.154854, 0.356178, 0.625919, 0.938333, 1.274003, 1.620058, 1.66799, 2.30894, 2.632393, 2.928619, 3.189895, 3.410373, 3.585604, 3.712315);
            break;
        case "WFULLDEPARTURE":
            var gz0 = new Array(-0.045, 0.881, 1.828, 2.770, 3.382, 3.732, 3.901, 3.960, 3.936, 3.794, 3.531, 3.168, 2.729, 2.233, 1.694, 1.122);
            var s0 = new Array(0, 3.65e-2, 0.15468, 0.355305, 0.623737, 0.934144, 1.267196, 1.610197, 1.954725, 2.29201, 2.611623, 2.903922, 3.161227, 3.377736, 3.549083, 3.671954);
        default:
            break;
    }
    var gz1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s1 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var gz2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var s2 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    var b = (45.165 + Math.sqrt(45.165 * 45.165 + 4 * 1.833 * M / (rho * L))) / (2 * 1.833);
    var h = 1.833 * b - 45.165;
    var dh = 0.2 * h;
    var h2 = h - dh;
    var b2 = (h2 + 45.165) / 1.833;
    var dm = (b + b2) * dh * L * rho / 2;
    var dGM = dm * dh * 7 / DWT;
    var thea = 0,
        thearad = 0;
    for (let i = 0; i < gz1.length; i++) {
        thea = i * 5;
        thearad = thea * pi / 180;
        gz1[i] = gz0[i] - dGM * Math.cos(thearad);
    }
    for (let i = 1; i < 16; i++) {
        thea = i * 5;
        s1[i] = s1[i - 1] + pi * (gz1[i - 1] + gz1[i]) / 72
    }
    var mwater = rat * M;
    var dwater = 0.1 * h;
    for (let i = 1; i < 16; i++) {
        thea = i * 5;
        thearad = thea * pi / 180;
        var tantrad = Math.tan(thearad);
        var costrad = Math.cos(thearad);
        var mom = mwater * (3 * b2 - 3 * dwater * tantrad - 2 * Math.sqrt((2 * b2 * dwater) / tantrad) * (1 -
            tantrad * tantrad)) * costrad / 6;
        var dGZ = mom * Math.sin(thearad) / 400000;
        gz2[i] = gz1[i] - dGZ;
    }
    gz2[0] = gz1[0];
    for (let i = 1; i < 16; i++) {
        thea = i * 5;
        s2[i] = s2[i - 1] + pi * (gz2[i - 1] + gz2[i]) / 72
    }

    var ldegree = 5 * parseInt(degree / 5);
    var hdegree = ldegree + 5;
    var fitdegree = (gz2[hdegree / 5] - gz2[ldegree / 5]) / 5 * (degree - ldegree) + gz2[ldegree / 5];
    var stddegree = (gz0[hdegree / 5] - gz0[ldegree / 5]) / 5 * (degree - ldegree) + gz0[ldegree / 5];
    var sdegree = (s2[hdegree / 5] - s2[ldegree / 5]) / 5 * (degree - ldegree) + s2[ldegree / 5];
    var stds = (s0[hdegree / 5] - s0[ldegree / 5]) / 5 * (degree - ldegree) + s0[ldegree / 5];
    //document.getElementById("chartdiv2").innerHTML = "复原力臂：" + fitdegree.toFixed(6) +
    //    "<br>静稳性曲线围成面积：" + sdegree.toFixed(6) + "<br>是否达到稳性要求：";
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["0", "5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65",
                "70", "75"
            ],
            datasets: [{
                    label: 'GZ',
                    data: gz0,
                    borderColor: "#ff6384",
                    fill: false
                },
                {
                    label: 'AREA',
                    fill: false,
                    borderColor: "#3e95cd",
                    data: s0
                }, {
                    label: 'GZC2',
                    fill: false,
                    borderColor: "#579101",
                    data: gz2
                }, {
                    label: 'AREAC2',
                    fill: false,
                    borderColor: "#ffce56",
                    data: s2
                }
            ]
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
    });
    var palette = document.getElementById("palette");
    var rows = palette.getElementsByClassName("divTableRow");
    var counter_row = 0,
        counter_col = 0;
    for (var row of rows) {
        counter_col = 0;
        var cells = row.getElementsByClassName("divTableCell");
        for (var cell of cells) {
            if (counter_row == 1 && counter_col == 2) {
                cell.innerText = stddegree.toFixed(6);
            } else if (counter_row == 1 && counter_col == 3) {
                cell.innerText = fitdegree.toFixed(6);
            } else if (counter_row == 2 && counter_col == 2) {
                cell.innerText = stds.toFixed(6);
            } else if (counter_row == 2 && counter_col == 3) {
                cell.innerText = sdegree.toFixed(6);
            } else if (counter_row == 3 && counter_col == 2) {
                cell.innerText = s0[6].toFixed(6);
            } else if (counter_row == 3 && counter_col == 3) {
                cell.innerText = s2[6].toFixed(6);
            } else if (counter_row == 4 && counter_col == 2) {
                cell.innerText = s0[8].toFixed(6);
            } else if (counter_row == 4 && counter_col == 3) {
                cell.innerText = s2[8].toFixed(6);
            } else if (counter_row == 5 && counter_col == 2) {
                cell.innerText = (s0[8] - s0[6]).toFixed(6);
            } else if (counter_row == 5 && counter_col == 3) {
                cell.innerText = (s2[8] - s2[6]).toFixed(6);
            }
            counter_col++;
        }
        counter_row++;
    }
}