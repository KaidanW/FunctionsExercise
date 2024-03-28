// SPREAD AND DESTRUCTURING WITH FUNCTIONS (Parameters and Arguments)

//ARRAYS
const ghostbusters = [
    `Egon Spengler`,
    `Peter Venkman`,
    `Ray Stantz`,
    `Winston Zeddemore`,
]

// Without spread or Destructuring
function showGB1(g){
  console.log(`Without Spread or Destructuring`)
  console.log(g[0])
  console.log(g[1])
  console.log(g[2])
  console.log(g[3])
}

// Displays each item from the ghostbusters array by accessing each one using index
showGB1(ghostbusters);
/*
Without Spread or Destructuring
Egon Spengler
Peter Venkman
Ray Stantz
Winston Zeddemore
*/

console.log(`====================================`)

// Spread
function showGB2(a, b, c, d){
    console.log(`Using Spread`)
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
}
showGB2(...ghostbusters)
/*
Using Spread
Egon Spengler
Peter Venkman
Ray Stantz
Winston Zeddemore
*/