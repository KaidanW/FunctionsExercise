// 1
function fozzieBear() {
    console.log("Wocka Wocka!");
}
fozzieBear(); 

// 2
function beaker(speak) {
    for (let i = 0; i < 4; i++) {
        console.log(speak);
    }
}
beaker("Meep"); 

// 3
function muppetShow(a, b) {
    if (a === "Muppet" && b === "Show") {
        console.log("It's time to play the music. It's time to light the lights.");
    }
}
muppetShow("Muppet", "Show"); 

// 4
function kermit() {
    return "Kermit The Frog";
}
console.log(kermit()); 

// 5.
function muppetShowSeasons(seasons) {
    return seasons === 5;
}
console.log(muppetShowSeasons(5)); 

// 6.
const manOrMuppet = function() {
    console.log("Am I a man or am I a Muppet?");
};
manOrMuppet(); 

// 7.
const rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection()); 

// 8. No

// 9. Yes

// 10a.
const newMuppetMovies = ["The Muppets", "Muppets Most Wanted"];

// 10b.
const upperMovies = newMuppetMovies.map(function(movie) {
    return movie.toUpperCase();
});
console.log(upperMovies);
