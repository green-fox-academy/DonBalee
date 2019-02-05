import {Person} from './gfinher';

class Sponsor extends Person{
    name: string;
    age: number;
    gender: string;
    company: string;
    hiredStudents: number;
    constructor(
        n: string = 'Jane Doe',
        a: number = 30,
        g: string = 'female',
        c: string = 'Google',
        hS: number = 0,
    )
    {
        super (n, a, g)
    }
   
    public introduce(): any {
        console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
    }
     public getGoal(): any {
        console.log('My goal is: Hire brilliant junior software developers.');
    }
    hire(hiredStudents) {
        this.hiredStudents += 1
    }
}

