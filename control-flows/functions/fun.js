// Function declaration


// function myName (){
//     return "hello world"
// }

// // function expression
// const myWorld = function(){
//     return "hello world"
// }

// // Arrow functions
// const myName = () => {
//     return 'hello world'
// }


function lol (a,b) {
    return a+b;
}

console.log(lol(1,2))

function jamb (mon) {
    if (mon> 30) {
        return "You are too old to register"

    } else if (mon < 30 && mon > 18)  {
        return "you are qualified to register"

    } else{
        return "too young to register"
    }
}
console.log(jamb(19))


console.log(myDays('sunday'))

function myDays (day) {
   if ( day === 'sunday') {
        return "sunny day"
    } else if ( day ==='monday') {
        return "hot days"
     } else if (day === 'tuseday') {
        return "cool days"
    } else if ( day === 'wednesday') {
        return "summer days"

        
    } else {
        return "good day"
    }
    
}

function everyDay (day) {
switch (day){
     case "monday":
     return "A bright day"

     case "tuesday":
     return "A sunny day"
     case "wednesday":
        return "frosty"
     case "thursday":
          return "hectic"
     case "friday":
         return "wet"
     case "saturday":
          return "it weekend"
     case "sunday":
         return "tmr is sunday"
         default:
           "ehnnn"


    }
}

console.log(everyDay("sunday"))
 

const checknumber = (num) => {
    if (num > 0) {
        return 'positive'

    } else if (num < 0) {
        return 'negative'
    } else {
        return "zero"
    }
}

console.log(checknumber (0))
console.log(checknumber (4))
console.log(checknumber (-4))


const isEven = (num) => num %2 === 0 ? 'even' : 'odd'

console.log(isEven(4))
  

const login = (username, password, isAdmin) => {
    if (!username || !password) return "please fill the required fields";
    if (isAdmin) return "admin login successful";
    return username === "user" && password === "pass123" ? "user login successsful": "invalid credential";    
}
console.log(login('user', "", true))


const register = (yourname, state, password, ) => {
    if (!yourname || !state) return "Make sure you fill this with your details";
    if (password)  return "Thanks for visiting our page";
    return yourname === "muiz" && state === "ilorin" && password === "01234" ? "muiz login successful":"registration not successful try again later"


}
console.log(register("muiz", "01234", false))

// write a functions that hndles registration

const registration = (username, password, country, state, email) => {
    if (username || !password) return "please fill the required fileds"

    if (password.length < 6) return "minimum of 6 characters";

    return username === "muiz" && password === "pass123" ? "user already exits": `$
    {username} succefully registered`
}

console.log(registration("muiz", "pass123", "Nigeria","kogi", 'email'))

// SCOPE

// Global Scope

 let globalVar = "i am global"

 function showVar(){
     console.log(globalVar)
 }

showVar()




function showlocVar(){
    let localvar = "i am local"
    console.log(localvar)

}
showlocVar()

// lexical scope
function outterfunc () {
    let outervar = "i am lucky";

    function innerfunc (){
        console.log(outervar)
    }

    innerfunc()
}

outterfunc()
// lexical scope

function outterfunct () {
    let outervar = "i am introvert";

    function innerfunct (){

        function innerMost () {
        console.log(outervar)
    }

    innerMost()
}

innerfunct()

}

function getName (name) {
    function greet () {
        console.log(`good day ${name}`)
    }
    
    greet()

    
}

getName("ola")


