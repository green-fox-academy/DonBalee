class Person {
    name: string;
    age: number;
    gender: string;
    constructor(
        n:string = 'Jane Doe',
        a:number = 30,
        g:string = 'female',
    ){
        this.name = n;
        this.age = a;
        this.gender = g;
    }

public introduce() : any  {
    console.log(`Hi I'm ${this.name}, a ${this.age} year old and ${this.gender}.`);
}
 public getGoal() : any {
    console.log('My goal is: Live for the moment!');
}
}
export {Person};
