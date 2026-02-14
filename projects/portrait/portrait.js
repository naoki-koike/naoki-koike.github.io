	//draw rect	
//		ctx.fillStyle = "green";
//		ctx.fillRect(100, 100, 200, 300);
	//draw circle
//		ctx.fillStyle = "red";
//		ctx.beginPath();
//		ctx.arc(400, 500, 100, 500, Math.PI**2);
//		ctx.fill();
	//draw elipse
//		ctx.fillStyle = "black";
//		ctx.beginPath();
//		ctx.ellipse(300, 700, 200, 50, 0, Math.PI/6, Math.PI**2);
//		ctx.fill();	
	//draw triangle		
//		ctx.beginPath();
//		ctx.moveTo(700, 50);
//		ctx.lineTo(750, 150);
//		ctx.lineTo(650, 150);
//		ctx.stroke();
//		ctx.fill();


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");     

//draw outline
ctx.beginPath();
ctx.moveTo(150, 350);
ctx.lineTo(200, 200);
ctx.lineTo(550 ,330);
ctx.lineTo(550 ,450);
ctx.lineTo(500 ,550);
ctx.lineTo(450 ,600);
ctx.lineTo(370 ,650);
ctx.lineTo(300 ,650);
ctx.lineTo(240 ,600);
ctx.lineTo(180 ,500);
ctx.fillStyle = "#FFBF00";
ctx.fill();

//draw head
ctx.beginPath();
ctx.moveTo(130, 170);
ctx.lineTo(250, 80);
ctx.lineTo(150, 350);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.ellipse(400, 200, 250, 150, 0, Math.PI, Math.PI*2);
ctx.fillStyle = "black";
ctx.fill();	

ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(550, 330);
ctx.lineTo(550, 150);
ctx.fillStyle = "black";
ctx.fill();

ctx.fillStyle = "black";
ctx.fillRect(550, 200, 100, 130);

ctx.beginPath();
ctx.moveTo(550, 330);
ctx.lineTo(550, 450);
ctx.lineTo(650, 330);
ctx.fill();
//draw eyes

//draw nose

//draw ears

//mouth
