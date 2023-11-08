// write a for loop that will log the numbers 1 through 20
for (let i = 1; i <=20; i++){
    console.log(i);
}

// write a for loop that wil log only the even numbers 0 through 200
for (let i = 0; i <= 200; i += 2){
    console.log(i);
}

// fizz buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0){
        console.log("Fizz");
    }
    else if (i % 5 === 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// wild wild life
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]
// plantee's birthday
plantee[2] += 1;
// wolfy's hometown
wolfy[3] = "Gotham City";
// D'Art's second hometown
dart.push("Hawkins");
// rename Wolfy
wolfy[0] = "Gameboy";

// Yell at the Ninja Turtles
const tmnts = ["Donatello", "Leonardo", "Raphael", "Michaelanagelo"];
for (let tmnt of tmnts){
    tmnt = tmnt.toUpperCase();
    console.log(tmnt);
}

// Methods, Revisited
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
// console log titanic
console.log(favMovies[8]);
// sort (alphabetically)
favMovies.sort();
// pop it
favMovies.pop();
// push GOTG
favMovies.push('Guardians of the Galaxy');
// reverse the array
favMovies.reverse();
// shift (remove from beginning of array)
favMovies.shift();
// unshift (add to beginning of the array)
favMovies.unshift('The Two Towers');
// splice Django Unchained and add Avatar
favMovies.splice(favMovies.indexOf('Django Unchained'), 0, "Avatar");
// slice the last half of the array. returns a copy, doesnt alter array
const someMovies = favMovies.slice((favMovies.length)/2);
// console log final results
console.log(favMovies, someMovies);
// console log index of Fast and Furious
console.log(favMovies.indexOf('Fast and Furious'));

// Where's Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];
// remove eggbert using splice
whereIsWaldo.splice(whereIsWaldo.indexOf('Eggbert'), 1);
// change Neff to No One
whereIsWaldo[2][2] = "No One";
// access and console.log Waldo
console.log(whereIsWaldo[2][1][1]);