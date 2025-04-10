const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(  function (item){      //foreach uses callback function
    console.log(item);                   //call back function does not have a name
})

/*coding.forEach( (item) =>{
    console.log(item)
} )

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr)
})
*/

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "js"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
})