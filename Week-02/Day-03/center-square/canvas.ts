'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(395, 295);
ctx.lineTo(395, 305);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(395, 305);
ctx.lineTo(405, 305);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(405, 305);
ctx.lineTo(405, 295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(405, 295);
ctx.lineTo(395, 295);
ctx.stroke();