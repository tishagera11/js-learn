// immediately invoked function expressions (iife)
//jo function immediaately execute ho jaaye
//global scope ke pollution se problem hoti toh usko hatane ke liye iife is used

(function chai(){           //named iife
    console.log(`DB CONNECTED`)
})();         //wrapped the whole function in paranthesis with another paranthesis to execute the function
//always end an iife function with semi colon to write another iife


//arrow function iife

( (name) => {               //un named iife
    console.log(`DB CONNECTED TWO ${name}`)
})('tisha')     //pass name


/*
JAVA SCRIPT EXECUTION CONTEXT

global execution context & function execution context 

2 phases:
memory creation phase & code execution phase




