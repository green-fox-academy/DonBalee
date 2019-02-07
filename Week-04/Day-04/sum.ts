'use strict'
export class Numbers{
sum(num1: number, num2: number): number {
    
    return num1 + num2;
}
}

const Numbers1 = new Numbers();
console.log(Numbers1.sum(3,5));
