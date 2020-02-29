//1.Create a constructor function for the hangman game
//2.Setup two attributes. One for the word itself. Another for the number of guesses allowed
//3.Create two instances of it and print both to the console

const Hangman = function (word, remainingGuess) {
    this.word = word
    this.remainingGuess = remainingGuess
}

const game1 = new Hangman('tomate', 3)
const game2 = new Hangman('potato', 1)

console.log(game1)
console.log(game2)