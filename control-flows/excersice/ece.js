let purchaseAmount = 250,
let discount = 0,


if (purchaseAmount>= 200) {
    discount = 20
}else if (purchaseAmount>= 100){
    discount= 10
}else if (purchaseAmount>= 50) {
    discount=5
}else {
    discount = 0
}

console.log(`You got a discount of ${discount}`)

