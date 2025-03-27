console.log("2" > 1);               //datatype should alwyas be same in conversion
console.log("02" > 1);

console.log(null > 0);               // avoid such comaprisons
console.log(null == 0);             //==  & comparison work differently
console.log(null >= 0);             //comparisons convert null into 0 thats why this is true  

console.log(undefined == 0);          
console.log(undefined > 0);
console.log(undefined < 0);



// === is strict check: it does check the datatypes also

console.log("2" === 2);
