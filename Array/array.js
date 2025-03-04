    const cohorts = ["Kabir","Muiz","Feranmi", "Lateefat","Ola" ] 
    console.log(cohorts)


    const nested = [[1,2],[3,4],[5,6]]
    console.log(nested);



    const newArray = nested[0][1]
    console.log(newArray)
    console.log(nested.length);


   const replaceEl = (cohorts [1] = "feranmi" )
   console.log(replaceEl)
   console.log(typeof replaceEl);

//    to add a new element to last index of an array 
cohorts[5] = "habbeb"
console.log(cohorts);

cohorts.forEach((names) => {
    console.log(names.toLowerCase)
    
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

const popped = number .pop() // to svae the remove element in a variable 
console.log(popped);//to view the removed element
console.log(number);

//3; shift method : is used to remove the first elements of an array
const colors = ["Green" ,"Red", "Black", "White"]
console.log(colors)

const remEl = colors.shift(); //To save the removed element in a variable
console.log(colors)
console.log(remEl)

// 4; unshift; : it i used to add one or more elements to the beginning of an array

const fruit = ["orange", "apple", "greap"]
console.log(fruit)

const unShift = fruit.unshift("watermelon", "Mango")
console.log(fruit)
console.log(unShift)

// splice
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
const slicedString = newString.slice(1, 4);
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





