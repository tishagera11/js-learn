const score = 400                   //automatically detected as number
console.log(score)

const balance = new Number(100)     //specially casted as number 
console.log(balance)

console.log(balance.toString().length)      //converted to string so now we can use string's properties also 
console.log(balance.toFixed(2))             //gives decimals upto number mentioned

const otherNumber = 23.1234
console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++++++++MATHS+++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))           //changes only -ve values into +ve
console.log(Math.round(4.6))        //rounds off the number
console.log(Math.ceil(4.2))         //rounds off to the max value
console.log(Math.floor(4.9))        //rounds off to min value
console.log(Math.min(4,9,3,5,8))
console.log(Math.max(4,9,3,5,8))

console.log(Math.random())              //any random value between o and 1
console.log(Math.random()* 10 + 1)      //random value above 0 beacuse we multiplied it with 10 and added 1
console.log(Math.floor(Math.random()* 10 )+ 1)      //any random single value because of floor

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max- min + 1 ) + min))      //formula for getting random value between max and min






