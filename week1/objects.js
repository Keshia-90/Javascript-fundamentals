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



