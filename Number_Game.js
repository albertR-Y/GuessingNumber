// Re-create the Guessing number game//

let maxNum = parseInt(prompt("What is the max number: "))
while (!maxNum) {
    maxNum = parseInt(prompt("Please enter a valid number: "))
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;
let guessNum = parseInt(prompt("What is your guess? "))
let attempts = 1

while (parseInt(guessNum) !== targetNum){
    if (guessNum === "q")
    break
    attempts += 1;
    if (guessNum > targetNum) {
        guessNum = prompt("Your guess is too high, Try again ");
    } else {
        guessNum = prompt("Your guess is too low, Try again ")
    } 
}
if (guessNum === "q"){
    console.log("You forced stopped")
} else{
    console.log(`It took you ${attempts} attempts and the number was ${targetNum}`)
}
