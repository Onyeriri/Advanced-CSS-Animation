let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const result = TotalSalaries(salaries);
console.log(result);

function TotalSalaries(salaries) {
    let sum = 0;

    for (let keys in salaries) {
        sum += salaries[keys];
    }

    return sum;
}