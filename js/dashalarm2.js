$(document).ready(function () {  //本文件的调试放在第三和第六个传感器，如果把它们设置成2则报警，2000则不报警。
    $.ajaxSetup({
        cache: false
    }); 



        setInterval(function () {

        $('#results').load('php/g2-1.php');
        $('#results').load('php/g2-2.php');
        $('#results').load('php/g2-3.php');
        $('#results').load('php/g2-4.php');
        $('#results').load('php/g2-5.php');
        $('#results').load('php/g2-6.php');

	var press1=0; 
	var press1a=0;
	for (var k=0;k<300;k++)
	{
		if (aar[k]!=null)
		{
			press1=1;
		}
		if (aar[k]>2000)
		{
			press1a=1;
		}
	}
	if (press1==0 || press1a==1)
	{
		document.getElementById('header1').className = "main";	
	}


	var press2=0; 
	var press2a=0;
	for (var k=0;k<300;k++)
	{
		if (aar2[k]!=null)
		{
			press2=1;
		}
		if (aar2[k]>2000)
		{
			press2a=1;
		}
		//if (aar2[k]>=64)调试语句，是可行的
		//{press2++;}
	}
	if (press1==0 || press2a==1)
	{
		document.getElementById('header2').className = "main";	
	}

	var press3=0; 
	var press3a=0;
	for (var k=0;k<300;k++)
	{
		if (aar3[k]!=null)
		{
			press3=1;
		}
		if (aar3[k]>2000)
		{
			press3a=1;
		}
	}
	if (press3==0 || press3a==1)
	{
		document.getElementById('header3').className = "main";	
	}


	var press4=0; 
	var press4a=0;
	for (var k=0;k<300;k++)
	{
		if (aar4[k]!=null)
		{
			press4=1;
		}
		if (aar4[k]>2000)
		{
			press4a=1;
		}
	}
	if (press4==0 || press4a==1)
	{
		document.getElementById('header4').className = "main";	
	}

	var press5=0; 
	var press5a=0;
	for (var k=0;k<300;k++)
	{
		if (aar5[k]!=null)
		{
			press5=1;
		}
		if (aar5[k]>2000)
		{
			press5a=1;
		}
	}
	if (press5==0 || press5a==1)
	{
		document.getElementById('header5').className = "main";	
	}

	var press6=0; 
	var press6a=0;
	for (var k=0;k<300;k++)
	{
		if (aar6[k]!=null)
		{
			press6=1;
		}
		if (aar6[k]>2000) //(aar6[k]>2)
		{
			press6a=1;
		}
	}
	if (press6==0 || press6a==1)
	{
		document.getElementById('header6').className = "main";	
	}

    }, 1000);
});