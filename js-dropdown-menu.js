<script>
	var prevMenu = "";
	var timer = null;

	function hidePrevMenu()//This hides Prev Menu
	{
		document.getElementById(prevMenu).style.visibility = "hidden";
	}

	function startTimer()//This starts the timer, after you hover it makes the menu hidden after 3 sec
	{
		if(timer != null)
		{
			clearTimeout(timer);
		}
		timer = setTimeout("hidePrevMenu()",3000);
	}

	function openWindow(whichSite) //This opens a site from the Search menu
	{
		window.open(whichSite,"newWindow");
	}

	function showCurMenu(whichMenu)//This makes the menu visible
	{
		document.getElementById(whichMenu).style.visibility = "visible";
		if(prevMenu !="" && whichMenu != prevMenu)
		{
			hidePrevMenu();
		}
		prevMenu = whichMenu;
		clearTimeout(timer);
	}

	function changeColor(whichColor)//This changes the color when you hover over a selection
	{
		document.bgColor = whichColor;
	}
</script>

<style type="TEXT/CSS">
	.menu {font:12px arial, helvetica, sans-serif; background-color:#CCCCCC; layer-background-color:#CCCCCC}

	#topMenu {position:absolute; top:10px; width:100px}
	#fileMenu {position:absolute; top:25px; left:10px; width:100px; visibility:hidden}
	#searchMenu {position:absolute; top:25px; left:110px; width:100px; visibility:hidden}
	A {text-decoration:none; color:#000000}
	A:hover {background-color:#000099; color:#FFFFFF}
</style>

<script type="text/javascript" src="/d2l/common/math/MathML.js?v=10.3.0.791-65" ></script><script type="text/javascript">D2LMathML.DesktopInit('/d2l/common/mathjax/2.1/MathJax.js?config=MML_HTMLorMML&v=10.3.0.791-65','/d2l/common/mathjax/2.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML&v=10.3.0.791-65');</script></head>

<body bgcolor="white">
	<div id="topMenu" class="menu" style="position:absolute; left:10px">
	<a href="cssMenuComment.html?ou=33684" onMouseover="javascript:showCurMenu('fileMenu');" onMouseout="startTimer();">File</a>
	</div>
	<div id="topMenu" class="menu" style="position:absolute; left:110px">
	<a href="cssMenuComment.html?ou=33684" onMouseover="javascript:showCurMenu('searchMenu');" onMouseout="startTimer();">Search</a>
	</div>
	<DIV ID="fileMenu" CLASS="menu">
		<a href="javascript:hidePrevMenu();window.print();" onMouseout="startTimer();">Print</a><br>
		<a href="javascript:hidePrevMenu();window.close();" onMouseout="startTimer();">Close</a><br>
	</DIV>

	<DIV ID="searchMenu" CLASS="menu">
		<a href="javascript:hidePrevMenu();openWindow('http://www.ask.com');" onMouseout="startTimer();">Ask Jeeves</a><br>
		<a href="javascript:hidePrevMenu();openWindow('http://www.google.com');" onMouseout="startTimer();">Google</a><br>
		<a href="javascript:hidePrevMenu();openWindow('http://www.yahoo.com');" onMouseout="startTimer();">Yahoo</a><br>
		<a href="javascript:hidePrevMenu();openWindow('http://www.jccc.edu');" onMouseout="startTimer();">Johnson County Community College</a><br>
	</DIV>
</body>
