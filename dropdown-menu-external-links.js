<script>
	function displaySite(whichSite)
	{
		if(whichSite != "noselection")
		{
			//add a window.open command below that opens the whichSite parameter
			window.open(whichSite);
		}
	}
</script>
<script type="text/javascript" src="/d2l/common/math/MathML.js?v=10.3.0.791-65" ></script><script type="text/javascript">D2LMathML.DesktopInit('/d2l/common/mathjax/2.1/MathJax.js?config=MML_HTMLorMML&v=10.3.0.791-65','/d2l/common/mathjax/2.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML&v=10.3.0.791-65');</script></HEAD>

<BODY>
	
	<select name="whichSite" onChange="displaySite(this.value)">
		<option value="noselection">Select From My Top Website
		<option value="http://www.Google.com">Google.com</option>
		<option value="http://www.JCCC.edu">JCCC.edu</option>
		<option value="http://www.Facebook.com">Facebook.com</option>
		<option value="http://www.Pinterest.com">Pinterest.com</option>
		<option value="http://www.Pandora.com">Pandora.com</option>
	</select>




	</select>
</BODY>
