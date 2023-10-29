function sayHello(name, lastName) {
    console.log("hello "+ name + "" + lastName);
}

// practice - print numbers from one to 20, except 7 and 13

for (let i = 1; i <= 20; i++) {
    if (i !== 7 && i !== 13) {
        console.log(i);
    }
}

// print the sum of the numbers in the array

let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
let sum = 0;
for (let i = 0; i < numbers.length; i++)
{
    let number = numbers[i];
    console.log(number);
    sum = number + sum;
    console.log("the total: " + sum)
}

function init() {
    console.log("hello there! from the init");
    sayHello("Andrew", "McKinnon");
}

window.onload = init;

