< script >
	//////
	//recursive code for continued fractions
	//////
	document.write("<b>CONTINUED FRACTIONS</b><br>");
var Result = "";

function CF() {
	var y = document.getElementById("y").value;
	var x = document.getElementById("x").value;
	var out = document.getElementById("output");
	Result = "";
	if (x > 0 && y > 0) {
		Result = genCF(y, x);
		out.innerHTML = "CF of " + y + "/" + x + " is " + Result;
	} else
		out.innerHTML = "Please input positive numbers";
}

function genCF(y, x) {
	var quotient = Math.floor(y / x);
	var remainder = y % x;
	Result += " " + quotient;
	if (remainder == 0)
		return Result;
	else
		return genCF(x, remainder);
} <
/script>

<
p style = "color: green" > Input a fraction y / x. < br > < /p> <
	input type = text id = "y" > /<input type=text id="x"> <
	input type = button onClick = CF() value = "Generate continued fractions" >
	<
	p id = "output"
style = "color:green;" > < /p>