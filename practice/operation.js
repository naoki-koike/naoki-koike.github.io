// This function prints text out to the terminal
function print(place, text) {
	const prompt = document.getElementById(place);
	const line = document.createElement('div');
	line.innerHTML = "<p>" + text + "</p>";
	prompt.appendChild(line);
}
// This function prints text out to the terminal
function clean(place){
	const line = document.getElementById(place);
	line.innerHTML= '';
}
// This lets the user type input.
document.getElementById('user-input').addEventListener('keypress', function(e) {
 	if (e.key === 'Enter') {
        	const input = this.value.trim();
        	this.value = '';
		processInput(input)
	}
});

// Timer
function timer(){
	let t = 0
	print("time", "Current Time: <span class='number'>" + t + "</span>");
	const timerId = setInterval(() => {
		t += 1;
		clean("time");
		print("time", "Current Time: <span class='number'>" + t + "</span>");
	}, 1000);
}

 
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = 0

function processInput(input){
	if (Number(input) === a+b) {
		clean("prompt");
		a = Math.floor(Math.random() * 100);
		b = Math.floor(Math.random() * 100);
		c+=1
		problem()
		clean("count")
		print("count", "Questions Answered Correctly: <span class='number'> " + c + "</span>");
	}else{
		print("prompt", "WRONG, Try Again: ");
	}
}

function problem(){
	print("prompt", `${a} + ${b} = `);
}
timer();
problem()
print("count", "Questions Answered Correctly: <span class='number'>" + c + "</span>");