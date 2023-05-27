let calculator = {
    firstInput: 0,
    secondInput: 0,
    read() {
        this.firstInput = +prompt('Please enter your first number: ', '');
        this.secondInput = +prompt('Please enter your second number: ', '');
    },
    sum() {
        return this.firstInput + this.secondInput;
    },
    multiply() {
        return this.firstInput * this.secondInput;
    }

};

calculator.read();
let total = calculator.sum;
alert(total)

let multiplication = calculator.multiply;
alert(multiplication)