"use strict";

// };

// calculator.read();
// let total = calculator.sum;
// alert(total);

// let multiplication = calculator.multiply;
// alert(multiplication)

// let ladder = {
//     step: 0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this
//     },
//     showStep() { console.log( this.step )},
// };

// console.log(ladder?.step);
// randomNumbers(4, 5)

// function randomNumbers(min, max) {
//     console.log(Math.floor(min + Math.random() * (max+1 - min)));
// }

// const transformedWord = ucFirst('john');
// console.log(transformedWord);

// function ucFirst(name) {
//     return name[0].toUpperCase() + 'ohn';
// }

// let result = checkSpam('buy ViAgRA now');
// result = checkSpam('free xxxxx')
// result = checkSpam("innocent rabbit")
// console.log(result);

// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
// }

// let result = truncate("What I'd like to tell on this topic is:", 20)
// result = truncate("Hi everyone!", 20)
// console.log(result);


// function truncate(str, max) {
//     const stringLength = str.length;
//     const ellipse = '...';

//     if (stringLength > max) {
//         const truncatedWord = str.slice(0, max - 1) + ellipse;

//         return truncatedWord;
//     }

//     return str
// }

// let money = '%200';
// console.log(money.slice(1))

// let arr = ['Jazz', 'Blues'];

// arr.splice(2, 0, 'Rock-n-Roll');
// console.log(arr);
// arr.splice(1, 1, 'Classics');
// console.log(arr);
// arr.splice(0, 1);
// console.log(arr);
// arr.splice(0, 0, 'Rap', 'Reggae');
// console.log(arr);

// function promptUsers() {
//     let userInput = 1;
//     let numbers = [];

//     while (userInput || userInput > 0
//     ) {
//         userInput = prompt('Please enter a number: ');
    
    
//         if (isNaN(userInput) === true) break;
        
//         numbers.splice((numbers.length - 1), 0, +userInput);
//     }

//     sumInput(numbers);
// }

// promptUsers();

// function sumInput(numbers) {
//     let total = 0
//     for (let number of numbers) {
//         total += number;
//     }

//     alert(total);
// }

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) {
//         partialSum += item;
//         maxSum = Math.max(maxSum, partialSum);
//         if (partialSum < 0) partialSum = 0;
//     }

//     return maxSum;
// }

// let result = getMaxSubSum([-1, -22, 3, -9, 2]);
// console.log(result);

// function camelize(str) {
//     console.log(str);
//     return str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('')
// }

// let result = camelize("-webkit-transition");
// console.log(result);
let arr = [5, 3, 8, 1, 17, 2, 21, 40, 50, 64];

function filterRange(arr, a, b) {
    return arr.filter(arr => (arr >= a && arr <= b)).join(',')
}

let result = filterRange(arr, 1, 25);
console.log(result, '\n', arr);