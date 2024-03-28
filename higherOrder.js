// Higher Order Functions
// Passing a function sas an arguemtn into another function that has a parameter

// Example 1 (Passing a pre-exsiting function as the argument for a parameter)

//
function hello(){
    console.log(`Hello World!`)
}

function print(greet){
    greet()
}

print(hello)