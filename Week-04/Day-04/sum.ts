'use strict'
export class Numbers{
sum(list: number[]) {
    let sum = 0
    list.forEach((item) => {sum += item} )
    return sum; 
}
}

const Numbers1 = new Numbers();
console.log(Numbers1.sum([1,2,3]));
