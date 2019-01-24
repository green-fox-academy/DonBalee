'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(200, 400);
ctx.stroke();

//ctx.beginPath();
//ctx.moveTo(0, 200);
//ctx.lineTo(400, 200);
//ctx.stroke();


function start1(x, y){

    ctx.beginPath();
    ctx.moveTo(10 + x, 200);
    ctx.lineTo(200, 190 -y);
    ctx.stroke();
}
for (let i = 1; i < 20; i++) {
    start1(i * 10, i * 10);
}

function start2(a, b){
    ctx.beginPath();
    ctx.moveTo(390-a, 200);
    ctx.lineTo(200, 190 - b);
    ctx.stroke();

}
for (let i = 1; i < 20; i++) {
    start2(i*10, i*10); 
}

function start3(c, d){
    ctx.beginPath();
    ctx.moveTo(10 + c, 200);
    ctx.lineTo(200, 210 + d);
    ctx.stroke();


}

for (let i = 1; i < 20; i++) {
    start3(i*10, i*10); 
}

function start4(e, f) {
    ctx.beginPath();
    ctx.moveTo(390-e, 200)
    ctx.lineTo(200, 210 +f);
    ctx.stroke();

}

for (let i = 1; i < 20; i++) {
    start4(i*10, i*10); 