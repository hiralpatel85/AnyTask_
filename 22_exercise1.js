let x = Math.floor(Math.random() * 100);
let score;
let inp;
while (x != inp) {

  if (x > inp && inp > 0) {
    inp = prompt("Guess The number");
    inp = Number.parseInt(inp);
    alert(`${inp} is leaser than the Random number`)
  }
  else if (x < inp && inp < 100) {
    alert(`${inp} is greater than the Random number`)
    //   inp = prompt("Guess The number");
    // inp= Number.parseInt(inp);
  }
  else if (x == inp) {
    console.log("You guess the correct number")
  }
  score += 1;
}
conssole.log("Time to play this match", score);
console.log(`Your score is ${100 - score}`);