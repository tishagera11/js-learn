// immediately invoked function expressions (iife)

(function chai(){           //named iife
    console.log(`DB CONNECTED`)
})();         //wrapped the whole function in paranthesis with another paranthesis to execute the function
//always end an iife function with semi colon to write another iife



( (name) => {               //unmanem //arrow function iife
    console.log(`DB CONNECTED TWO ${name}`)
})('tisha')


/*
JAVA SCRIPT EXECUTION CONTEXT

