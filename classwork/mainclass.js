import  { Classroom } from "./class.js";


const myClassroom = new Classroom()


myClassroom.addStudent("Lateefat",200, 51)
myClassroom.addStudent("Muiz",20, 51)
myClassroom.addStudent("Soliu",400, 51)
myClassroom.addStudent("Ridwan",500, 51)
myClassroom.addStudent("Dolu",600, 51)



const filteredResult = myClassroom.filterStudentGradeAndName();

const mapResult = myClassroom.getMappedResult()

console.log(filteredResult)
console.log(mapResult)