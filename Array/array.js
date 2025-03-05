    const cohorts = ["Kabir","Muiz","Feranmi", "Lateefat","Ola" ] 
    console.log(cohorts)


//     (num < 6 ? num : null)).filter(num => num !== null);

// console.log(lessThanSix);


    const nested = [[1,2],[3,4],[5,6]]
    console.log(nested);



    const newArray = nested[0][1]
    console.log(newArray)
    console.log(nested.length);


   const replaceEl = (cohorts [1] = "feranmi" )
   console.log(replaceEl)
   console.log(typeof replaceEl);

//    to add a new element to last index of an array 
cohorts[1] = "habbeb"
console.log(cohorts);

cohorts.forEach((names) => {
    console.log(names.toUpperCase())
    
})


const student = ["Yemi", "Soliu", "Simbi","Fatimoh", "Maryam","Lateefat"]
console.log(student)

// Array method

// 1; PUSH METHOD: WE USE IT TO ADD A NEW ELEMENT TO THE END OF AN ARRAY

const pushed = student.push("Bisola", "Lateffat")
console.log(pushed) 



//2; pop method : we use it to remove the last element in an array


const number = [3,2,1,4,5,8,7,0,9]
console.log(number);

const popped = number .pop() // to save the remove element in a variable 
console.log(popped);//to view the removed element
console.log(number);

//3; shift method : is used to remove the first elements of an array
const colors = ["Green" ,"Red", "Black", "White"]
console.log(colors);

const remEl = colors.shift(); //To save the removed element in a variable
console.log(colors);
console.log(remEl);

// 4; unshift; : it is used to add one or more elements to the beginning of an array

const fruit = ["orange", "apple", "greap"]
console.log(fruit)

const unShift = fruit.unshift("watermelon", "Mango")
console.log(fruit)
console.log(unShift)

// splice is used to add an elements to a certain points
const foods= ["rice","beans","amala", "semo", "eba", "poundedyam"]

console.log(foods);

foods.splice(1, 0, "Tuwo", "okro" )
console.log(foods)


const wears = ["Gucci", "D&G", "Offthug", "Fendi", "Nike"]

wears.splice(4)
console.log(wears);

const male = ["Korede","Kabir", "Daoud","Abduliah","Soliu"]
console.log(male)

const newString = "Adeyemi"
console.log(newString.length);
const slicedString = newString.slice(1,4);
console.log(slicedString)

const warriors = male.slice(1, 4)
console.log(warriors)

const stakeHolders = male.slice(4)
console.log(stakeHolders);

// or using negative parameters 

const stakeHolders2 = male . slice(-2) // start counting from last element(-1)
console.log(stakeHolders2);

const string = male.toString()
console.log(string);

//    .include()

const blean = male.includes("Daud")
console.log(blean); // 

const blean2 = male.includes("Kabir")
console.log(blean2)

//SORTs
const sorted =male.sort()
console.log(sorted)

// indexof
// The indexOf() method is used to find the first occurrence of a 
// specified value in an array. It returns the index of the element if found; otherwise,
//  it returns -1.

const num = [1,2,3,4,9,1,2,9,8,7,12,11,1,2,]
console.log(num)

console.log(num)
const index1 = num.indexOf(2)
console.log(index1)


// lastIndexof
// The lastIndexOf() method is used to find the last occurrence of a specified element in an array. It searches the array from right to left and returns the index of the last match. If the element is not found, it returns -1.

const lastIndexOf = num.lastIndexOf(4, num.length)
console.log(lastIndexOf)

// ForEach

// The forEach() method is used to iterate over an array and execute a function on each element. Unlike map(), it does not return a new array—it just runs a function for each item.

const names = ["shloa","Alaba","Alamu"]
names.forEach(function(){
    console.log(names)
})

names.forEach(() => {
    console.log(names)

})

names.forEach((value, i,arr,) => {
    console.log(value)
    console.log(i)
    console.log(arr)

})



let totalval = 0;
const trns = [42, 45, 26, 4, 13, 16];

trns.forEach((trn) => {
 console.log(totalval, (totalval += trn), trn);
})

console.log(totalval)


names.forEach((name) => console.log(
    `congrat ${name}, you will be representing the team in the uk next month`
))

// array of object

const investory = [
    {name:"Rice", price:1000},
    {name:"Beans", price:4000},
    {name:"Gari", price:3000},
    {name:"Semo", price:2000},
    {name:"Yam", price:5000},
]

const prices = investory.map((value) =>{
    return value.price

})
console.log(prices)

const commodities = investory.map((value)=> value.name)
console.log(commodities)

// map method
//The .map() method is used to create a new array by applying a function to each element of an existing array. it also creat a new array and apply function to each element without modifying the original array
const arr = [1,2,3,4,5,6];
const multipliedVal = arr.map((el) => el * 2);
console.log(multipliedVal)

const world =["hello", "world", "javascript"];
console.log(world.map((world) => world.toUpperCase))

const pricesInUSD = [200, 120, 360, 90];
const xchangeRate = 1490; 

console.log(pricesInUSD.map((usd) => usd * xchangeRate ))

const users = [
    {name: "latefat",age: 300},
    {name: "Abuliah", age: 950},
    {name: "Muiz Banire", age: 1450},
    {name: "Abdul Kabir", age: 1950}
];

const nameOnly = users.map((value) => value.name);
console.log(nameOnly)


const products = [
    {name: "laptop",price: 300},
    {name: "desktop", price: 950},
    {name: "Mouse", price: 1450},
    {name: " Key board", price: 1950}
];

const productWithId = products.map((product,index) => ({
    id: index + 1,
    ...product,
}));

console.log(productWithId)

const productr = [
    {name: "laptop",price: 300},
    {name: "desktop", price: 950},
    {name: "Mouse", price: 1450},
    {name: " Key board", price: 1950}
];

const productWithI =  productr.map((index) =>index.productWithId)
console.log(productWithId)


//creat an array of number 1 to 10 use the map method to return only numbers that are less than six
 
 
 const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const lessThanSix = numbers.map((i) => {
    if(i < 6) {
        return i
    }

})

console.log(lessThanSix);



// Filter methods;.filter() method is an array method used to create a new array with elements that pass a certain condition. It does not modify the original array.


const evenNumber = numbers.filter((i)=> i % 2 === 0)
console.log(evenNumber)

const below = productWithId.filter((product) => product.price <= 1000)
console.log(below)





const product = [
    {name: "laptop",price: 300},
    {name: "desktop", price: 950},
    {name: "Mouse", price: 1450},
    {name: " Key board", price: 1950}
];
  
  const nameProducts = productWithId.filter(product => product.name.length < 7);
   
  console.log(nameProducts);

  let newArr = [100, "Pelumi", false, {},null, undefined]

  const filteredString = newArr.filter((data) => typeof data === "string" ) 
    console.log(filteredString)


    // write an expression to return the sum of all this prices with filter method
    // const product = [
    //     {name: "laptop",price: 300},
    //     {name: "desktop", price: 950},
    //     {name: "Mouse", price: 1450},
    //     {name: " Key board", price: 1950}
    // ];
    // const price = productWithId.filter((price) =>   price + "number");
    // console.log(price)

    // 
    
    // const product = [
    //     {name: "laptop", price: 300},
    //     {name: "desktop", price: 950},
    //     {name: "Mouse", price: 1450},
    //     {name: "Key board", price: 1950}
    // ];
    
    // 
    
    
    
    let total = 0;
    
    products.filter(productWithId => (total += productWithId.price, true)); 
    
    console.log(total);
    
    

    
  
  





















































