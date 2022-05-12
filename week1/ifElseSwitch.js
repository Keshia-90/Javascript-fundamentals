// let weather = "sunny";

// if (weather == "sunny"){
//     console.log("Well, I better wear some suncream!")
// }
// else if (weather == "rainy"){
//     console.log("Better take an umberella");
// }else{
//     console.log("Hmmm, it could go either way!");
// }

// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let day = "Saturday";
// if (day == "Saturday" || day == "Sunday") {
//     console.log("It's weekend!");
// }
// else {
//     console.log("When's weekend?");
// }


// if (1 != "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// let car = "Peugeot";

// switch(car) {
//     case "Ford":
//     case "GM":
//         console.log("You've got an American car!");
//         break;
//     case "Peugeot":
//     case "Citreon":
//         console.log("You've got a French boy!");
//         break;
//     case "Honda":
//     case "Toyota":
//     case "Suzuki":
//         console.log("Japanese cars are dead quiet!");
//         break;
//     case "Mercedes":
//         console.log ("You are proper posh German!");
//         break;
//     case "Volkswagen":
//         console.log("German aren't that bad at all!");
//         break;
//     case "Hyundai":
//     case "Kia":
//         console.log("South Korean cars are getting popular!");
//         break;
// default:
//     console.log("Your car is not in the top ten companies in the world!")
// }


// let place = "Manc";
// let weather = "Cloudy";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place== "Manc" && weather == "Rain"){
//     console.log("Obvs");
// }
// else {
//     console.log("What it isn't raining?");
// }




//activity 1
// let age = 17;
// if (age > "17"){
//     console.log("Yes I can serve you");
// }
// else if (age <= 17){
//     console.log("You aren't old enough");
// }

//activity 2
// let age = "15"; 
// let country = "UK";

// if (age <= "17" && country == "UK") {
//     console.log("We can't serve you, you're under age!");
// }
// else if (age > "17" && country == "UK") {
//     console.log("Yes, we can serve you");
// }
// else {
//     console.log("Sorry we can't serve you");
// }

//activity 3
// let topping = "Pepperoni";

// switch(topping){
//     case "Ham":
//     case "Cheese":
//     case "Sausage":
//     case "Peppers":
//         console.log("These are important ingredients for my pizza.");
//         break;
//     case "Pepperoni":
//         console.log(`I don't mind ${topping} on my pizza.`);
//         break;
//     default:
//         console.log(`${topping} should not be on a pizza!`)
// }

//activity 4
// const password = "Dinosaur"

// if (password.length < 8){
//     console.log("Password is too short")
// }else{
//     console.log(`${password}`)
// }

//activity 5
// let num = "4"

// if ((num %3 == 0) || (num % 5 == 0)){
//     console.log("This number is divisible by 3 or 5");
//     }else{
//     console.log("This number is not divisible by 3 or 5");
// }

//activity 6
// let num = "10"

// if((num % 3 == 0) && (num % 5 == 0)){
//     console.log("fizz buzz");
// }else if (num % 5 ==0)
//     console.log("buzz");
// else if(num % 3 == 0)
//     console.log("fizz");
// else{
//     console.log(`${num}`);
// }

//activity 7
// let num = 56265;
// let text = num.toString();
// let arrayText = text.split("");
// let reverseArray = arrayText.reverse();
// let joinArray = reverseArray.join("");

// if (text == joinArray){
//     console.log("Palindrome")
// }
// else{
//     console.log("Not a Palindrome")
// }

//activity 8
// let time = 11;
// let placeOfWork = "Manchester"
// let townOfHome = "Oldham"

// if (time < 9 && time > 7){
//     console.log(`Commuting from ${townOfHome} to ${placeOfWork}`);
// }
// else if (time > 9 && time < 18){
//     console.log(`In work in ${placeOfWork}`)
// }
// else if (time > 18 && time < 20){
//     console.log(`Commuting from ${placeOfWork} to ${townOfHome}`);
// } else {
//     console.log(`At home in ${townOfHome}`)
// }

//activity 9
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }
// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// let word = "gagging";
// if (word.charAt(0) == word.charAt(word.length-1)){
//     console.log("True")
// } else {
//     console.log("False")
// }

//activity 10
// let num1 = 2;
// let num2 = 5;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//     console.log(`The sum is ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }

