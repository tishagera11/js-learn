// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}`)
}

//Maps
// known for unique values
// remains in same order as we enter


const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "French")
map.set('IN', "India")

console.log(map)

for (const [key, Value] of map) {       // to print seprate values in key value form
    console.log(key, ':', Value)
}

const myObj = {
    'game1': 'NSF',
    'game2' : 'Spiderman'
}

/*for (const [key, Value] of myObj) {       //we can't iterateonjects the same way as arrays 
}*/