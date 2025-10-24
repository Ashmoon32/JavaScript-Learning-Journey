// Classes

class Car {
    wheel = 4;
    color = "Red";
    dirve() {
        console.log("Car is driving!");
    }
}

let toyota = new Car // create object with Car class
console.log(toyota.wheel);
toyota.dirve();


// Access-Control Modifier
// -----------------------
// Public
// Private
// Protected
// Static



// static property and method

// static - if you make your property and method static , it can use directly with class name.

class Calculator {
    static PI = 3.14;

    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.PI + " and " + Calculator.add(1, 2));

// Encapsulation

// In JavaScript, you don't need to write public or private keywords .(#), hashtag  means private and without it , it means public.

// private property can only access within the class

// public member property and method can fully access via object that create with that class
class Car1 {
    #hp = 50; // private
    color = "Color"; // public

    static name = "mgmg";
 
    static info() {
        console.log(`Horse Power: ${this.hp}`);
    }
}
console.log(Car1.name);
Car1.info();
const Mustang = new Car1;
console.log(Mustang.hp);
console.log(Mustang.color);

// Constructor

class Dog {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running...`)
    }
}


let dog1 = new Dog("Bobby");
let dog2 = new Dog("Rambo");

console.log(dog1.name);
console.log(dog2.name);
dog1.run();
dog2.run();

console.log("---------------------------------");

// Inheritance

class Animal {
    constructor (name) {
        this.name = name;
    }
    
    run() {
        console.log(`${this.name} is running...`);
    }
}

// Animal class is inherited by Dog1 class with 'extends keyword'
class Dog1 extends Animal {
    bark() {
        console.log(`${this.name} : Woof.. Woof..`);
    }
}


// notice : you can only inherit one class at once! You can't inherit multiple simultaneously at once.

let milo = new Dog1("Milo");

milo.bark();
milo.run();
console.log(milo.name);

console.log("-----------------------");

class Cat1 extends Animal {
    constructor( name, color) {
        super(name);
        this.color = color;
    }

    meow() {
        console.log(`${this.name}: Meow.. Meow..`);
    }
}

let cat = new Cat1("Shwe War", "Yellow");

cat.meow();

console.log("-----------------------");

// parent class
class Vehicle {
    constructor(manufacturer) {
        this.manufacturer = manufacturer;
        this.speed = 0;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.manufacturer} is acceleration. Current speed: ${this.speed} mph.`);
    }
}

//child class
class Car2 extends Vehicle {
    constructor(manufacturer, model) {
        super(manufacturer);
        this.model = model;
    }


dirve() {
    console.log(`Driving the ${this.manufacturer} ${this.model}.`);
    this.accelerate();
    }
}

const myCar = new Car2('Honda', 'Civic');

myCar.dirve();

console.log(myCar);




