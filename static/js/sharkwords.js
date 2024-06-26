const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;
let correctGuesses = 0;

// For now, we'll hardcode the word that the user has to guess
// You can change this to choose a random word from WORDS once you
// finish this lab but we hard code it so we know what the word is
// and can tell if things look correct for this word
const word = 'hello';

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//  #word-container
function createDivsForChars() {
  for (const letter of word) {
    document.querySelector('#word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
}

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
function generateLetterButtons() {
  for (const char of ALPHABET) {
    document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', `<button>${char}</button>`)
  }
}

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
function disableLetterButton(buttonEl) {
  buttonEl.disabled = true
}

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works
function isLetterInWord(letter) {
  // console.log(word[letter])
  if (word.includes(letter)) {

    return true;
  }
  return false;
}

/*
 **********  END CODE FROM PREVIOUS LAB  **************
 *************  NEW CODE STARTS HERE  *****************
 */

// Called when `letter` is in word. Update contents of divs with `letter`.
function handleCorrectGuess(letter) {
  const list = document.querySelectorAll(`.${letter}`);
  // console.log(list)
  for (const item of list) {
    item.innerHTML = letter;
  }
}

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.
function handleWrongGuess() {
  numWrong += 1;
  console.log(numWrong);
  if (numWrong === 5) {
    //disable
    //show hidden a element (id = "play=again")
  }
  else {
    //img = "/static/img/guess${numWrong}"
    const img = document.querySelector("img");
    img.setAttribute('src', `guess${numWrong}` )
  }
  // Replace this with your code
}

// Reset game state. Called before restarting the game.
function resetGame() {
  window.location = '/sharkwords';
}

// Function that should be called when a letter button is clicked.
function buttonClicked(evt) {
  const buttonLetters = evt.target.textContent;
  const buttonElement = evt.target;
  // get the button that was clicked using the event target
  // get the letter inside the button that was clicked
  // you should then check if the letter is in the word
  const isInWord = isLetterInWord(buttonLetters);

  if (isInWord) {
    handleCorrectGuess(buttonLetters);
  }
  else {
    handleWrongGuess(buttonLetters);
  }

  disableLetterButton(buttonElement);
  // if it is, call `handleCorrectGuess`
  // if it is not, call `handleWrongGuess`
  // finally, disable the button so the letter can't be clicked again
  // YOUR CODE HERE
}

// This function is called to start the game.
function startGame() {
  createDivsForChars();
  generateLetterButtons();

  // This selects all buttons in the #letter-buttons section
  const buttons = document.querySelectorAll('#letter-buttons button');

  for (const button of buttons) {
    button.addEventListener('click', buttonClicked);
    // add an event handler that calls the buttonClicked function when a button is clicked
    // YOUR CODE HERE
  }

  // add an event handler to handle clicking on the Play Again button
  // YOUR CODE HERE
}

startGame(); // Call startGame() when the page loads.