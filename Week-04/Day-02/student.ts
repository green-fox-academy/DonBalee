import { Person } from './gfinher'; 

class Student extends Person {
    name: string;
    age: number;
    gender: string;
    previousOrganization: string;
    skippedDays: number; 
    constructor (
    n: string = 'Jane Doe',
    a: number = 30,
    g: string = 'female',
    pO: string = 'The Scool of Life',
    sD: number = 0,
) {
    super(n, a, g)
}

    public getGoal(): any {
    console.log('My goal is: Be a junior software developer.');
}
public introduce(): any {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`);
}
skipDays(numberOfDays){
    this.skippedDays += numberOfDays
}
}





