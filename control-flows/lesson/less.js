// operation precedence

console.log(2)+3-3*7/3*5 %2

console.log("muiz\p")

// variables 
let a =10;
let b =5;
let c;


c=a
a=b
b=c

console.log(a)
console.log(b)


console.log(c===a)


console.log(c==a)

console.log(`${c===a} ${c===a}`)

// primitive
console.log("1000"+2)  

let threshold = 40;

threshold >= 40;

// ass
let purchaseamount = 0;

let discount;

if (purchaseamount >= 300)
    discount = 10;
    else if (purchaseamount === 200) {
        discount = 5;
    } else if (purchaseamount === 100){
        discount =2;
    } else {
        discount = 0;
    
}
 console.log(` ${discount}`)

let age =25;

if (age > 50)
{
    console.log('you are too old')
}
else if (age < 18) {
    console.log('you are in elligible to vote')
}
else {
    console.log('you are elligible to vote')
}


const numb =9;
let result = numb % 2 === 0 ? "even" : "odd";
console.log(result);

let numbs = -2;
let results = numbs > 0 ? console.log("positive"): numbs === 0 ? console.log("zero")
:console.log("negative");

let number = 15;
let entry = number / 3 && number / 5 ? 'fizzbuzz': number / 3 ? 'fizz' : number % 5 === 0 ?
'buzz': number ;


console.log(entry)


for (let d=1; d <= 50; d+=5) {
    console.log(d)
}


// function examp0les
// function is a reusable block of code that perform a specific task.instead of writing the same code mutiples times,
// you can creat a function and call it whenever you need it

// ways to declear a functions 

// 1; function declaration
// function greet () {
//     console.log("hello world")
// }
// greet();

// 2; fun expression
const reet = function() {
    console.log("muiz, worlds!");
};
reet();

// 3; Arrow function
const leto = () => {
    console.log("Hllo, zulu"); 
};
leto(); 

// 4; fun parameters
function gree(name) {
    console.log(`goodmorning , ${name}`);
}
gree("john")
gree("john") 
gree("ola")

// Return values 
// function can add return a value using the return keyword.
function add(a, b) {
return a + b;
}
let res= add (2, 4);
console.log(res);

// default parameters

function greet(no = "Guest") {
    console.log(`wa, ${no}`);

}
greet () ;
greet('mum')



