// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }
// pressGrindBeans();

// let coffeeIsGrinding = fasle;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     }else{
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal (300, 50449921);
// cashWithdrawal (30, 50449921);
// cashWithdrawal (200, 50449921);

// let accnum = 50449921;
// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }
// cashWithdrawal (300, accnum);
// cashWithdrawal (30, 50449921);
// cashWithdrawal (200, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }
// addUp(7, 3);
// console.log(addUp(2, 5));

////calculates celsius to farenheit
// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFarenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };
// console.log("The temperature is " + getFarenheit(15) + "°F");

// function square(number) {
//     return number * number;
// };

// square(5);

////Activity 1

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

//to change to arrow function
// const factorial = (n) => {
//     if ((n === 0) || n === 1) {
//         return 1;
//     }else{
//         return (n * factorial (n-1));
//     }
// }

// console.log(factorial(33));


////Activity 2

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }

// takeOrder("pineapple");
////edit to include 2 new parameters and running order countupdated when function called

// let orderCount = 0;

// const takeOrder = (size, topping, drink) => {
//     console.log(`${size} pizza with ${topping} and a ${drink}`);
//     orderCount++;
// }

// takeOrder("12 inch","pineapple","Pepsi");


////Activity 3

// const pinNum = 1234;
// let accBal = 1000;
// let amount = 600;
// const cashMachine = (pin, amount) => {
// if (pinNum != pin) {
//     console.log("Incorrect Pin Number");
// } else {
//     if (amount > accBal) {
//     console.log("Insufficient funds");
//     } else {
//     accBal = accBal - amount;
//     console.log(`Here is your ${amount}.Your new balance is ${accBal}`);
//     }
// }
// };

// cashMachine(1234, 500);
// cashMachine(1231, 1200);
// cashMachine(1234, 2000);

