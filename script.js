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
// let arr = [5, 3, 8, 1, 17, 2, 21, 40, 50, 64];

// function filterRange(arr, a, b) {
//     return arr.filter(arr => (arr >= a && arr <= b)).join(',')
// }

// let result = filterRange(arr, 1, 25);
// console.log(result, '\n', arr);
// let arr = ["HTML", "JavaScript", "CSS"];

// // let result = arr.sort((a,b) => b - a);
// // console.log(result, arr);

// function copySorted(arr) {
//     let newArr = arr.slice(0);

//     return newArr.sort();
// }

// let result = copySorted(arr);
// console.log(result, arr);

// function Calculator() {

//     this.calculate = function(str){
//         let arr = str.split(' ');
//         if (arr[1] === '+') {
//             return (Number(arr[0]) + Number(arr[2]))
//         } else {
//             return (Number(arr[0]) - Number(arr[2]))
            
//         }
//     }

//     this.addMethod = function (name, func) {
//         switch (name) {
//         case '*':
//             func()
//             break;
        
//         default:
//             break;
//         }
//     }
// }
 
// const calc = new Calculator;
// let result = calc.calculate("10 - 7");
// console.log(result);

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a*b*b);

// let result = powerCalc.calculate("2 * 3");
// console.log(result);
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let names = [];

// objectConversion(john)
// objectConversion(pete)
// objectConversion(mary)
// console.log(names);

// function objectConversion(obj) {

//     for (let key in obj) {
//         if(key === 'name') names.push(obj[key])
//     }

//     return names;

// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(item => item.name);

// console.log(names);
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map(user => {
//     return {
//         fullName: user.surname + ' ' + user.name,
//         id: user.id
//     }
// });

// console.log(usersMapped);
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];
// console.log(sortByAge(arr));

// function sortByAge(arr) {
//     return arr.filter((ar) => (ar.age > 0)).sort((a, b) => a.age - b.age);
// }
// let arr = [1, 2, 3];
// let randomNumber;

// let result = shuffle(arr);
// console.log(result);

// function shuffle(arr) {
//     let previousNumber ;

//     for (let value of arr) {
//         randomNumber = Math.floor(Math.random() * 3);

//         if (previousNumber === randomNumber) continue;
//         arr[randomNumber] = value;
//         console.log(randomNumber);
//         previousNumber = randomNumber
//     }

//     return arr;
// }

// const seed = arr[0]

// let initial = 0;
// let current = 1;
// let arr = [2, 1, 0]
// let pre;

// while (current !== initial) {
//     current = Math.floor(Math.random() * 3);
//     pre = current;

//     initial = arr[current]

//     console.log(current, initial);

//     break;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];
// console.log(getAverageAge(arr));

// function getAverageAge(arr) {
//     let allAges = 0;
//     let arrLength = arr.length

//     for (let value of arr) {
//         allAges += value.age;
//     }

//     arr.map((arr) => {
//         allAges += arr.age
//     })

//     return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
// }
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// for (let i = 0; i < strings.length; i++) {
//     for (let j = 1; j < strings.length; j++) {
//         if (strings[i] === strings[j]) {
//             strings.splice(j, 1)
//         }
//     }
// }

// console.log(strings);

// let result = []
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// const uniqueValues = unique(strings);
// console.log(uniqueValues);

// function unique(arr) {
//     for (let value of arr) {
//         if (!result.includes(value)) {
//             result.push(value);
//         }
//     }
    
//     return result;
        
// }

// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
// ];
  
// let usersById = groupById(users);
// console.log(usersById);

// function groupById(users) {
    
//     return users.reduce((prev, user) => {
//         prev[user.id] = user;
        
//         return prev;
//     }, {})
// }
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// const users = Array.from(new Set(values));


// console.log(users);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250,
//     "Main": 200
// };
  
// console.log(sumSalaries(salaries));

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let values of Object.values(salaries)) {
        
//         sum += values;
//     }

//     return sum;
// }

// let user = {
//     name: 'John',
//     age: 30,
//     position: 1,
// };
// console.log(count(user))
// function count(user) {
//     return Object.keys(user).length;
// }

// let options = {
//     size: {
//         width: 100,
//         height: 200
//     },
//     items: ["Cake", "Donut"],
//     extra: true
// };

// let { size: w, items, extra } = options;

// console.log(w.width, items[0], extra);
// let user = {
//     name: "John",
//     years: 30
// };
  
// let { name, years, isAdmin = false } = user;
// console.log(name, years, isAdmin);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Onyeriri": 1000000,
//     "Mary": 250
// };

// console.log(topSalary(salaries));

// function topSalary(salaries) {
//     let highestPaid = 0;
//     let lowestPaid = 0;

//     if (Object.entries(salaries).length === 0) return null;
    
//     for (let [key, value] of Object.entries(salaries)) {

//         if (value > highestPaid) {
//             highestPaid = value;
//             lowestPaid = key
//         }

//     }

//     return lowestPaid;

// }
let result = factorial(-9000);
console.log(result);

function factorial(number) {
   
    return ((number <= 1) ? number : (number * factorial(number - 1)));
}

