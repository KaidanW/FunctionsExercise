// Function Basics
// Function (AKA reusable procedures) are lines of codr that can be used multiple times
// There are different types of functions, this lesson goes over Declaration Functions whihc is the most used way to write a function

/*
Syntax example for a Declaration Function

To create/Declare the function...
function functionName(){
    CODE TO BE RUN WHEN FUNCTION IS USED GOES HERE;
}
To call (run/execute)..
functionName();
*/

//Example 1
//Creates the phineasAndFerb function
function phineasAndFerb(){
    console.log(`Hey Ferb, I know what we're gonna do today`);
}


phineasAndFerb();  //Hey Ferb, I know what we're gonna do today

console.log(`====================================`)

//Example 2
// A function can have multiple lines inside of it
function perry(){
    console.log(`Hey...`);
    console.log(`where's Perry?`);
}

perry();
/*
Hey...
where's Perry?
*/
perry();
/*
Hey...
where's Perry?
*/

console.log(`====================================`)

// Parameters and Arguments
// Example 1
//
function bestCharacter(char){
    console.log(` ${char} is the best character on Phineas and Ferb`);
}
// "Dr. Heinz Doofenshmirtz is the best chracter on Phineas and Ferb"
bestCharacter(`Dr. Heinz Doofenshmirtz`);

bestCharacter(`Major Francis Monagram`)

console.log(`====================================`)

// Example 2
//
function doofAndPerry(adjective){
    console.log(`Oh Perry the Platypus, how un${adjective} and by un${adjective} I mean COMPLETELY ${adjective}`);
}
doofAndPerry(`expected`);

console.log(`====================================`)

//Example 3
function openingSong(num){
    console.log(`Theres ${num} days of summer vacation...`)
}
// Parameters can accept all data types (Strings. Numbers, Etc.)
openingSong(104); // There's 104 days of summer vacation 

console.log(`====================================`)

// Example 4
//Functions can have multiple parameters
function doof(name, animal){
    console.log(`Curse you ${name} the ${animal}!`);
}
doof(`Perry`, `Platypus`); // Curse you Perry the Platypus!

console.log(`====================================`)

// Example 5
// A default argument can be set for a parameter
function invention(inator = `Inator`){
    console.log(`Behold my new evil scheme, the ${inator}-Inator!`);
}
// Runs function with the default argument value
invention(); // Behold my new evil scheme, the I don't care-Inator!
// Runs function by overriding `I don't care` Value
invention(`I don't care`) //Behold my new evil scheme, the Inator-Inator!

console.log(`====================================`)

// RETURN KEYWORD
// example 1
// The RETURN keyword stops the execution of a funtion and returns a value if a value is present
function isabella(){
    return (`What'cha Doin?`);
}

const question = isabella();
console.log(question); // What'cha Doin?

console.log(`====================================`)

// Example 2
// Functions will run and return what follows the return keyword on the line the return is on. However, any lines following tge line with the return on it will not run
function agentPTheme(){
    console.log(`Dooby dooby doo-bah`);
    return;
    console.log(`Agent P!`);
}

agentPTheme();


// HOISTING

curseYou()

function curseYou(){
    console.log(`Curse you Perry the Platypus!`);
}