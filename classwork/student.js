import {person} from "./person"


class student extends person {

    constructor (name, age, grade) {

        super( name, age , grade)

    }

}
const student1 = new student ("muiz", 20, "A")
console.log(student1)
const student2 = new student ("Bola",25,"B")
console.log(student2)
const student3 = new student ("sola",27,"F")
console.log(student3)
const student4 = new student ("Bolu",26,"E")
console.log(student4)
const student5 = new student ("ola",28,"c")
console.log(student5)

