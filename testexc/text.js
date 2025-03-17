let purchaseAmount = 250;
let discount = 0;


if (purchaseAmount>= 200) {
    discount = 20
}else if (purchaseAmount  >= 100){
    discount= 10
}else if (purchaseAmount  >= 50){
    discount=5
}else {
    discount = 0
}

console.log(`You got a discount of ${discount}`)


let score = 75

if (score >= 90 && score <= 100){
    grade="A";
}else if ( score >= 80 && score < 90) {
    grade = "B";
}else if (score >= 70 && score < 80) {
    grade ="c";
}else if (score>= 60 && score < 70) {
    grade="d"
}else if (score >= 0 && score < 60) {
    grade="f9";
}else{
    grade = "invalid score"
}

console.log(`${grade}`)
 

let age = 20

if (age >= 18){
  console.log ( "you are eligibele to vote")
}else if (age === 17){
   console.log ("You can register but you cannot vote")
}else {
   console.log ( "You are to young too vote")
}





 let number = 0;

if (isNaN(2)) {
    console.log("Invalid input! Please enter a valid number.");
} else if (number % 2 === 0) {
    console.log(`${number} Even number.`);
} else {
    console.log(`${number}  Odd number.`);
}


// Write a JavaScript program that takes the name of a month and prints its corresponding number.

// January → 1
// February → 2
// March → 3
// ...
// December → 12
// If the user enters an invalid month, print "Invalid month name".
// 📌 Example Output:

// yaml
// Copy
// Edit
// User enters: March
// Output: 3
// yaml
// Copy
// Edit
// User enters: October
// Output: 10
// sql
// Copy
// Edit
// User enters: Holiday
// Output: Invalid month


let  months  = "febuary";
switch (months) {
    case "january":
        console.log(1);
        break;

        case "febuary":
        console.log(2);
        break;

        case "march":
        console.log(3);
        break;

        case "April":
        console.log(4);
        break;
        case "May":
        console.log(5);
        break;
        case "march":
        console.log(6);
        break;
        default:
        console.log("Invalid month name")
}



// Question 3: Simple Currency Converter 💰
// Write a program that asks the user for a currency code (USD, EUR, GBP, or NGN) and converts 1000 units of that currency into Naira (NGN). Use the following exchange rates:

// USD → 1500 NGN
// EUR → 1700 NGN
// GBP → 2000 NGN
// NGN → 1 NGN
// If the currency code is invalid, print "Invalid currency code".
// 📌 Example Output:

let currency = "EUR";

switch (currency) {
    case  "USD":
        console.log("1500 NGN");
        break;
        case  "EUR":
        console.log("1700 NGN");
        break;
        case  "GBP":
        console.log("2000 NGN");
        break;
        case  "NGN":
        console.log("1 NGN");
        break;
        default:
            console.log("Invalid currency code")



}

// Write a JavaScript program that takes a color input (red, yellow, or green) and prints:

// "Stop" if the color is red
// "Get ready" if the color is yellow
// "Go" if the color is green
// "Invalid color" if the input is not red, yellow, or green
// 📌 Example Output:

let trafficLight = "";
switch (trafficLight){
    case "red":
        console.log("stop")
        break
        case "yellow":
        console.log("get ready")
        break
        case "green":
        console.log("go")
        break
        default:
            console.log("invalid colors")

}
