console.log("script response: OK")


var name1 = document.getElementById("inpt1").value;
var name2 = document.getElementById("inpt2").value;
var output = document.getElementById("word-rslt");
var wait = document.getElementById("wait");

document.getElementById("hit-btn").addEventListener("click", wordShow);

function wordShow(){
    console.log("word show called");
    wait.style.display = "inline-block";
    wait.innerHTML = `Wait....`;
    fetch("https://love-calculator.p.rapidapi.com/getPercentage?fname="+document.getElementById("inpt1").value+"&sname="+document.getElementById("inpt2").value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "love-calculator.p.rapidapi.com",
		"x-rapidapi-key": "2dd3ba16fbmsh1580f71d6b00bc0p12927ejsn408e1da834a2"
	}
})
.then(res => res.json())
.then(data => {
    console.log(data);
    wait.style.display = "none";
    output.innerHTML = `<h1>Love Perentage: ${data.percentage}% </h1><br><h1 class="verdict">Verdict: "${data.result}"</h1>
    <h4 class="nb">N.B: This calculations are only for fun purposes 😄</h4>
    `
})
.catch(err => {
    console.log(err);
    wait.style.display = "inline-block";
    wait.innerHTML = `Error`;
});
}
