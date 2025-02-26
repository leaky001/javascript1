// Equality Operator

console.log(5 === "5")
console.log(true === 1)
console.log(null === undefined)
// 

let obj1 = {name: "lateefat"}
let obj2 = {name: "lateefat"}

console.log( obj1 === obj2)
console.log(typeof obj1)

let arra1 =  [1,2,3]
let arra2=  [1,2,3]
console.log(typeof arra1)

console.log(arra1 === arra2)


console.log([]== 1)
console.log([1]== 1)
console.log(null== undefined)
console.log("late" == "kabir")
console.log([1 ,2] == "1,2")

// loop 



// 
let time = 1;
for (let i =1; i <= 10; i+= 2) {
    console.log(`${"odd number"} = ${time * i}`);
}
 
 for (let i =1;  i<= 5; i++) {
    if(i === 3) {
        continue

    }
    console.log (i)
     
}
let arra = [ 'banana', 'apple', 'grape', 'orange' ]
  for ( let i = 1; i < arra.length; i++)  {
    console.log(arra[i])
  }
    let myname = "muiz";
    for( let i=0; i < myname.length; i++ ) {
        console.log(myname[i])
    }

    let user ={Name: "Muiz", Age: "ten", City: "lagos"}

    for(key in user) {
        console.log(user[key])


    }

    let mycolor = ['white', 'green', 'blue', 'black']

     for (color of mycolor) {
        console.log(color)
        
     }
        
    
    

    let y = 0;

    while(y <5) {
        y++;

        if(y === 3) {
            continue;
        }
        console.log(y)

    }

    let fruits = [ "banana", "apple", "grape", "orange" ]
     let i = 0;
     while(i < fruits.length) {
         console.log(fruits[i]);
        i++
     }
     
     const student = ['Abdullah', 'Mubarak', 'Abeeb', 'ridwan' ]
     student.forEach((student, i) => {
        console.log(`index ${i}: ${student}`)
     }
    )


    

     
       





    






    
