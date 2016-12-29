var canvas = document.getElementById('canvas');
var canvasHeight = canvas.height = window.innerHeight;
var canvasWidth = canvas.width = window.innerWidth;
var ctx = canvas.getContext('2d');

var imgSrc = {
	1: './res/1.jpg',
	2: './res/2.jpg',
	3: './res/3.jpg',
	4: './res/4.jpg',
	5: './res/5.jpg',
	6: './res/6.jpg',
	'6_5': './res/6_5.jpg',
	7: './res/7.jpg',
	'7_5': './res/7_5.jpg',
	8: './res/8.jpg',
	'8_5': './res/8_5.jpg',
	9: './res/9.jpg',
	'9_5': './res/9_5.jpg',
	10: './res/10.jpg',
	'10_5': './res/10_5.jpg',
	11: './res/11.jpg',
	'11_5': './res/11_5.jpg',
	12: './res/12.jpg',
	'12_5': './res/12_5.jpg',
	13: './res/13.jpg',
	'13_5': './res/13_5.jpg',
	14: './res/14.jpg',
	15: './res/15.jpg',  
};
 
var btn = document.getElementById("btn");
var startScroll = false;
var count=0;
var speed=0.02;

var img = new Image();
img.src =  imgSrc[1]; // 设置图片源地址
img.onload = function(){
    ctx.drawImage(img, 0, 0, img.width, img.height,0,0, canvasWidth, canvasHeight);
} 

var img1 = new Image();
img1.src =  imgSrc[2]; // 设置图片源地址
img1.onload = function(){
    ctx.drawImage(img1, 0, 0, img1.width, img1.height,0,0, canvasWidth, canvasHeight);
} 

btn.addEventListener("touchstart", function(){
	startScroll = true;
})

document.addEventListener("touchend", function(){
	startScroll = false;
})

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function step(){
	if(startScroll){

		console.log('tapping');
		ctx.clearRect(0,0, canvasWidth, canvasHeight);
    	ctx.drawImage(img1, 1379/(1+speed*count), 103/(1+speed*count), img1.width*(0.2+speed*count), img1.height*(0.2+speed*count), canvasWidth*(speed*count)/(1+speed*count), 0, canvasWidth, canvasHeight);
   		//ctx.drawImage(img, 0, 0, img.width*(1+speed*count), img.height*(1+speed*count), img.width*(speed*count)/(1+speed*count), 0, canvasWidth, canvasHeight);
   		//ctx.drawImage(img, 0, 0, img.width, img.height,canvasWidth*(speed*count)/(1+speed*count),0, canvasWidth, canvasHeight-canvasHeight*(speed*count)/(1+speed*count));
   		count++;
	}
	requestAnimationFrame(step);
}

step();