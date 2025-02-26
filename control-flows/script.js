console.log("Hello world")

// Control flows --> determines how programmes are executed based on conditions and iteration

// conditionals -- if, else-if,else, ternary operator.

if ("condition") {
    // code to execute if condition is met
}

let age =30;

if (age === 25) {
    console.log("Age is greater than 25");
} else if (age < 25) {
    console.log("Age is Lesser than 25");
} else {
    console.log("Age is 30");
}

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("You are  not logged in")
} else {
    console.log("You are logged in...")
}

let balance = 500;
let withdraw = 1000;

if (withdraw > balance) {
    console.log("insufficient funds")
}
else if  (withdraw == balance){
    console.log("you can empty your wallet pity your self")
} else {
    console.log("Successful..finished")
}
 
let user =18;
if (user < 18) {
    console.log("come back till you are 18")
}
else if (user == 18){
    console.log("you are allowed to vote")
}


let purchaseAmount =100;
let discount;

if (purchaseAmount >= 250) {
    discount = 10;
}else if (purchaseAmount >= 150) {
    discount = 5;
}else if (purchaseAmount === 100) {
    discount = 1.5;
} else {
    discount = 0;
}

console.log(`You got a discount of ${discount}`)

// Ternary operetor.
// conditions ? expression_if_true :exresssion_if_false.

let threashold = 40;
threashold >= 40 ? console.log("Marry"):
console.log("You are still a minor");

const num = 9;

const result = num % 2 === 0 ? "even" : "odd";

console.log(result)

let temp = 60;
const output = temp <12 ? "it is a cool🥶 day" : "it is a hot 🔥 day!";

console.log(output);


// switch statement -- used when there a multiple possible value for a variable.

let day = "Tuesday"


switch(day) {
    case "Monday":
        console.log("Today is bright!")
        break;
        case "Friday":
            console.log("jimoh oloyin");
            break;
            case "Tuesday" :
                console.log("Today is Tuesday")
                break;
                default:
                    console.log("It is a normal day");
}


let order = "Pizza";

switch (order) {
    case "Burger":
        console.log("This is Burger");
        break;

        case "Pizza":
            console.log("This is Pizza")
            break;
            case "puff puff":
                console.log("This is puff puff")

        default:
            console.log("invalid order, Please select from the menu")
}


let daynumber = 0;
let dayname; 

switch (daynumber) {
    case 1:
        dayname = "Sunday";
        break;
        case 2:
            dayname ="Monday";
            break;
            case 3:
                dayname ="Tuesday";
                break;
                case 4:
                dayname ="Wednesday";
                break;
                case 5:
                dayname ="Thursday";
                break;
                case 6:
                dayname ="Friday";
                break;
                case 7:
                dayname ="Saturday";
                break;
                default:
                    dayname = "😊"
}
console.log(`Day ${daynumber} is ${dayname}`);

const role = "admin";

switch ("admin") {
    case "admin":
        console.log("This is admin");
        break;

        case "editor":
            console.log("This is editor ")
            break
            case "viewer":
                console.log("This is viewer")
                break
                default:
                console.log ("unknown role contact support")

}

// loops are used to execute a block of code multiple times.

for(let i = 0; i < 10; i++) {
    console.log(i);
} 



