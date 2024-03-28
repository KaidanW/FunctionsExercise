// ARROW FUNCTIONS
// An Arrow Function is a newer way to create functions that includes features that function declarations don't have
// NOTE: Anything that can be done with a delcration function can also be done with an arrow function with the exception of hoisting

/*
Syntax Example

functionName = () => {
    CODE TO BE RUN GOES HERE
}
*/

console.log(`========================================`)

// Example 1
spiderManLyrics = () => {
    console.log(`Spider-Man, Spider-Man. Does whatever a spider can.`);
    console.log(`Spins a web any size. Catches theives just like flies.`);
    console.log(`Look out, here comes the Spider-Man`);

}

spiderManLyrics();

console.log(`========================================`)

// Example 2
// Parenthesis () can be used instead of curly brackets {} 
spidermanVillians = () => (
    [
        `Green Goblin`,
        `Sandman`,
        `Doc ock`,
        `The lizard`,
        `Electro`,
    ]
);

const sV = spidermanVillians();
console.log(sV)

console.log(`========================================`)

//Example 3
// When neithre curly brackets nor parenthesis are used, an arrow function returns the value after the =>
borough = () => `Queens, NY`;
console.log(borough());

console.log(`========================================`)

//Example 4
//Parenthesis () around the parameter name are not needed when creating an arrow function with a single parameter.\
movies = num => {
    console.log(`There are ${num} good live action Spider-Man movies`);
}
movies(8); //There are 8 good live action Spider-Man movies

console.log(`========================================`)

//Example 5
spiderManAdage = (wordOne, wordTwo) => {
    console.log(`With greate ${wordOne} comes great ${wordTwo}`);
}
spiderManAdage(`power`, `reponsibility`); // With great power comes great responsibility

// Example 6
// Unlike declaration functions, arrows are not hoisted therefore arrows cannot be run on a line before that function is made

shootWeb = () => {
 console.log(`Thwip!`);
}
shootWeb(); //Thwip!
