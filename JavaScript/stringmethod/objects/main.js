// object = A collection of related properties and/or methods
//          can represent real word objects (people, products, places)
//          object = {key: value,
//                    function()}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function () {
        console.log("Hi! I am Spongebo Squarepants")
    },
    eat: () => console.log("I am eating a Krabby patty"),
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: function () {
        console.log("Hey, I'm Patrick");
    },
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}
person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();
