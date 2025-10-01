//reduce

const myNums = [1,2,3]

/*const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`acc: ${acc} & currval: ${currVal}`)
    return acc + currVal
}, 0)
*/

const myTotal = myNums.reduce ( (acc, curr) => acc + curr , 0 )


console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "data science",
        price : 5999
    },
    {
        itemName : "Python Course",
        price : 3999
    },
    {
        itemName : "java Course",
        price : 4999
    },
]

const priceToPay = shoppingCart.reduce ( (acc, item) => acc + item.price, 0)

console.log(priceToPay)
