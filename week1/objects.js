let offer = "none";
let time = 1200;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks:["Cappuccino","Latte","Filter Coffee","Tea","Hot Chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with surprisingly priced sandwich",
    noOffer: "Sorry, no offer",

openCafe(){
    return "Come on in";
},
closeCafe(){
    return "We are closed, come back tomorrow",
}
console.log(cafe.openCafe())
console.log(cafe.closeCafe())


// if (time < 1100){
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// }    else if (time < 1500){
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }

// const person = {
//     name: "Keshia",
//     age: 31,
// };
// console.log(person.name)

// const person = {
//     name: "Keshia",
// favSongs: ["Numb", "Freaky Deaky", "Forgot about Dre", "Lose Yourself", "Bumpy Ride"],
// };
// console.log(person.name)
// console.log(favSongs[0])

// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe:()=>{
//         return "Come on in";
//     },
//     closeCafe:()=>{
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe()); ////displays openCafe
// console.log(cafe.closeCafe()); ////display closeCafe

//// ES6 version=no colons or arrow syntax
// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe(){
//         return "Come on in";
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow!"
//     }
// };

// console.log(cafe.openCafe()); ////displays openCafe
// console.log(cafe.closeCafe()); ////display closeCafe

////operate on data within object
// let offer = "none";
// let time = 1200;

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: ["Cappuccino", "Latte", "Filter coffee", "Tea", "Hot chocolate"],
//     breakfastOffer: "Free croissant with coffee",
//     lunchOffer: "Free drink with surprisingly priced sandwich",
//     noOffer: "Sorry no offer",

//     openCafe(){
//         if(this.hasSpecialOffers){ ////this.  (tells openCafe where specialOffers is)
//             return "Time for a special offer!";
//         }
//     },
//     closeCafe(){
//         return "We are closed, come back tomorrow!";
//     }
// };

// console.log(cafe.openCafe()); ////displays openCafe

////ACTIVITY1

// const person = {
//     name: "Keshia",
//     age: 31,
//     sayHi(){
//         return console.log(`Hello my name is ${this.name}.`)
//     }
// }
// person.sayHi();


////ACTIVITY2


// const pet = {
//     name: "Gizmo",
//     typeOfPet : "hamster",
//     age: 7,
//     colour: "brown",
//     eating(){
//         return console.log(`${this.name} is eating.`)
//     },
//     drinking(){
//         return console.log(`${this.name} is drinking.`)
//     }}
//     pet.eating();
//     pet.drinking();


////ACTIVITY3

const coffeeShop = {
    branch: "Oldham",
    name: "Cafe del Horror",

    drinks: {
    coffee: 1.5,
    tea: 1.1,
    juice: 0.9,
    milkshake: 1.9,
    water: 0.0,
    mocha: 2.1,
    },

    food: {
    sandwich: 1.5,
    burger: 1.7,
    sandwich: 3,
    fries: 0.9,
    steak: 5.6,
    salad: 2.0,
    },

    drinksOrdered(...drinks) {
    let cost = 0;
    const drinksStr = drinks.join(" & ");
    drinks.forEach((drink) => (cost += this.drinks[drink]));
    cost = cost.toString().split(".");
    cost[1] = cost[1].padEnd(2, "0");
    cost = cost.join(".");

    return this.displayOrder(drinksStr, cost);
    },
    foodOrdered(...food) {
    let cost = 0;
    const foodStr = food.join(" & ");

    food.forEach((item) => (cost += this.food[item]));

    cost = cost.toString().split(".");
    cost[1] = cost[1].padEnd(2, "0");
    cost = cost.join(".");

    return this.displayOrder(foodStr, cost);
    },

    displayOrder(order, cost) {
    return console.log(
        `Welcome to ${this.name}, your ${order} will be with you in roughly 10 minutes, your total is £${cost}.`
    );
    },
};

coffeeShop.drinksOrdered("milkshake", "tea", "mocha");
coffeeShop.foodOrdered("steak", "fries", "salad", "burger", "fries");



