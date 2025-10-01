//filter

const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values)
//for each does return aything

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => {num > 4})        //it returns the values
//filter always use a callback function

//console.log(newNums);
/*
const newNums = myNums.filter( (num) => {
    return num > 4       //if {} are used then we have to mention 'return' keyword
})   
*/

const newNums = []

myNums.forEach ( (num) => {
    if( num > 4 ) {
        newNums.push(num)
    }
})

console.log(newNums);


const books = [
    {title : 'Book One', genre : 'Fiction', publish : 1981, edition: 2010},
    {title : 'Book Two', genre : 'History', publish : 1986, edition: 2004},
    {title : 'Book Three', genre : 'Science', publish : 1985, edition: 2005},
    {title : 'Book Four', genre : 'Pyscho', publish : 2002, edition: 2006},
    {title : 'Book Five', genre : 'Fiction', publish : 1981, edition: 20010},
    {title : 'Book Six', genre : 'History', publish : 1986, edition: 2005},
    {title : 'Book Seven', genre : 'Science', publish : 1985, edition: 2004},
    {title : 'Book Eight', genre : 'Pyscho', publish : 1980, edition: 2004},
    {title : 'Book Nine', genre : 'Science', publish : 2002, edition: 2006},
    {title : 'Book Ten', genre : 'Fiction', publish : 1980, edition: 2004},  
];

//const userBooks = books.filter( (bk) => bk.genre === 'History')

const userBooks = books.filter ( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
})

console.log(userBooks);




