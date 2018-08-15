$(document).ready(function () { //���ļ����Կ��õڶ���������������
	$.ajaxSetup({
		cache: false
	});



	setInterval(function () {

		$('#results').load('php/g1.php');

		var press1 = 0;
		var press1a = 0;
		for (var k = 0; k < 60; k++) {
			if (ar[k] != null) {
				press1 = 1;
			}
			if (ar[k] > 100) {
				press1a = 1;
			}
		}
		if (press1 == 0 || press1a == 1) {
			document.getElementById('header1').className = "main";
		} else {
			document.getElementById('header1').className = "normal";
		}



		var press2 = 0;
		var press2a = 0;
		for (var k = 0; k < 60; k++) {
			if (ar2[k] != null) {
				press2 = 1;
			}
			if (ar2[k] > 100) {
				press2a = 1;
			}
			//if (ar2[k]>=64)������䣬�ǿ��е�
			//{press2++;}
		}
		if (press2 == 0 || press2a == 1) {
			document.getElementById('header2').className = "main";
		} else {
			document.getElementById('header2').className = "normal";
		}

		var press3 = 0;
		var press3a = 0;
		for (var k = 0; k < 60; k++) {
			if (ar3[k] != null) {
				press3 = 1;
			}
			if (ar3[k] > 100) {
				press3a = 1;
			}
		}
		if (press3 == 0 || press3a == 1) {
			document.getElementById('header3').className = "main";
		} else {
			document.getElementById('header3').className = "normal";
		}


		var press4 = 0;
		var press4a = 0;
		for (var k = 0; k < 60; k++) {
			if (ar4[k] != null) {
				press4 = 1;
			}
			if (ar4[k] > 100) {
				press4a = 1;
			}
		}
		if (press4 == 0 || press4a == 1) {
			document.getElementById('header4').className = "main";
		} else {
			document.getElementById('header4').className = "normal";
		}

		var press5 = 0;
		var press5a = 0;
		for (var k = 0; k < 60; k++) {
			if (ar5[k] != null) {
				press5 = 1;
			}
			if (ar5[k] > 100) {
				press5a = 1;
			}
		}
		if (press5 == 0 || press5a == 1) {
			document.getElementById('header5').className = "main";
		} else {
			document.getElementById('header5').className = "normal";
		}

		var press6 = 0;
		var press6a = 0;
		for (var k = 0; k < 60; k++) {
			if (ar6[k] != null) {
				press6 = 1;
			}
			if (ar6[k] > 100) {
				press6a = 1;
			}
		}
		if (press6 == 0 || press6a == 1) {
			document.getElementById('header6').className = "main";
		} else {
			document.getElementById('header6').className = "normal";
		}

	}, 1000);
});