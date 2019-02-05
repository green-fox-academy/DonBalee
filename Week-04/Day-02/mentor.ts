import {Person} from './gfinher';

class Mentor extends Person {
    name: string;
    age: number;
    gender: string;
    level: string;
    constructor(
        n:string = 'Jane Doe',
        a:number = 30,
        g:string = 'female',
        l:string = 'intermediate', 
    ) {
        super (n, a, g)
    }
    
public getGoal(): any {
    console.log('My goal is: Educate brilliant junior software developers.');
}
public introduce(): any {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
}
}
