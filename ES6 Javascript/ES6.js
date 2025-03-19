// Module defination 
 // module is when you write a  set or block of a code that can be reuseable in anyother files



import { simpleInterest , circleAreaCircum} from "./math.js"

// calculate simple interest on the  principal #50,000. provided that the rate is 5% for a period of 2years

const accumlatedInterest = simpleInterest(50000,5, 2, "day")

console.log({accumlatedInterest})





//circumference of a circle and its area


const area = circleAreaCircum(10 , "area")

console.log(area)

const circum = circleAreaCircum(10 , "circum")

console.log(circum)

const circumArea = circleAreaCircum(10 , "areacircum")

console.log(circumArea)




