'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');


function start(x, y) {

    
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.moveTo(10 + x,  0);
    ctx.lineTo(400, y + 10);
    ctx.stroke();



}

for (let i = 1; i < 35; i++) {
    start(i *10, i *10  );


function start2(j, k){
    ctx.strokeStyle = 'green'
    ctx.beginPath();
    ctx.moveTo(0, 10+k );
    ctx.lineTo(j +10, 400);
    ctx.stroke();



}
for (let i = 1; i < 35; i++){
    start2(i * 10, i * 10);
}