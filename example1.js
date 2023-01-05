
//Let and Const
const EDIT_MODE = true;
let username = "ilyas";

if(username === 'ilyas'){
    let username = "test";
    console.log(username);
}

console.log(username);

//Arrow Functions
const sayHello = (username) => {
    return `hello ${username}`;
}

const shortSayHello = username => `short hello ${username}`;

console.log(sayHello(username));
console.log(shortSayHello(username));


//Spread 
const first = [1,2,3]
const second = [4,5,6]
const third = [...first,...second];
console.log(third);

const obj1 = {name : "ilyas"}
const obj2 = {location : "rabale"}
const obj3 = {department:"dotnet",...obj1,...obj2}
console.log(obj3);

//Rest parameter
const sumNumbers = (...args) => args.reduce((curr, next) => curr + next);

console.log(sumNumbers(1,2,3,4,5,6));

//Class and Inheritance 
class Person {
    constructor(name){
        this.name = name;
    }
    walk = () => console.log(`${this.name} is walking`);
}

class Trainer extends Person{
    constructor(name,city){
        super(name);
        this._city = city;
    }

    get city(){
        return this._city;
    }

    set city(cityname){
        this._city = cityname;
    }
}

const trainerobject = new Trainer("ilyas","panvel");
trainerobject.walk();
trainerobject.city = "mumbai";
console.log(trainerobject.city);

//Destructuring
const object1 = {name : "ilyas",city:"panvel",department:"dotnet"}
const {username : name, city } = object1;
console.log("Destructured",username)
console.log("Destructured",city)