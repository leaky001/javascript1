// const mixedString = "Hello, How are you?"
// const lowerCase = mixedString.toLocaleLowerCase()
// const upperCase = mixedString.toLocaleUpperCase()
// console.log(lowerCase)
// console.log(upperCase)

// // searching for a string 

// const exampleString = "I love cat cat are great"

// console.log(exampleString.indexOf("cat"))



console.log("Welcome to string in details")

// javascript string let method
let item = "DLT Africa!";


// to check amount of letter we declear
const length = item.length;
console.log(length)

// The charAt() method returns the character at a specified index (position) in a string.
const index = item.charAt(0)
console.log(index)


// The indexOf() method returns the position of the first occurrence of a value in a string.

const firstOccurence = item.indexOf("frica")
console.log(firstOccurence)

// The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

const extractE1 = item.substring(1,5)
console.log(extractE1)

console.log(item)

// The slice() method returns the extracted part in a new string.

const extractE2 = item.slice(0,7)
console.log(extractE2)

// Split a string into substrings using the specified separator and return them as an array.

const split = item.split(" ");
console.log(split);

const join = split.join(" ")
console.log(join)

const upper = item.toUpperCase();
console.log(upper)

const lower = upper.toLowerCase();
console.log(lower);

// includes Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

const checkAvailability = item.includes("Africa")
console.log(checkAvailability);


const startWith = item.startsWith("DLT");
console.log(startWith);

const endWith = item.endsWith("Nigeria");
console.log(endWith);


const email = "   yourname@gmail.com   ";
console.log(email)
const trimmedEmail = email.trim();
console.log(trimmedEmail)


const repeat = item.replace("!", "")
console.log(repeat)

const last = item.lastIndexOf("f");
console.log(last)

const con = item.concat(trimmedEmail);
console.log(con)

const example = 1+ "1";
console.log(example)




//how does javascript handles primitive and non primitive value 

//value and reference in js
//primitive [passed by value]

let a = 6;
let b = a;
console.log(b)
console.log(a)
b = 10;
console.log(b)

let firstName = "oluwaFeranmi";
let fullName = firstName;

console.log(fullName);

fullName = "oluwaFeranmi Alaba";
console.log(fullName); 


// Non primitive [passed by reference]
let firstExample = {age: 12}
let exampleTwo = firstExample;
exampleTwo.age = 20;
console.log(firstExample)
console.log(exampleTwo)





// SPREAD OPRATORS IT ALLOWS YOU TO UNPARK ITERABLES LIKE ARRAY STRING MAPS AND OBJECT IN TO INDIVIDUAL ELEMENT AND OR KEY VALUE OBJECT

// IT ALLOWS US TO COPY AN ARRAY AND OBJECT AND THIS OPREATION IS CALLED SHALLOW CLONE OR SHALLOW COPY

const arr =[1,2,10,405];
const arrClone = [...arr];
console.log(arrClone)
arrClone.push(4)
console.log(arr)

//we can use spread opreator to merge two arrays or more

let arr1 = [1,2];
let arr2 = [3,4];
const merged = [...arr1, ...arr2];
console.log(merged);


let student1 = {name:"muiz",};
let student2 = {age:900, };
const mergeds = {...student1,...student2};
console.log(mergeds)

function sum(a,b,c) {
    return a * b * c;
}

const values = [12,12,12];

const result = sum(...values)

console.log(result)


// Destructuring 
let person = {name: "Alhaji Agba", age:102,status: "Dead"};
const {name,age} = person;
console.log(name)

let fruit = ["Apple","Banana","Cherry","Date","Egg plant"]
const [frist, second, third, fourth, fifth,] = fruit;
console.log(frist,third)























































