$(document).ready(function () { //���ļ��ĵ��Է��ڵ�һ����������������������ó�2�򱨾���2000�򲻱�����
	$.ajaxSetup({
		cache: false
	});



	setInterval(function () {
		var ajax = new XMLHttpRequest();
		var method = "GET";
		var url = "php/g3.php";
		var asynchronous = true;

		ajax.open(method, url, asynchronous);
		//sending ajax request
		ajax.send();

		//receiving response from g1.php
		ajax.onreadystatechange = function () {
			// if (this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.responseText);
			var aaar = new Array();
			var aaar2 = new Array();
			var aaar3 = new Array();
			var aaar4 = new Array();
			var aaar5 = new Array();
			var aaar6 = new Array();
			for (let i = 0; i < 60; i++) {
				aaar.push(res[i].SAU);
				aaar2.push(res[i].SAM);
				aaar3.push(res[i].SAL);
				aaar4.push(res[i].SFU);
				aaar5.push(res[i].SFM);
				aaar6.push(res[i].SFL);
			}

			var press1 = 0;
			var press1a = 0;
			for (var k = 0; k < 60; k++) {
				if (aaar[k] != null) {
					press1 = 1;
				}
				if (aaar[k] > 2000 || aaar[k]<0) //(aaar[k]>2)
				{
					press1a = 1;
				}
				//if (aaar[k]>2)
				//{press1a=press1a+1;}
			}
			if (press1 == 0 || press1a == 1) //if (press1a==60)
			{
				document.getElementById('header1').className = "main";
			} else {
				document.getElementById('header1').className = "normal";
			}


			var press2 = 0;
			var press2a = 0;
			for (var k = 0; k < 60; k++) {
				if (aaar2[k] != null) {
					press2 = 1;
				}
				if (aaar2[k] > 2000 || aaar2[k]<0) {
					press2a = 1;
				}
				//if (aaar2[k]>=64)������䣬�ǿ��е�
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
				if (aaar3[k] != null) {
					press3 = 1;
				}
				if (aaar3[k] > 2000 || aaar3[k]<0) {
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
				if (aaar4[k] != null) {
					press4 = 1;
				}
				if (aaar4[k] > 2000 || aaar4[k]<0) {
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
				if (aaar5[k] != null) {
					press5 = 1;
				}
				if (aaar5[k] > 2000 || aaar5[k]<0) {
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
				if (aaar6[k] != null) {
					press6 = 1;
				}
				if (aaar6[k] > 2000 || aaar6[k]<0) //(aar6[k]>2)
				{
					press6a = 1;
				}
			}
			if (press6 == 0 || press6a == 1) {
				document.getElementById('header6').className = "main";
			} else {
				document.getElementById('header6').className = "normal";
			}
		};
	}, 1000);
});