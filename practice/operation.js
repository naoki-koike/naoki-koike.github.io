// This function prints text out to the terminal
function print(text) {
    const prompt = document.getElementById('prompt');
    const line = document.createElement('div');
    line.innerHTML = "<p class=problem>" + text + "</p>";
    prompt.appendChild(line);
    prompt.scrollTop = prompt.scrollHeight;
}
// This lets the user type input.
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = this.value.trim();
        this.value = '';
	processInput(input)
    }
});
 
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

function clear(){
    document.getElementById('prompt').innerHTML = '';
}

function processInput(input){
    if (Number(input) === a+b) {
	clear();
	a = Math.floor(Math.random() * 100);
	b = Math.floor(Math.random() * 100);
	problem();  
    }else{
	print("WRONG, Try Again: ");
    }
}

function problem(){
	print(`${a} + ${b} = `);
}

problem();