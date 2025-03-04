// // Accessing elements in html file

// //  class name
// const body = document.getElementsByClassName
// ("body")

// console.log(body)

// // id
// const header = document.getElementById
// ("header")

// console.log(header)

// // TAG NAME
// const home = document.getElementsByTagName
// ("h2")
// console.log(home)

// // QuerySelector

// const classElements = document.querySelector(".body")
// console.log(classElements)

// //  Queryselector ALL

// const all = document.querySelectorAll(".body")
// console.log(all)

// const oll = document.querySelectorAll("#header")
// console.log(oll)

// dom manipulation










// TextContent

const header = document.getElementById
("header")

header.textContent = "Hello universe!"

const p = document.querySelector
("p")
p.textContent = "i am a cohort-6 student in dlt !"

const h6 = document.querySelector('h6')
h6.textContent = "i enjoy learning in dlt"

// innerhtml

const container = document.querySelector("div")
container.innerHTML = `
<h1>i do read <h1>
<p> and play football <p>
`


// styling

container.style.backgroundColor = "black"
container.style.color = "orange"

// // adding and removing class name

h6.classList.add("subheader")

p.classList.remove("body")

const bodyElements = document.
getElementsByClassName("body")

console.log(bodyElements)

// Adding event listener

// click event

// document.querySelector("button").addEventListener("click", function(){
//     document.getElementById("message").textContent = "Button Clicked"
// })

document.querySelector("button").addEventListener("click", function(){

    const message = document.getElementById("message")
    if(message.textContent === "Hello!"){
        message.textContent = "Button Clicked"
    }else{
        message.textContent = "hello!"
    }

} )

// mouse event

document.getElementById("box"),addEventListener("mouseover", function (){
    document.getElementById("box").style.backgroundColor ="yellow"
})
document.getElementById("box"),addEventListener("mouseout", function (){
    document.getElementById("box").style.backgroundColor ="black"
})

// Keyup

document.getElementById("textInput").addEventListener("keyup",function(event){
    document.getElementById("output").textContent = 'you pressed:' + event.key
})


function greet(name){
    alert("hello, "+ name + "!");
}

document.getElementById("greetBtn").addEventListener("click", () => greet("muiz"))


const nexBox  =document.createElement('div')

nexBox.textContent = "How are you doing Today"

document.body.appendChild(newBox)    

const box = document.getElementById("box")

const newH1 = document.createElement("h1")

newH1.textContent = "bro"
newH1.style.color ="white"

box.appendChild(newH1)








