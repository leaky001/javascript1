// que1
let number = [3, 7, 2, 9, 5];
let square = [];

for (let i = 0; i < number.length; i++) {
    square.push(number[i] * number[i]);
}

console.log(square); 

// que2

let arr = [1, 2, 3, 5, 6, 7];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        break; 
    }
    console.log(arr[i]);
}
// que3
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}

// que 4


//  que 5
let numb = 3 ; // 
let answer = numb < 0 ? "Positive" : numb === 0 ? "Zero" : "Negative";

console.log(answer); 

//  que 6

let num = 15;
let result = (num % 3 === 0 && num % 5 === 0) ? "FizzBuzz" : 
             (num % 3 === 0) ? "Fizz" : 
             (num % 5 === 0) ? "Buzz" : 
             num;

console.log(result); 
console.log((2*6)+3-3*7/3*5%2)