// let favouriteDrinks = ["Pepsi", "Fanta", "Tonic"];

// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// let favouriteDrinks = ["Pepsi", "Fanta", "Tonic", "Redbull"];

// for(let i = 0; i < favouriteDrinks.length; i++){

//     console.log(favouriteDrinks [i] );
// }

// let multiplesTwo = []

// for(let i =0; i<=20; i++){
//     if (i % 2==0){
//         multiplesTwo.push(i)
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);

// let age = 15;

// while(age < 18){
//     console.log("You're a child!");
//     age++;
// }
// console.log("You're an adult!");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while(currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];

// }

// console.log(currentCard);



////Activity1

// let favFilms = ["Saw franchise", "Wolf Creek", "No One Lives", "Would You Rather", "Texas Chainsaw Massacre"];

// favFilms.push("Cult of chucky", "Curse of Chucky")
// console.log(favFilms);

// let favFilms = ["Saw franchise", "Wolf Creek", "No One Lives", "Would You Rather", "Texas Chainsaw Massacre"];

// favFilms.push("Cult of chucky", "Curse of Chucky")
// let currentFilm = "Would You Rather";
// while (currentFilm != "Wolf Creek"){
//     console.log(currentFilm);
//     currentFilm = favFilms[Math.floor(Math.random()*4)];
// }
// console.log(currentFilm);

////Activity2-

// let Num = [];
// for(let i = 0; i < 6; i++){
// console.log (Math.floor((Math.random()*50)+1)); (Num);
// }

////Activity3-

// for (let i = 9; i > -1; i--) {
//     console.log(i)
// }

////Activity4-

// let favFilms1 = ["Saw", "Wrong Turn", "Cradle To The Grave", "Ghostbusters"];

// for (let i = 0; i < favFilms1.length; i++) {
//     if (i == 2) {
//         if (favFilms1[i] == "Ghostbusters") {
//             console.log("Yay, it's Ghostbusters!");
//         } else {
//             console.log("Boo, we want Ghostbusters!");
//         }
//     }
// }

////Activity5-

// let rand_num = []
// for (let i = 0; i < 6; i++) {
//     rand_num.push(Math.round(Math.random() * (30 - 1) + 1));

//     if (rand_num[i] % 7 == 0) {
//         console.log(`${rand_num[i]} is divisible by 7`);
//     } else {
//         console.log(`${rand_num[i]} is not divisible by 7` );
//     }
// }

////Activity6-

// let bobFollowers = ["Kaiden", "Aaliyah", "Jay", "Mercedes"];
// let hannahFollowers = ["Ste", "Kaiden", "Tom", "Aaliyah"];
// for (let bobIndex = 0; bobIndex < bobFollowers.length; bobIndex++) {
//     for (
//     let hannahIndex = 0;
//     hannahIndex < hannahFollowers.length;
//     hannahIndex++
//     ) {
//     if (bobFollowers[bobIndex] == hannahFollowers[hannahIndex]) {
//         console.log(`${bobFollowers[bobIndex]} follows Bob and Hannah`);
//     }
//     }
// }

//Activity7-

////for loop
// for (let i = 0; i< 10;i++){
//     console.log("Keshia Collins")
// }

////while loop
// let i = 0;
// while (i < 10) {
//     console.log("Keshia Collins");
//     i++;
// }

////do...while loop
// let i = 0;
// do{
//     i +=1;
//     console.log("Keshia Collins");
// }while (i < 10);

////do while loop
// let count = 0;
// do{
//     console.log("Keshia Collins");
//     count ++ ;
// }while(count < 5);