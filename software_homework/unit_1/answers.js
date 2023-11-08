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