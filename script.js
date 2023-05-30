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

let result = checkSpam('buy ViAgRA now');
result = checkSpam('free xxxxx')
result = checkSpam("innocent rabbit")
console.log(result);

function checkSpam(str) {
    return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
}