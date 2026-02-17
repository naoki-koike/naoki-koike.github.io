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
ctx.moveTo(120, 170);
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
ctx.beginPath();
ctx.arc(270, 350, 20, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(260, 340, 10, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(430, 360, 20, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(420, 350, 10, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();

//draw nose
ctx.beginPath();
ctx.moveTo(340, 375);
ctx.lineTo(360, 430);
ctx.lineTo(350, 450);
ctx.fillStyle = "#FFBF00";
ctx.fill();
ctx.stroke();

//draw ears
ctx.beginPath();
ctx.moveTo(140, 290);
ctx.lineTo(115, 310);
ctx.lineTo(120, 370);
ctx.lineTo(160, 390);
ctx.closePath();
ctx.fillStyle = "#FFBF00";
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.moveTo(610, 375);
ctx.lineTo(600, 430);
ctx.lineTo(550, 450);
ctx.closePath();
ctx.fillStyle = "#FFBF00";
ctx.fill();
ctx.stroke();

//draw mouth
ctx.beginPath();
ctx.moveTo(300, 555);
ctx.lineTo(360, 570);
ctx.lineTo(390, 560);
ctx.fillStyle = "#FFBF00";
ctx.stroke();
