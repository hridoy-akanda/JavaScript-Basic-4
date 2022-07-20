let won = 0;
let lost = 0;
for (let i = 0; i < 5; i++) {
  let guessedNumber = Number(prompt("Enter a number from 1 to 5:"));
  if (guessedNumber > 5 || guessedNumber < 1) {
    console.log("Invalid Number!")
  } else {
    let randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessedNumber === randomNumber) {
      console.log("You have won!");
      won++;
    } else {
      console.log("You have lost!");
      lost++;
    }
  }
}
document.write(
  "You have won " + won + " times and you have lost " + lost + " times!"
);
