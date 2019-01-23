'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.
ctx.fillStyle = 'green';
ctx.fillRect(200, 150, 150, 150);


ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(200, 300);
ctx.stroke();

ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(350, 150);
ctx.stroke();

ctx.strokeStyle ='bluek';
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(350, 300);
ctx.stroke();

ctx.strokeStyle ='purple';
ctx.beginPath();
ctx.moveTo(350, 150);
ctx.lineTo(350, 300);
ctx.stroke();
