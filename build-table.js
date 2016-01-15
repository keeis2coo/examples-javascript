
//script
function buildTable()
				{
					document.write("<table border=3>");
					for(row = 1; row < 5; row++)
					{
						document.write("<tr>");
						for(col = 1; col < 5; col++)
							{
							document.write("<td>");
							document.write(col * row);
							document.write("</td>");
							}
						document.write("</tr>");
					}
					document.write("</table>");
				}
//this goes in the body

<div id="button">
			<center><input type="button" value="Build Table" onclick="buildTable();" class="button" > </center>
			</div>
