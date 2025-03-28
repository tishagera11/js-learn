const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)     //push pushes one array into another

//console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros)      //concat gives a new array with both the arrys merged
console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros]      //spread operator
//spread and concat works same but spread is mostly used
//becuase in spread we can add more than one array and concat can only have one array at a time
console.log(allNewHeros)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
//if array has more arrays inside it we use flat to make it a single array
const real_another_array = anotherArray.flat(Infinity)      //flat makes the array containing subarrays into a single flat array
console.log(real_another_array)

//data scrapping

console.log(Array.isArray("tisha"))
//isArray returns true if an object is an array, otherwise false .
console.log(Array.from("tisha"))
// Array.from() offers a way to convert these objects into actual arrays.
console.log(Array.from({name:"tisha"}))     //interesting we need to specify whose array is to be made whther values or keys

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
//array.of makes the array of passed objects