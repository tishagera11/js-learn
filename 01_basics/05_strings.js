const name = "tisha"
const repoCount = 50

//console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//using backticks for better code readability

const gameName = new String('Tisha-G')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))                 //gives letter of mentioned index
console.log(gameName.indexOf('s'))              //gives index of mentioned letter

const newString = gameName.substring(0,4)       //connot give -ve values
console.log(newString)

const anotherString = gameName.slice(-8,4)      //can give -ve values
console.log(anotherString)

const newStringOne = "     tisha   "
console.log(newStringOne);
console.log(newStringOne.trim());        
//trim removes the extra spaces 

const url ="https://tisha.com/tisha%20gera"
console.log(url.replace('%20', '-'))    //replces %20 with -
console.log(url.includes('sundar'))     //tells where the word mentioned in included or not

console.log(gameName.split('-'))        //split the string where - is found





