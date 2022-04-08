'use strick'


const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

const str =
`______
|    |
|    0
|   /I\\
|   / \\
|`

const word = 'javascript';
let wrongGuesses = 0;
let lettersLeft = word.split('');
let arr = str.split('\n');
let stages = [];
let scoreBoard = "_".repeat(word.length).split('');
let win = false;

console.log(`Welcome to Hang Man\nGuess a ${word.length}-letter word, letter by letter\nPush "Enter" for start`);


function hangman(input){

  if(lettersLeft.includes(input)){
    let charIndex = lettersLeft.indexOf(input);
    scoreBoard[charIndex] = input;
    lettersLeft[charIndex] = '$';
    rl.setPrompt(`\n\n${scoreBoard.join('')}\n\n******\n${stages.join('')}\nGuess next letter -> `);
    rl.prompt();
    if(word === scoreBoard.join('')){
      rl.setPrompt(`\n\n******\nYou won! That word is ${scoreBoard.join('')}\n******\n`);
      rl.prompt();
      rl.close();
    }
  }else{
    stages.push(`${arr[wrongGuesses]}\n`);
    rl.setPrompt(`\n\n${scoreBoard.join('')}\n\n******\n${stages.join('')}\nOops! Try again\nGuess next letter -> `);
    rl.prompt();
    if(wrongGuesses === arr.length){
      rl.setPrompt(`******\n******\nYou lose!\n\n`);
      rl.prompt();
      rl.close();
    }
    wrongGuesses += 1;
  }

}


rl.on('line', (input) =>{
  if(input.length === 1 && Number.isNaN(+input)){
    hangman(input);
  }else console.log('Type just one letter')
});
