// 4ways of creating objects

//1. literal notation : not inheritable and not reusable but readily available for use 

const student = {
    name: "soliu",
    age: 10,
    printAge: function () {
        console.log(`{this.name}'s  age is ${this.age}`)    

    }
}

console.log(student.printAge());


//2. Object contructor: it is same as literal notation just that it helps to create object dynamically using "new object()"

const person  = new Object();

person.name = "feranmi"
person.age =30

console.log(person)  
                                
person.age = 40                                
                   
console.log(person)            
                              
//3. construction function : This creates a blueprint and is reuseable. but inheritance is likely complex to structure.
                                                        
function car (name,colour, brand, horsePower,) {
    this.name = name;                            
    this.colour= colour;                   
    this.brand = brand;            
    this.horsePower = horsePower;            
 
    this.printColour =  function () {
        console.log(`${this.colour}`)
    }
}


car.prototype.printName = function() {                       
    console.log(`The car name is ${this.name}`)
}
car.prototype.printColour = function() {
    console.log(`${this.colour}`)
}

const car1 =  new car("toyota camry", "White", "toyota", 200);

console.log(car1)

console.log(car1.printColour());
console.log(car1.printName());




//4. class : it is inheritable and also reuseable. it extends the functionality of contructor function 
class House {

    constructor (type, colour, address,) {

        this.type = type;

        this.colour = colour;

        this.address = address;

    }


    printHouseAddress() {


        console.log(` ${this.address}is the address of the house with the ${this.colour} `

        );
 }
}

const house1 = new House("Storey", "Brown", "No 17, pegamut Estate")

console.log(house1)
console.log(house1. printHouseAddress());

// inheritance : IT USES EXTEND AND SUPER KEYWORDS
class StoreyBuilding extends House {


    constructor ( type, colour, address, height, windowsize) {

        super(type, colour, address)

        this.height = height
        this.windowsize=windowsize
    }

    printHouseAddress() {
        console.log(
            `${this.address}is the address of the house with ${this.height} height`
        );
    }

    printType() {
        console.log(`${this.type} is the house type`)
    }

}

const newStoreyBuilding = new StoreyBuilding (
    "storey",
    "white",
    "ijagbo, offa road",
    200,
    16
);

console.log(newStoreyBuilding)

console.log(newStoreyBuilding.printHouseAddress())
console.log(newStoreyBuilding.printType())