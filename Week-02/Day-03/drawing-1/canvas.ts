'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(400, 0);
ctx.lineTo(400, 600);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(0, 300);
ctx.lineTo(800, 300);
ctx.stroke();

