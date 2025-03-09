// // filter method examples

// const studentNames = ["dolu","soliu","feranmi","abdullahi"];

// const upperCaseStudentNames = studentNames.filter((name) => {

//     if (name.charAt(0) === name.charAt(0).toUpperCase()) return name
// })

// console.log(upperCaseStudentNames)

// const paralizedStudentNames = studentNames.filter((name) => {
//     if (name.charAt(0)=== name.charAt(0).toUpperCase()) return name
// }).map((element) => element + "s")

// paralizedStudentNames.push("muiz")

// console.log({paralizedStudentNames})

// // FOR EACH VS MAP

// const userNames = [{name: "soliu", age:15},{name: "feranmi",age:10},{name: "lola", age:19}]

// // add 5 to each of the users age 
// // const paralizedUserNames = userNames.map((age) => {


// // }).map((age) => age + "5")

// // console.log(paralizedUserNames)

// // add 5 to each of the users age 
// const newUserNames = userNames.map((name,index) => ({...name, age: name.age + 5, height: name.age + 10, id: index + 1,}))
// console.log({userNames})
// console.log({newUserNames})


// // reduce
// // 1. sum of array element((accumulator, currentValue, currentIndex, array), initialValue)
// // 2. flatten an array
// // 3. occurence of an element /item in an array 
// // 4. find the maximum value.
// // 5. grouping data by a property

// // 1 Examples 1; sum of array element

// const myNums =[1,2,3,4,5];

// const sum = myNums.reduce((accumulator, currentValue) => (accumulator + currentValue),1)
// console.log({sum})

// // flatten an array
// const nestedArray = [[1,2], [3,4], [4,6]];




// const flattenedArray = nestedArray.reduce((accumulator, currentValue)=> (accumulator.concat(currentValue)), []).reduce ((accumulator, currentValue) => {
//     if (!accumulator .includes(currentValue)) {
//         accumulator.push(currentValue)
//     }
//     return accumulator;

// },[]);

// // const nonRepeatedResult = flattenedArray.filter((e, index, array) => array .indexof(e)=== index)
// // console.log({nonRepeatedResult})

// // 2 
// const nestedArray2 = [[1,2],[[3,4], [5,6]], [7,8]]
// // .reduce((acc, currentValue, currentIndex ,array) => {
// //     if(typeof currentValue[0] === "Object") {

// //     const curr
// //     }
// // })

// // Example 3: occurence of an element/ item in an array
// const myFruits = ["Grape","Banana","Banana","Orange"]

// const count = myFruits.reduce((acc, curr) =>{
//     acc[curr] = (acc[curr] || 0) + 1;

//     return acc
// }, {})

// console.log({myFruits})   


// // Examples 4. find the maximum value.

// const maxExample =[100,30,3,10,4]

// const max = maxExample.reduce((acc, curr) => curr > acc ? curr : acc, maxExample[0]);

// console.log({max})



// object : key, values and methods

// methods functions stored as a value for a key in an object

const carA = {

    model: 2013,
    colour: "Black",
    brand: "Toyota",
    price: 2000,
    horsepower: 900
}

console.log(carA.model)
console.log(carA.colour)
console.log(carA.brand)
console.log(carA.price)

console.log(carA["horsepower"])

// EXAMPLE 2
const cars = {
    firstcar: carA,

    secondCar: {
        model: 2018,
        colour: "green",
        brand: "nissan",
        price: 20000,
        horsepower: 1000,

    },
}


const carAprice = cars.firstcar.price
console.log({ carAprice })


// object with methods

const cohort6 = {
    male: {
        name: ["Abdllahi", "Mueez", "Idrees", "Ridwan"]
    },

    female: { name: "lateefah" }

}

const firstStudent = cohort6.male.name[0];

console.log((firstStudent))


const dltAfrica = [
    {
        cohorts: {
            cohort1: {
                names: ["Biodun", "Dolu", "Anike", "Shola"],
                hobbies: { Biodun: "Football", Dolu: "Eating", Anike: "Dancing", Shola: "Running", }
            },
        },
    },
   
       {     
        tutors: {
            name: ["Anate", "SoliuA", "SoliuM", "Abdullah"],
            hobbies: {
                Anate: "Football", SoliuA: "Eating", SoliuM: "Dancing", Abdullah: "Running",
            },
        },
    },


];


const sholaHobby = dltAfrica[0].cohorts.cohort1.hobbies.Shola;
console.log({sholaHobby})




const studentAndTutor= {[dltAfrica[1].tutors.name[0]]: dltAfrica[0].cohorts.cohort1.names[1] }
console.log(studentAndTutor)



// object with methods

const dynamicKey = "year"


const carB = {
    name: "big daddy",
    brand: "Toyota",
    date: 2013,
    updateYear : function (newDate) {
        this.date = newDate
    }
}

carB.updateYear(3004)
console.log(carB.date)


const student = {
    name:"muiz" ,
    age:10,
    favnum:[1,2,3,4,5,6,7,8,9,10],
    favSum:function () {
    const sum =    this.favnum.reduce((accmulator,currentVlaue)=> accmulator + currentVlaue,0)
    return sum
    }
    
    
}

console.log({sum: student.favSum()})



const student = {
    name:"muiz",
    age: 10,
    grade:"tenth",
    subject:["math","english","computer"],
    address:{city:"pegamut",country:"nigeria"}

}
console.log(student)


const car ={
    brand :"toyota",
    model :"camry",
    year: 2023,
    color:"yellow"
}
console.log(car)

console.log= (car.brand)
console.log=(car[year])

car.color= (blue)
console.log(car)

car.log=cars
console.log(cars)

































































































































































































































































































