const numbers = [10, 4, 100, -5, 54, 2];

// For
let sum1 = 0;
    for (let i = 0; i < numbers.length; i++ ) {
        sum1 += numbers[i] **3;
    }
console.log(sum1);

// For Of
let sum2 = 0;
    for (const numbersCube of numbers) {
       sum2 += numbersCube **3;
    }
console.log(sum2);
 
// forEach
let sum3 = 0;
numbers.forEach(numbers => sum3 += numbers **3);
console.log(sum3);

// reduce
const sum4 = numbers.reduce((acc,numbers) => {
    return acc + numbers **3;
}, 0);
console.log(sum4);

