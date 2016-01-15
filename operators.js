<html>
	<head>
		<script>
			var firstNumber= 5;
			var secondNumber= 12; 
			
			function add()
				{	
					
					alert ((firstNumber) + " + " + (secondNumber) + " = " + (firstNumber + secondNumber));
				}	
			
			function division()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " / " + (secondNumber) + " = " + (firstNumber / secondNumber));
				}
				
			function mod()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " % " + (secondNumber) + " = " + (firstNumber % secondNumber));
				}
				
			function multi()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " * " + (secondNumber) + " = " + (firstNumber * secondNumber));
				}
				
			function sub()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " - " + (secondNumber) + " = " + (firstNumber - secondNumber));
				}
				
			function neg()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ("Negation of " + (firstNumber) + " = " + (- firstNumber));
				}
			
			function equ()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " == " + (secondNumber) + " = " + (firstNumber == secondNumber));
				}
				
				function notEqu()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " != " + (secondNumber) + " = " + (firstNumber != secondNumber));
				}
				
				function greater()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " > " + (secondNumber) + " = " + (firstNumber > secondNumber));
				}
				
				function less()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " < " + (secondNumber) + " = " + (firstNumber < secondNumber));
				}
				
				function greaterEqu()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " <= " + (secondNumber) + " = " + (firstNumber <= secondNumber));
				}
				
				function lessEqu()
				{	
					var firstNumber= 5;
					var secondNumber= 12;
					alert ((firstNumber) + " >= " + (secondNumber) + " = " + (firstNumber >= secondNumber));
				}
		
		</script>
	</head>
	<body>
		<script>
			document.write("firstNumber is " + firstNumber + "<br><br>");
			document.write("secondNumber is " + secondNumber + "<br><br>");
			
		</script>
		
		<form>
			<input type="button" value="Addition" onClick="(add());">
			<input type="button" value="Division" onClick="(division());">
			<input type="button" value="Modulus" onClick="(mod());">
			<input type="button" value="Multiplication" onClick="(multi());">
			<input type="button" value="Subtraction" onClick="(sub());">
			<input type="button" value="Negation" onClick="(neg());">
			<br>
			<input type="button" value="Equals ==" onClick="(equ());">
			<input type="button" value="Not Equals !=" onClick="(notEqu());">
			<input type="button" value="Greater Than >" onClick="(greater());">
			<input type="button" value="Less Than <" onClick="(less());">
			<input type="button" value="Greater Than or Equal <=" onClick="(greaterEqu());">
			<input type="button" value="Less Than or Equal <=" onClick="(lessEqu());">
		</form>
	</body>
</html>
