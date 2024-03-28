// FUNCTION ARRAY METHODS (ForEach, Map, & Filter)
// Function array methods are array methods that require a function to be passed in as an argument (NOTE: Functions passed in as arguments for function array methods should have a parameter so the values in the array can be passed in the created function. Also, any type of function can be used as the argument for function array methods (Ex: Declaration, Arrow, or Function Expressions))

/*
Syntax Ex

array.functionArrayMethod
*/

// FOR EACH (ForEach runs/executes a function for each item in the array that the ForEach method is used on. Each time the function is run an item is passed in as an argument for the function.)

const theLionKing = [
    `Mufasa`,
    `Simba`,
    `Scar`,
    `Pumba`,
    `Timone`,
]

//Example 1
function names(n){
    console.log(n)
}

theLionKing.forEach(names)