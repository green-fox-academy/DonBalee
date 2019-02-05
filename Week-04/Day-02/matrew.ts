class Personb {
    name: string;
    age: number;
    gender: string;
    constructor () {

    }
    public introduce () : any {
        console.log(`Hi, I'm  ${this.name}, a ${ this.age} year old and ${this.gender}.`  )
    }
}