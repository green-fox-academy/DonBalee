'use strict'

let reversed: string = '.eslaf eb t\'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI';
let newstring: string = ''; 
for (let i = reversed.length - 1; i > -1; i--){

newstring += reversed[i];

}


console.log(newstring);