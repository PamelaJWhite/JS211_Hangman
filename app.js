'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//solution = Store a solution, string, as a global variable
let solution = "hello"
//let correctGuesses =  array of correct letters and dashes 
let correctGuesses = []
//wrongGuessArray = array of incorrect guessed letters 
let wrongGuessArray = []


//Correct letter(s) function: 
//Takes in a letter
const correctLetters = (letter) => {
  console.log(`CL is running`)
  //creates a variable that holds an empty array for matching indexes
  let matchingIndexes = [] 
    
  //Loops over the solution string 
  for (let i=0; i<solution.length; i++) {
       
  //If a letter in the solution string matches the input letter, 
    if (letter == solution[i]) {
      console.log(`CL letter ${letter} matches ${solution[i]}`)
      //add the letter to correctGuesses array at i
      correctGuesses.splice(i, 1, letter)
      matchingIndexes.push(i)
      }

    // for the first guess only, make dashes where there is no letter
    else if ((letter !== solution[i])&& (correctGuesses.length !== solution.length)) {
      //add a dash to correctGuesses array at i
      correctGuesses.splice(i, 0, "-")
      }
      console.log(`CL correct guesses array: ${correctGuesses}`)
  }

  //if after looping through the solution, the matchingIndexes array is empty
  if (matchingIndexes.length == 0) {
    console.log(`CL There's nothing in the matching indexes array`)
    //add the wrong letter to the wrongGuessArray 
    wrongGuessArray.push(letter)
    console.log(`CL wrong guesses array: ${wrongGuessArray} `)
    }
}

//Print board function
const printBoard = () => {
  //console.log correctGuesses and wrongGuessArray
  console.log(`Wrong guesses: ${wrongGuessArray}`)
  console.log(`Current word: ${correctGuesses}`)
}

//detect win function
const detectWin = () => {
  //if guesses array does not contain a -, you win
  if (!correctGuesses.includes("-")) {
    console.log(`You win!`)
    return "You win!"
  }

  //if wrong guess array length > 6, you lose
  if (wrongGuessArray.length > 6) {
    console.log('Too many guesses. You lose!')
    return "Too many guesses. You lose!"
  }
}

const hangman = (letter) => {
  //make the letter lower case
  letter = letter.toLowerCase()
  //if it's not a letter || more than one letter 
  if(!letter.match(/[a-z]/) || letter.length !== 1){
    console.log(`Please input one letter`)
    return false
  }

  //|| if the letter has already been guessed
  if(wrongGuessArray.includes(letter) || correctGuesses.includes(letter)){
  console.log(`you've already guessed that letter`)
  return false
  }
  //correct letter function(letter)
  correctLetters(letter)
  //print board()
  printBoard()
  // detect win() 
  detectWin()
}

const getPrompt = () =>  {
    rl.question('letter: ', (letter) => {
      if (hangman(letter) == `You win!`){
        return true
      }
      if (wrongGuessArray.length > 6) {
        console.log(`The solution was: ${solution}`)
        return false
      }
      getPrompt();
    });
  }



//Tests
if (typeof describe === 'function') {

  describe('detectWin()', () => {

    it('should be able to detect a win', () => {
      solution = 'hello';
      correctGuesses = ["h", "e", "l", "l", "o"];
      assert.strictEqual(detectWin(), 'You win!');
    });
    it('should be able to detect a not-win', () => {
      solution = 'hello';
      correctGuesses = ["h", "-", "-", "-", "-"];
      wrongGuessArray = ["r", "s", "t", "j", "x", "p", "i"];
      assert.strictEqual(detectWin(), "Too many guesses. You lose!");
    });
   });

    describe('correctLetters()', () => {

      it('when a correct letter is guessed, create an array with the letter in the correct position and dashes for the other letters', () => {
        solution = 'hello'
        correctGuesses = []
        correctLetters("e")
        // assert.strictEqual(correctGuesses, ["-", "e", "-", "-", "-"])//HOW DO I TEST THIS AS AN ARRAY? This comes back 
        // AssertionError [ERR_ASSERTION]: Values have same structure but are not reference-equal:

        // [
        //   '-',
        //   'e',
        //   '-',
        //   '-',
        //   '-'
        // ]
        
        //       + expected - actual
        assert.strictEqual(correctGuesses[0], "-");
        assert.strictEqual(correctGuesses[1], "e");
        assert.strictEqual(correctGuesses[2], "-");
        assert.strictEqual(correctGuesses[3], "-");
        assert.strictEqual(correctGuesses[4], "-"); 
      });
      it('when the first guessed letter is wrong, it should create an array of dashes', () => {
        solution = "hello"
        correctGuesses = []
        correctLetters("g")
        assert.strictEqual(correctGuesses[0], "-");
        assert.strictEqual(correctGuesses[1], "-");
        assert.strictEqual(correctGuesses[2], "-");
        assert.strictEqual(correctGuesses[3], "-");
        assert.strictEqual(correctGuesses[4], "-");
      });
    })
    

    describe('hangman()', () => {
      it('should only allow letters', () => {
          assert.strictEqual(hangman('1'), false);
          assert.strictEqual(hangman('='), false);
          assert.strictEqual(hangman('      '), false);
        });
      it('should only allow one letter', () => {
          assert.strictEqual(hangman('aarf'), false);
          assert.strictEqual(hangman(''), false);
        });   
    })
  }

  
else {
  getPrompt();
}

