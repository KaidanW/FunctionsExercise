// SCOPE
// Scope determines the accessibility (AKA Visibility) of variables
// Where we create variables determines where they can be used/called

// FUNCTION SCOPE (Each function has its own scope)

// Example 1
const location = `Scranton, PA`;

function dunderMifflin(){
  const regionalManager = `Michael Scott`;

  // This is OK because the console log is also inside of the function where the regionalManager variable was created (NOTE: The regionalManager is scoped to the dunderMifflin function)
  console.log(regionalManager);
}
dunderMifflin(); // Michael Scott

// This is OK because the location variable is scoped to the entire JS file (AKA Globally Scoped)
console.log(location); // Scranton, PA

// NOT okay because the regionalManager variable was created inside the dunderMifflin function so it is scoped to that function. Therefore is cannot be accessed outside of the function.
// console.log(regionalManager);

console.log('====================================');

// Example 2
let dwight = `Assistant to the Regional Manager`;
function promotion(){
  dwight = `Assistant Regional Manager`;
}

// Displays the initial value of the dwight variable because the function has not been run/executed
console.log(dwight); // Assistant to the Regional Manager

promotion();

// Displays the updated value of the dwight variable because the function was/executed. Also, it is able to access the new value because the variable was created/declared outside of the function.
console.log(dwight); // Assistant Regional Manager

console.log('====================================');

// Example 3
let declare = ``;

function bankruptcy(){
  let declare = `I DECLARE BANKRUPTCY!`;

  // First, checks for a variable with the name declare inside of the function/scope. If a variable with the name declare cannot be found inside of the function, then it will check for a variable with the name declare outside of the function.
  console.log(declare);
}

bankruptcy(); // I DECLARE BANKRUPTCY!

// Displays the empty string `` value of the declare variable created outside of the bankruptcy function (NOTE: This is because the variable in the function is a new/different variable.)
console.log(declare);

console.log('====================================');

// BLOCK SCOPE (Conditional Statements and Loops have Block Scope)
// Conditional Statement Example
const seasons = 9;
if (seasons === 9){
  const episodes = 201;

  // OK because the seasons variable is globally scoped (AKA Scoped to the entire JS file) so it can be accessed inside of this conditional statement
  console.log(seasons); // 9
} else {

  // If the condition for this conditional statement is false this console log will run. However, since the episodes variable is in the code that runs only if the condition is true the episodes variable is never created/declared
  // console.log(episodes);
}

// NOT OK because the episodes variable is scoped to the conditional statement
// console.log(episodes);

console.log('====================================');

// Loops Example (In this example the code in the loop runs twice)
for (i = 1; i <= 2; i++){
  
  // Ok, because a variable can be created/declared in a loop without getting an error because it is created each time through the loop (AKA It is like it is being created for the first time each time through the loop)
  const fireDrill = `What's the procedure?`;
  console.log(fireDrill);
}

// NOT OK, because the fireDrill variable is scoped to the loop
// console.log(fireDrill);

console.log('====================================');

// LEXICAL SCOPE
// Lexical scope is the ability for function scope to access variables from the "parent" scope (NOTE: The "parent" scope be another function or the entire JS file)

// Nested Functions Example
function philosophy(){
  const question = `What are you doing right?`;

  function answer(){
    // Ok because the answer function is inside the scope of the philosophy function which is where the question variable was created
    console.log(question);

    const response = `Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are doing, or where you've been, ever, for any reason whatsoever`;
    console.log(response);
  }
  // Must run/execute the answer function for it to run when running/executing the philosophy function
  answer();


  console.log(response);
}

philosophy();
/*
What are you doing right?
Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are doing, or where you've been, ever, for any reason whatsoever
*/

// NOT OKAY because the answer function is scoped to the question function
// answer();
